/* Candado de email compartido — /avatares y /avatares/sistema.
   Secciones con [data-gated] quedan bloqueadas (blur + tarjeta blanca) hasta que
   la persona deja su correo. El correo se captura en el substrate (POST /leads,
   beacon text/plain sin preflight — mismo patrón que naveCapture del sitio) y el
   desbloqueo persiste en localStorage. QA: ?static o ?unlocked=1 saltan el candado. */
(function () {
  var KEY = 'nave_avatares_email';
  var ENDPOINT = 'https://ix-substrate-core-production.up.railway.app/leads';
  var q = location.search;
  var skip = (q.indexOf('static') > -1 && q.indexOf('locked=1') === -1) || q.indexOf('unlocked=1') > -1;
  var unlocked = skip;
  try { unlocked = unlocked || !!localStorage.getItem(KEY); } catch (e) {}

  var gated = Array.prototype.slice.call(document.querySelectorAll('[data-gated]'));
  if (!gated.length) return;

  function capture(email) {
    try {
      var payload = JSON.stringify({
        source: 'avatares', email: email,
        page: location.pathname, ts: new Date().toISOString(),
        company_website: '' /* honeypot vacío */
      });
      if (navigator.sendBeacon) {
        navigator.sendBeacon(ENDPOINT, new Blob([payload], { type: 'text/plain' }));
      } else {
        fetch(ENDPOINT, { method: 'POST', mode: 'no-cors', body: payload, headers: { 'Content-Type': 'text/plain' } });
      }
    } catch (e) {}
  }

  function unlockAll() {
    gated.forEach(function (s) {
      s.classList.remove('locked');
      var o = s.querySelector('.gatewrap'); if (o) o.parentNode.removeChild(o);
    });
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }

  function card(label) {
    var w = document.createElement('div');
    w.className = 'gatewrap';
    w.innerHTML =
      '<div class="gatecard">' +
      '<div class="gk">' + (label || 'RECURSO DE LA MÁQUINA') + '</div>' +
      '<h3>Déjame tu correo y esto se abre.</h3>' +
      '<p>Los prompts completos, el sistema de guion íntegro (ES + EN, descargable) y el paso a paso para instalar el Content OS.</p>' +
      '<form class="gform" novalidate>' +
      '<input type="email" required placeholder="tu@correo.com" autocomplete="email" aria-label="correo">' +
      '<button type="submit">ABRIR EL RECURSO</button>' +
      '</form>' +
      '<div class="gs">Sin spam. Un correo, todo el recurso, en esta misma página.</div>' +
      '</div>';
    var form = w.querySelector('form'), input = w.querySelector('input');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = (input.value || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { input.classList.add('bad'); input.focus(); return; }
      try { localStorage.setItem(KEY, email); } catch (err) {}
      capture(email);
      unlockAll();
    });
    input.addEventListener('input', function () { input.classList.remove('bad'); });
    return w;
  }

  if (unlocked) return;
  gated.forEach(function (s, i) {
    s.classList.add('locked');
    s.appendChild(card(i === 0 ? null : s.getAttribute('data-gated') || null));
  });
})();
