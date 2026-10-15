// Download Nave: the member types the email they joined with; the nave-download function checks the member list and
// answers with links to the Windows and Mac installers that work for one hour. Nothing is stored in the browser.
(() => {
  const config = window.NAVE_DOWNLOAD_CONFIG || {};
  const form = document.getElementById('get-form');
  const email = document.getElementById('email');
  const trap = document.getElementById('website');
  const button = document.getElementById('get');
  const message = document.getElementById('message');
  const downloads = document.getElementById('downloads');
  const say = (html) => { message.innerHTML = html; message.hidden = false; message.focus(); };
  const size = (bytes) => (Number.isFinite(bytes) && bytes > 0 ? ` · ${Math.round(bytes / 1048576)} MB` : '');
  const link = (id, file, note) => {
    const a = document.getElementById(id);
    if (file && /^https:\/\//.test(file.url)) { a.href = file.url; a.removeAttribute('aria-disabled'); }
    else { a.removeAttribute('href'); a.setAttribute('aria-disabled', 'true'); }
    document.getElementById(id + '-note').textContent = (file ? note + size(file.bytes) : 'Not available yet');
  };

  // Mac or Windows: the tab for this computer opens first; the other is one tap away.
  const tabs = [['tab-mac', 'install-mac'], ['tab-win', 'install-win']];
  const show = (which) => {
    for (const [tab, panel] of tabs) {
      const on = tab === which;
      document.getElementById(tab).setAttribute('aria-selected', String(on));
      document.getElementById(panel).hidden = !on;
    }
  };
  for (const [tab] of tabs) document.getElementById(tab).addEventListener('click', () => show(tab));
  show(/Win/i.test(navigator.userAgent) ? 'tab-win' : 'tab-mac');

  for (const button of document.querySelectorAll('[data-copy]')) {
    button.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(document.getElementById(button.dataset.copy).textContent); button.textContent = 'Copied'; setTimeout(() => { button.textContent = 'Copy'; }, 2000); } catch { button.textContent = 'Select it'; }
    });
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    message.hidden = true;
    const value = email.value.trim().toLowerCase();
    if (trap.value) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) { say('Type the email you joined Agentic AI Content with.'); return; }
    if (!config.endpoint) { say('Downloads open very soon. Check back in a little while.'); return; }
    button.disabled = true; button.firstElementChild.textContent = 'Checking…';
    try {
      const response = await fetch(config.endpoint, {
        method: 'POST',
        headers: { 'content-type': 'application/json', apikey: config.publicKey || '' },
        body: JSON.stringify({ email: value }),
      });
      const body = await response.json().catch(() => ({}));
      if (response.ok && body.ok) {
        link('dl-windows', body.windows, 'Windows 10 and 11 · 64-bit');
        link('dl-mac', body.mac, 'Apple silicon (M1 and newer)');
        // The one-line installs carry the email they just typed, so nothing is asked twice.
        const safe = value.replace(/[^a-z0-9@._+-]/g, '');
        document.getElementById('cmd-mac').textContent = `curl -fsSL https://nave.infinitxai.com/download/install.sh | bash -s ${safe}`;
        document.getElementById('cmd-win').textContent = `$env:NAVE_EMAIL='${safe}'; irm https://nave.infinitxai.com/download/install.ps1 | iex`;
        if (body.version) document.getElementById('ready-line').textContent = `Nave ${body.version} is ready for you.`;
        form.hidden = true; downloads.hidden = false; downloads.focus();
        return;
      }
      if (body.reason === 'no_installers') { say('You are on the member list. The installers are being uploaded right now: check back in a little while.'); return; }
      if (body.reason === 'not_member') { say('That email is not on the member list. Use the email you joined with, or ask in the community if you just joined: it can take a few minutes.'); return; }
      say('Something went wrong on our side. Try again in a minute.');
    } catch {
      say('Could not reach Nave. Check your connection and try again.');
    } finally {
      button.disabled = false; button.firstElementChild.textContent = 'Get Nave';
    }
  });
})();
