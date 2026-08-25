/* Puerta de entrada del recurso — /avatares y /avatares/sistema.
   PÁGINA COMPLETA: antes de ver nada, una portada con branding Nave (cosmos + verde
   + Anton) sobre un collage difuminado de los avatares UGC, bilingüe ES/EN, que pide
   el correo. El correo se captura en el substrate (POST /leads, beacon text/plain sin
   preflight — el mismo canal que naveCapture) y el desbloqueo persiste en localStorage.
   QA: ?unlocked=1 (o ?static) salta la puerta · ?locked=1 la fuerza · ?lang=en fuerza idioma.
   Este archivo es autocontenido: inyecta su propio CSS. Patrón documentado en la skill
   del genoma `lead-magnet-pages`. */
(function () {
  var KEY = 'nave_avatares_email';
  var LKEY = 'nave_avatares_lang';
  var ENDPOINT = 'https://ix-substrate-core-production.up.railway.app/leads';
  var q = location.search;
  var force = q.indexOf('locked=1') > -1;
  var skip = !force && (q.indexOf('static') > -1 || q.indexOf('unlocked=1') > -1);
  var unlocked = skip;
  try { unlocked = unlocked || !!localStorage.getItem(KEY); } catch (e) {}
  if (unlocked && !force) return;

  /* /avatares/sistema/ vive un nivel abajo del media/ publicado */
  var pre = /\/sistema\/?(index\.html)?$/.test(location.pathname) ? '../' : '';

  var qlang = /[?&]lang=(es|en)/.exec(q);
  var lang = qlang ? qlang[1] : null;
  try { lang = lang || localStorage.getItem(LKEY); } catch (e) {}
  if (!lang) lang = (navigator.language || 'es').toLowerCase().indexOf('es') === 0 ? 'es' : 'en';

  var T = {
    es: {
      kicker: 'NAVE — RECURSO',
      h1: 'Acceso a los recursos de la <em>UGC Avatar Factory.</em>',
      sub: 'La máquina que produce anuncios UGC con un presentador que no existe — y todo lo que necesitas para correrla:',
      b1: 'Los 8 prompts del método, paso a paso, listos para copiar',
      b2: 'El Sistema de Guion UGC v2 íntegro — en español e inglés, descargable',
      b3: 'El paso a paso para instalar el Content OS y que lo corra por ti',
      ph: 'tu@correo.com', btn: 'ABRIR EL RECURSO',
      small: 'Sin spam. Un correo y todo el recurso se abre en esta misma página.',
      bad: 'Revisa el correo — algo no cuadra.'
    },
    en: {
      kicker: 'NAVE — RESOURCE',
      h1: 'Get access to the <em>UGC Avatar Factory</em> resources.',
      sub: 'The machine that produces UGC ads with a presenter who does not exist — and everything you need to run it:',
      b1: 'All 8 prompts of the method, step by step, ready to copy',
      b2: 'The full UGC Script Writing System v2 — Spanish + English, downloadable',
      b3: 'The step-by-step to install the Content OS so it runs this for you',
      ph: 'you@email.com', btn: 'GET ACCESS',
      small: 'No spam. One email and the whole resource opens on this page.',
      bad: 'Check the email — something is off.'
    }
  };

  var css = [
    '#pagegate{position:fixed;inset:0;z-index:400;background:#070908;overflow-y:auto}',
    '#pagegate .bgimg{position:fixed;inset:0;background:url("' + pre + 'media/gate-collage.jpg") center/cover no-repeat;opacity:.88}',
    '#pagegate .bgfade{position:fixed;inset:0;background:linear-gradient(100deg,#070908 0%,rgba(7,9,8,.94) 34%,rgba(7,9,8,.55) 62%,rgba(7,9,8,.82) 100%)}',
    '#pagegate .wrap{position:relative;min-height:100%;display:flex;align-items:center;padding:7vh 6vw}',
    '#pagegate .panel{max-width:560px;width:100%}',
    '#pagegate .topbar{position:absolute;top:22px;left:6vw;right:6vw;display:flex;justify-content:space-between;align-items:center}',
    '#pagegate .brand{display:inline-flex;align-items:center;gap:10px;text-decoration:none}',
    '#pagegate .brand svg{width:30px;height:26px}',
    "#pagegate .brand .w{font-family:'DM Mono',monospace;font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:#F0EBDE}",
    "#pagegate .langs{display:flex;gap:6px}",
    "#pagegate .langs button{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:.1em;background:transparent;border:1px solid rgba(31,224,122,.16);color:rgba(240,235,222,.5);padding:7px 12px;cursor:pointer}",
    '#pagegate .langs button.on{color:#070908;background:#1FE07A;border-color:#1FE07A}',
    "#pagegate .gk{font-family:'DM Mono',monospace;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#1FE07A;margin-bottom:16px}",
    "#pagegate h1{font-family:'Anton',sans-serif;font-weight:400;text-transform:uppercase;font-size:clamp(30px,4.4vw,58px);line-height:1.06;letter-spacing:.008em;color:#F0EBDE;margin:0}",
    '#pagegate h1 em{font-style:normal;color:#1FE07A}',
    "#pagegate .sub{font-family:'DM Mono',monospace;font-size:13.5px;line-height:1.85;color:rgba(240,235,222,.72);margin:18px 0 0}",
    "#pagegate ul{list-style:none;margin:16px 0 0;padding:0}",
    "#pagegate li{font-family:'DM Mono',monospace;font-size:13px;line-height:1.7;color:rgba(240,235,222,.85);padding:9px 0 9px 26px;position:relative;border-top:1px solid rgba(31,224,122,.14)}",
    '#pagegate li:before{content:"◆";position:absolute;left:2px;color:#1FE07A;font-size:10px;top:12px}',
    '#pagegate form{display:flex;gap:10px;margin-top:26px}',
    "#pagegate input{flex:1;min-width:0;font-family:'DM Mono',monospace;font-size:14px;padding:16px 16px;background:rgba(15,21,17,.8);border:1px solid rgba(31,224,122,.3);color:#F0EBDE;outline:none}",
    '#pagegate input:focus{border-color:#1FE07A}',
    '#pagegate input.bad{border-color:#E05A46}',
    "#pagegate button.go{font-family:'DM Mono',monospace;font-size:12.5px;letter-spacing:.1em;background:#1FE07A;border:1px solid #1FE07A;color:#070908;padding:16px 24px;cursor:pointer;white-space:nowrap;font-weight:500}",
    '#pagegate button.go:hover{filter:brightness(1.1)}',
    "#pagegate .gs{font-family:'DM Mono',monospace;font-size:11.5px;letter-spacing:.04em;color:rgba(240,235,222,.5);margin-top:14px}",
    "#pagegate .err{display:none;font-family:'DM Mono',monospace;font-size:12px;color:#E05A46;margin-top:10px}",
    '#pagegate.bye{transition:opacity .45s ease;opacity:0;pointer-events:none}',
    '@media(max-width:640px){#pagegate form{flex-direction:column}#pagegate .wrap{padding-top:14vh}}',
    'body.gatelock{overflow:hidden}'
  ].join('\n');

  var SHIP = '<svg viewBox="0 0 512 448" fill="#1FE07A"><use href="#px-ship"/></svg>';

  function render() {
    var t = T[lang];
    return '<div class="bgimg"></div><div class="bgfade"></div>' +
      '<div class="topbar"><a class="brand" href="https://nave.infinitxai.com/">' + SHIP + '<span class="w">Nave</span></a>' +
      '<div class="langs"><button data-l="es"' + (lang === 'es' ? ' class="on"' : '') + '>ES</button><button data-l="en"' + (lang === 'en' ? ' class="on"' : '') + '>EN</button></div></div>' +
      '<div class="wrap"><div class="panel">' +
      '<div class="gk">' + t.kicker + '</div>' +
      '<h1>' + t.h1 + '</h1>' +
      '<p class="sub">' + t.sub + '</p>' +
      '<ul><li>' + t.b1 + '</li><li>' + t.b2 + '</li><li>' + t.b3 + '</li></ul>' +
      '<form novalidate><input type="email" required placeholder="' + t.ph + '" autocomplete="email" aria-label="email">' +
      '<button type="submit" class="go">' + t.btn + '</button></form>' +
      '<div class="err">' + t.bad + '</div>' +
      '<div class="gs">' + t.small + '</div>' +
      '</div></div>';
  }

  function capture(email) {
    try {
      var payload = JSON.stringify({
        source: 'avatares', email: email, lang: lang,
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

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
  var gate = document.createElement('div');
  gate.id = 'pagegate';
  document.body.appendChild(gate);
  document.body.classList.add('gatelock');

  function wire() {
    gate.innerHTML = render();
    gate.querySelectorAll('.langs button').forEach(function (b) {
      b.addEventListener('click', function () {
        lang = b.dataset.l;
        try { localStorage.setItem(LKEY, lang); } catch (e) {}
        wire();
      });
    });
    var form = gate.querySelector('form'), input = gate.querySelector('input'), err = gate.querySelector('.err');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = (input.value || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { input.classList.add('bad'); err.style.display = 'block'; input.focus(); return; }
      try { localStorage.setItem(KEY, email); } catch (e2) {}
      capture(email);
      gate.classList.add('bye');
      document.body.classList.remove('gatelock');
      setTimeout(function () { gate.parentNode && gate.parentNode.removeChild(gate); if (window.ScrollTrigger) ScrollTrigger.refresh(); }, 500);
    });
    input.addEventListener('input', function () { input.classList.remove('bad'); err.style.display = 'none'; });
  }
  wire();
})();
