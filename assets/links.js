/* ============================================================
   NAVE_LINKS — the ONLY block to edit when wiring goes live.
   Shared by index.html / apply.html / nave.html / custom.html.
   Leave a value '' and every page degrades honestly:
   - BOOK '': $397 buttons route to the apply page.
   - PLAYBOOK_FORM_ACTION '': opt-in forms show the honest pending note.
   - APPLY_FORM_ACTION '': application still routes to the right page,
     and the answers fall back to a mailto (or nothing, with a note).
   - CUSTOM_FORM_ACTION '': custom-build form falls back to mailto.
   ============================================================ */
const NAVE_LINKS = {
  LEADS_ENDPOINT: 'https://ix-substrate-core-production.up.railway.app/leads',  // substrate lead capture -> state.db (LIVE)
  BOOK: '',                  // Stripe/Cal.com checkout+booking for the 1:1 install, $397
  PLAYBOOK_FORM_ACTION: '',  // Kit (ConvertKit) form action — playbook + vault opt-in (email + fields[phone])
  APPLY_FORM_ACTION: '',     // endpoint for application answers (Tally / Formspree / Kit)
  CUSTOM_FORM_ACTION: '',    // endpoint for custom-build requests
  CONTACT_EMAIL: '',         // public support email — also referenced by the legal pages
  VSL_INDEX: '',             // main VSL embed URL (squeeze page)
  VSL_NAVE: '',              // Nave offer VSL embed URL
  VSL_CUSTOM: ''             // done-for-you VSL embed URL
};

/* Shared CTA state machine */
(function(){
  /* $397 booking buttons */
  document.querySelectorAll('[data-cta="BOOK"]').forEach(function(a){
    if (NAVE_LINKS.BOOK){ a.href = NAVE_LINKS.BOOK; a.target = '_blank'; a.rel = 'noopener'; }
    else if (a.dataset.fallback){ a.href = a.dataset.fallback; }
  });
  if (!NAVE_LINKS.BOOK) document.querySelectorAll('[data-pending-note]').forEach(function(n){ n.style.display = 'block'; });

  /* Lead-capture beacon → substrate /leads (state.db). no-cors + text/plain means
     no CORS preflight; the opaque response is fine (fire-and-forget). Exposed as
     window.naveCapture so apply.html's inline script reuses it for the answers. */
  window.naveCapture = function(row){
    if (!NAVE_LINKS.LEADS_ENDPOINT) return Promise.resolve();
    try {
      return fetch(NAVE_LINKS.LEADS_ENDPOINT, {
        method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(row || {})
      });
    } catch (_e) { return Promise.resolve(); }
  };

  /* Playbook opt-in → capture name/email/phone, stash the email for the qualifier,
     then advance to /apply. A 2.5s fallback advances the visitor even if the network
     stalls. Beehiiv list opt-in layers on here once PLAYBOOK_FORM_ACTION is set. */
  document.querySelectorAll('[data-capture-form]').forEach(function(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var val = function(sel){ var el = form.querySelector(sel); return el ? (el.value || '').trim() : ''; };
      var email = val('input[type="email"]');
      var name  = val('input[name="fields[first_name]"]') || val('input[type="text"]');
      var phone = val('input[type="tel"]');
      try { if (email) sessionStorage.setItem('nave_email', email); } catch (_e) {}
      var done = false, go = function(){ if (done) return; done = true; location.href = '/apply'; };
      window.naveCapture({
        source: 'playbook', email: email, name: name, phone: phone,
        referrer: document.referrer || location.href,
        company_website: val('input[name="company_website"]')
      }).finally(go);
      if (NAVE_LINKS.PLAYBOOK_FORM_ACTION){
        try { fetch(NAVE_LINKS.PLAYBOOK_FORM_ACTION, { method: 'POST', mode: 'no-cors', body: new FormData(form) }); } catch (_e) {}
      }
      setTimeout(go, 2500);
    });
  });

  /* VSL slots: data-vsl="INDEX|NAVE|CUSTOM" — when the URL exists, swap the poster for the embed */
  document.querySelectorAll('[data-vsl]').forEach(function(slot){
    var url = NAVE_LINKS['VSL_' + slot.dataset.vsl];
    if (url){
      slot.dataset.state = 'vsl';
      var f = document.createElement('iframe');
      f.src = url; f.allow = 'autoplay; fullscreen'; f.style.cssText = 'width:100%;aspect-ratio:16/9;border:1px solid var(--line);display:block';
      slot.replaceChildren(f);
    }
  });
})();

/* Sticky CTA bar after 50% scroll (pages that include #ctabar) */
(function(){
  var bar = document.getElementById('ctabar');
  if (!bar) return;
  var shown = false;
  addEventListener('scroll', function(){
    var half = (document.documentElement.scrollHeight - innerHeight) * 0.5;
    var show = scrollY > Math.min(half, innerHeight * 2);
    if (show !== shown){ shown = show; bar.classList.toggle('show', show); }
  }, { passive: true });
})();

/* Terminal demo — typewriter (pages that include #termfeed) */
(function(){
  var feed = document.getElementById('termfeed');
  if (!feed) return;
  var LINES = [
    '> Make a month of content from this video: footage/june-drop.mp4',
    '',
    '[FI] reading footage......... 14 clips · 3 speakers · 41 quotable lines',
    '[VE] reframing 9:16.......... captions on · 12 shorts cut',
    '[FS] carousels............... 4 designed',
    '[CW] posts written........... in your voice · humanizer pass done',
    '[PM] month staged............ 28 pieces · waiting on YOUR approval',
    '',
    '> Review queue ready. Say "schedule it."'
  ];
  var li = 0, ci = 0, out = '';
  var cursor = '<span class="cursor"></span>';
  function tick(){
    if (li >= LINES.length){
      feed.innerHTML = '<span class="dimline">$ claude</span>\n' + out + cursor;
      setTimeout(function(){ li = 0; ci = 0; out = ''; tick(); }, 9000);
      return;
    }
    var line = LINES[li];
    if (ci <= line.length){
      feed.innerHTML = '<span class="dimline">$ claude</span>\n' + out + line.slice(0, ci) + cursor;
      ci += 2;
      setTimeout(tick, line.startsWith('[') ? 8 : 18);
    } else {
      out += line + '\n';
      li++; ci = 0;
      setTimeout(tick, line.startsWith('[') ? 260 : 420);
    }
  }
  tick();
})();
