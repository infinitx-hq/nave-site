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
  CALL_BOOKING: 'https://calendar.app.google/L25kvuTgSLfwxC8P7',  // 15-min call booking (Google Calendar appointments)
  BOOK: 'https://buy.stripe.com/dRm8wPbkHfPRdNX1e18so0p',       // Stripe $397 1:1 install (pay -> then book)
  SELF_SERVE: 'https://buy.stripe.com/8x2dR9dsP5bdbFP9Kx8so0n', // Stripe $89 self-serve Content OS
  PLAYBOOK_FORM_ACTION: '',  // Kit (ConvertKit) form action — playbook + vault opt-in (email + fields[phone])
  APPLY_FORM_ACTION: '',     // endpoint for application answers (Tally / Formspree / Kit)
  CUSTOM_FORM_ACTION: '',    // endpoint for custom-build requests
  CONTACT_EMAIL: '',         // public support email — also referenced by the legal pages
  VSL_INDEX: '',             // main VSL embed URL (squeeze page)
  VSL_NAVE: '',              // Nave offer VSL embed URL (iframe — Vimeo/YouTube)
  VSL_FILE: 'https://fkupordxnjuedmesjhnu.supabase.co/storage/v1/object/public/nave-public/vsl.mp4',  // self-hosted on Supabase Storage (interim de-stuttered cut; premium edit replaces it at the same URL)
  VSL_CUSTOM: '',            // done-for-you VSL embed URL
  CLARITY_ID: 'x7j0avqhnn',  // Microsoft Clarity project ID — heatmaps + session recordings (free). Empty = off.
  /* Real testimonials only — result-led (the result is the headline; it converts better).
     Add an object per client and the section reveals itself. Empty = wall stays hidden. */
  TESTIMONIALS: [
    // { result: "From posting twice a month to daily, in a week.", quote: "...what changed after install...", name: "Name", business: "Business", industry: "Industry" },
  ]
};

/* Microsoft Clarity — heatmaps + session recordings (where visitors look / stay).
   Loads ONLY when CLARITY_ID is set, so the site ships analytics-free until then.
   Privacy policy discloses this (see privacy.html §4). */
(function(){
  var id = NAVE_LINKS.CLARITY_ID;
  if (!id) return;
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window,document,"clarity","script",id);
})();

/* Shared CTA state machine */
(function(){
  /* $397 booking buttons */
  document.querySelectorAll('[data-cta="BOOK"]').forEach(function(a){
    if (NAVE_LINKS.BOOK){ a.href = NAVE_LINKS.BOOK; a.target = '_blank'; a.rel = 'noopener'; }
    else if (a.dataset.fallback){ a.href = a.dataset.fallback; }
  });
  if (!NAVE_LINKS.BOOK) document.querySelectorAll('[data-pending-note]').forEach(function(n){ n.style.display = 'block'; });

  /* 15-minute call booking buttons (VSL page) */
  document.querySelectorAll('[data-cta="CALL"]').forEach(function(a){
    if (NAVE_LINKS.CALL_BOOKING){ a.href = NAVE_LINKS.CALL_BOOKING; a.target = '_blank'; a.rel = 'noopener'; }
    else if (a.dataset.fallback){ a.href = a.dataset.fallback; }
  });
  if (!NAVE_LINKS.CALL_BOOKING) document.querySelectorAll('[data-pending-note]').forEach(function(n){ n.style.display = 'block'; });

  /* $89 self-serve buy buttons */
  document.querySelectorAll('[data-cta="BUY"]').forEach(function(a){
    if (NAVE_LINKS.SELF_SERVE){ a.href = NAVE_LINKS.SELF_SERVE; a.target = '_blank'; a.rel = 'noopener'; }
  });

  /* Lead-capture beacon → substrate /leads (state.db). no-cors + text/plain means
     no CORS preflight; the opaque response is fine (fire-and-forget). Exposed as
     window.naveCapture so apply.html's inline script reuses it for the answers. */
  /* Persist first-touch attribution (utm_* + original external referrer) so it
     survives the hop from the landing page to /apply — that's how we know a lead
     came from YouTube vs LinkedIn vs direct. First-touch wins (never overwritten). */
  (function(){
    try {
      var p = new URLSearchParams(location.search);
      ['utm_source','utm_medium','utm_campaign'].forEach(function(k){
        var v = p.get(k);
        if (v && !sessionStorage.getItem('nave_' + k)) sessionStorage.setItem('nave_' + k, v.slice(0, 80));
      });
      if (!sessionStorage.getItem('nave_ref0')) sessionStorage.setItem('nave_ref0', document.referrer || '');
    } catch (_e) {}
  })();

  window.naveCapture = function(row){
    if (!NAVE_LINKS.LEADS_ENDPOINT) return Promise.resolve();
    row = row || {};
    try {
      ['utm_source','utm_medium','utm_campaign'].forEach(function(k){
        if (!row[k]) { var v = sessionStorage.getItem('nave_' + k); if (v) row[k] = v; }
      });
      if (!row.referrer) row.referrer = sessionStorage.getItem('nave_ref0') || document.referrer || location.href;
    } catch (_e) {}
    try {
      return fetch(NAVE_LINKS.LEADS_ENDPOINT, {
        method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(row)
      });
    } catch (_e) { return Promise.resolve(); }
  };

  /* Playbook opt-in → capture name/email/phone, then advance to /apply?sent=1
     ("Check your email" + qualifier questions). Resources are delivered by EMAIL
     (Beehiiv welcome), NOT inline — the page just confirms + routes to the funnel.
     A 2.5s fallback advances even if the network stalls. */
  document.querySelectorAll('[data-capture-form]').forEach(function(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var val = function(sel){ var el = form.querySelector(sel); return el ? (el.value || '').trim() : ''; };
      var email = val('input[type="email"]');
      var name  = val('input[name="fields[first_name]"]') || val('input[type="text"]');
      var phone = val('input[type="tel"]');

      /* Validate before anything fires — block junk emails + phone numbers.
         Uses native bubbles on the offending field; nothing is captured on fail. */
      var emailEl = form.querySelector('input[type="email"]');
      var phoneEl = form.querySelector('input[type="tel"]');
      var bad = function(el, msg){ if (el){ el.setCustomValidity(msg); el.reportValidity(); el.addEventListener('input', function h(){ el.setCustomValidity(''); el.removeEventListener('input', h); }); el.focus(); } };
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
      if (!emailOk){ bad(emailEl, 'Enter a valid email address (you@example.com).'); return; }
      var digits = phone.replace(/\D/g, '');
      var phoneOk = /^\+?[\d\s().\-]{7,20}$/.test(phone) && digits.length >= 7 && digits.length <= 15;
      if (!phoneOk){ bad(phoneEl, 'Enter a valid phone number with country code (e.g. +1 555 123 4567).'); return; }

      try { if (email) sessionStorage.setItem('nave_email', email); } catch (_e) {}
      var done = false, go = function(){ if (done) return; done = true; location.href = '/apply?sent=1'; };
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
