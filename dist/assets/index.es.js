function D() {
  const e = document.createElement("link");
  e.rel = "preconnect", e.href = "https://fonts.googleapis.com";
  const t = document.createElement("link");
  t.rel = "preconnect", t.href = "https://fonts.gstatic.com", t.crossOrigin = "anonymous";
  const a = document.createElement("link");
  a.rel = "stylesheet", a.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap", document.head.appendChild(e), document.head.appendChild(t), document.head.appendChild(a);
  const i = document.createElement("style");
  i.innerHTML = `
    .contact-widget-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      width: 70px;
      height: 70px;
      padding: 0;
      background-color: #E1EFFE;
      color: #1e293b;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      z-index: 9999;
      overflow: hidden;
    }
    
    .contact-widget-btn:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      background-color: #d1e4fd;
    }

    .contact-widget-logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 65px;
      height: 65px;
      border-radius: 50%;
      margin-bottom: -3px;
    }

    .contact-widget-btn img {
      width: 65px;
      height: 65px;
      border-radius: 50%;
    }

    /* Speech bubble styles */
    .speech-bubble {
      position: fixed;
      bottom: 100px;
      right: 30px;
      max-width: 200px;
      background-color: #ffffff;
      padding: 10px 15px;
      border-radius: 18px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      font-size: 14px;
      color: #1e293b;
      line-height: 1.4;
      z-index: 9998;
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.3s ease, transform 0.3s ease;
      font-family: 'Inter', sans-serif;
    }

    .speech-bubble:after {
      display: none;
    }

    .speech-bubble.show {
      opacity: 1;
      transform: translateY(0);
    }

    .contact-popup {
      display: none;
      position: fixed;
      bottom: 100px;
      right: 20px;
      background: white;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
      border-radius: 12px;
      padding: 24px 24px 16px 24px;
      width: 320px;
      font-family: 'Inter', sans-serif;
      z-index: 9999;
    }

    .contact-popup h3 {
      margin-top: 0;
      margin-bottom: 8px;
      color: #1e293b;
      font-size: 18px;
      font-weight: 600;
      font-family: 'Inter', sans-serif;
    }

    .contact-popup-description {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 14px;
      color: #64748b;
      line-height: 1.4;
      font-family: 'Inter', sans-serif;
    }

    .form-group {
      margin-bottom: 16px;
    }

    .form-group label {
      display: block;
      margin-bottom: 6px;
      font-weight: 500;
      font-size: 14px;
      color: #4b5563;
      font-family: 'Inter', sans-serif;
    }

    .form-group input {
      width: 100%;
      padding: 10px 12px;
      font-size: 14px;
      font-family: 'Inter', sans-serif;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      box-sizing: border-box;
      background-color: #f8fafc;
      transition: all 0.2s ease;
    }

    .form-group input:focus {
      outline: none;
      border-color: #93c5fd;
      background-color: #fff;
      box-shadow: 0 0 0 3px rgba(147, 197, 253, 0.25);
    }

    .form-group.invalid input {
      border-color: #ef4444;
      background-color: #fef2f2;
    }

    .form-group.invalid .error-message {
      color: #ef4444;
      font-size: 12px;
      margin-top: 4px;
    }

    .phone-input-container {
      display: flex;
      gap: 8px;
    }

    .country-select {
      width: 100px;
      padding: 10px 12px;
      font-size: 14px;
      font-family: 'Inter', sans-serif;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      background-color: #f8fafc;
      transition: all 0.2s ease;
      appearance: none;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 8px center;
      background-size: 14px;
      padding-right: 28px;
    }

    .country-select:focus {
      outline: none;
      border-color: #93c5fd;
      background-color: #fff;
      box-shadow: 0 0 0 3px rgba(147, 197, 253, 0.25);
    }

    .phone-input {
      flex: 1;
    }

    .compliance-text {
      font-size: 12px;
      color: #64748b;
      margin-bottom: 16px;
      line-height: 1.4;
      font-family: 'Inter', sans-serif;
    }

    .compliance-text a {
      color: #3b82f6;
      text-decoration: none;
    }

    .compliance-text a:hover {
      text-decoration: underline;
    }

    .submit-btn {
      background-color: #3b82f6;
      color: white;
      border: none;
      border-radius: 8px;
      padding: 12px 16px;
      cursor: pointer;
      width: 100%;
      font-weight: 600;
      font-size: 14px;
      font-family: 'Inter', sans-serif;
      transition: all 0.2s ease;
    }

    .submit-btn:hover:not(:disabled) {
      background-color: #2563eb;
    }

    .submit-btn:disabled {
      background-color: #cbd5e1;
      color: #94a3b8;
      cursor: not-allowed;
    }

    .close-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: #94a3b8;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      transition: all 0.2s ease;
    }

    .close-btn:hover {
      background-color: #f1f5f9;
      color: #64748b;
    }

    /* Success screen styles */
    .success-screen {
      display: none;
      text-align: center;
      padding: 16px 0;
    }
    
    .success-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      margin: 0 auto 16px;
      background-color: #ecfdf5;
      border-radius: 50%;
    }
    
    .success-icon svg {
      width: 32px;
      height: 32px;
      color: #10b981;
    }
    
    .success-title {
      font-size: 18px;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 8px;
    }
    
    .success-message {
      font-size: 14px;
      color: #64748b;
      margin-bottom: 24px;
      line-height: 1.4;
    }
    
    .powered-by {
      font-size: 11px;
      color: #94a3b8;
      margin-top: 16px;
    }
    
    .powered-by a {
      color: #3b82f6;
      text-decoration: none;
    }
    
    .powered-by a:hover {
      text-decoration: underline;
    }
  `, document.head.appendChild(i);
}
function A(e) {
  const t = document.createElement("button");
  t.id = "contact-widget-btn", t.className = "contact-widget-btn";
  const a = document.createElement("div");
  a.className = "contact-widget-logo-container";
  const i = document.createElement("img");
  i.src = e.logoSrc || "https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/assets/logo.png", i.alt = "Petra", a.appendChild(i), t.appendChild(a);
  const h = document.createElement("div");
  h.id = "speech-bubble", h.className = "speech-bubble", h.textContent = e.speechBubbleText || "Wie darf ich Ihnen helfen?";
  const l = document.createElement("div");
  l.id = "contact-popup", l.className = "contact-popup";
  const g = document.createElement("button");
  g.id = "close-popup", g.className = "close-btn", g.textContent = "×";
  const b = document.createElement("div");
  b.id = "contact-form-container";
  const E = document.createElement("h3");
  E.textContent = e.formTitle || "Wir werden rufen Sie zurück";
  const k = document.createElement("p");
  k.className = "contact-popup-description", k.textContent = e.formDescription || "Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren.";
  const d = document.createElement("form");
  d.id = "contact-form";
  const p = document.createElement("div");
  p.className = "form-group", p.id = "name-group";
  const y = document.createElement("label");
  y.htmlFor = "name", y.textContent = e.nameLabel || "Name";
  const f = document.createElement("input");
  f.type = "text", f.id = "name", f.name = "name", f.placeholder = e.namePlaceholder || "Ihr Name", f.required = !0;
  const L = document.createElement("div");
  L.className = "error-message", p.appendChild(y), p.appendChild(f), p.appendChild(L);
  const r = document.createElement("div");
  r.className = "form-group", r.id = "phone-group";
  const N = document.createElement("label");
  N.htmlFor = "phone", N.textContent = e.phoneLabel || "Telefonnummer";
  const C = document.createElement("div");
  C.className = "phone-input-container";
  const w = document.createElement("select");
  w.id = "country-code", w.className = "country-select", [
    { code: "+49", emoji: "🇩🇪", name: "Deutschland" },
    { code: "+43", emoji: "🇦🇹", name: "Österreich" },
    { code: "+41", emoji: "🇨🇭", name: "Schweiz" }
  ].forEach((B) => {
    const T = document.createElement("option");
    T.value = B.code, T.textContent = `${B.emoji} ${B.code}`, T.title = B.name, w.appendChild(T);
  });
  const n = document.createElement("input");
  n.type = "tel", n.id = "phone", n.name = "phone", n.placeholder = e.phonePlaceholder || "Ihre Telefonnummer", n.className = "phone-input", n.required = !0;
  const m = document.createElement("div");
  m.className = "error-message", C.appendChild(w), C.appendChild(n), r.appendChild(N), r.appendChild(C), r.appendChild(m);
  const c = document.createElement("div");
  c.className = "compliance-text";
  const s = document.createElement("a");
  s.href = e.agbUrl || "https://example.com/agb", s.target = "_blank", s.textContent = "AGB";
  const x = document.createElement("a");
  x.href = e.datenschutzUrl || "https://example.com/datenschutz", x.target = "_blank", x.textContent = "Datenschutzbedingungen", c.innerHTML = "Mit dem Absenden stimmen Sie unseren ", c.appendChild(s), c.appendChild(document.createTextNode(" und ")), c.appendChild(x), c.appendChild(document.createTextNode(" zu."));
  const o = document.createElement("button");
  o.type = "submit", o.className = "submit-btn", o.id = "submit-btn", o.textContent = e.submitText || "Anruf bekommen", o.disabled = !0, d.appendChild(p), d.appendChild(r), d.appendChild(c), d.appendChild(o), b.appendChild(E), b.appendChild(k), b.appendChild(d);
  const u = document.createElement("div");
  u.id = "success-screen", u.className = "success-screen";
  const I = document.createElement("div");
  I.className = "success-icon", I.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
    </svg>
  `;
  const P = document.createElement("h3");
  P.className = "success-title", P.textContent = "Vielen Dank!";
  const M = document.createElement("p");
  M.className = "success-message", M.textContent = "Wir werden Sie in Kürze unter der angegebenen Nummer kontaktieren.";
  const z = document.createElement("div");
  z.className = "powered-by";
  const S = document.createElement("a");
  return S.href = "https://hallopetra.com", S.target = "_blank", S.textContent = "HalloPetra", z.appendChild(document.createTextNode("Bereitgestellt von ")), z.appendChild(S), u.appendChild(I), u.appendChild(P), u.appendChild(M), u.appendChild(z), l.appendChild(g), l.appendChild(b), l.appendChild(u), document.body.appendChild(t), document.body.appendChild(h), document.body.appendChild(l), {
    widgetBtn: t,
    popup: l,
    closeBtn: g,
    form: d,
    nameInput: f,
    phoneInput: n,
    countrySelect: w,
    submitBtn: o,
    nameGroup: p,
    phoneGroup: r,
    speechBubble: h,
    contactFormContainer: b,
    successScreen: u
  };
}
function F(e, t) {
  const {
    widgetBtn: a,
    popup: i,
    closeBtn: h,
    form: l,
    nameInput: g,
    phoneInput: b,
    countrySelect: E,
    submitBtn: k,
    nameGroup: d,
    phoneGroup: p,
    speechBubble: y,
    contactFormContainer: f,
    successScreen: L
  } = e;
  let r = !1;
  setTimeout(function() {
    y.classList.add("show"), document.addEventListener("click", function n() {
      y.classList.remove("show"), document.removeEventListener("click", n);
    }), setTimeout(function() {
      y.classList.remove("show");
    }, 3e4);
  }, 5e3), a.addEventListener("click", function() {
    i.style.display = "block", y.classList.remove("show");
  }), h.addEventListener("click", function() {
    i.style.display = "none", N();
  });
  function N() {
    l.reset(), r = !1, v(), f.style.display = "block", L.style.display = "none";
  }
  function C() {
    const n = g.value.trim(), m = d.querySelector(".error-message");
    return n.length < 2 ? (r && (d.classList.add("invalid"), m.textContent = "Bitte geben Sie einen gültigen Namen ein."), !1) : (d.classList.remove("invalid"), m.textContent = "", !0);
  }
  function w() {
    const n = E.value, m = b.value.trim(), c = p.querySelector(".error-message"), s = m.replace(/\D/g, "");
    let x = !1, o = "";
    return s.length === 0 ? o = "Bitte geben Sie eine Telefonnummer ein." : n === "+49" && (s.length < 10 || s.length > 11) ? o = "Deutsche Telefonnummern müssen 10-11 Ziffern haben." : n === "+43" && (s.length < 9 || s.length > 10) ? o = "Österreichische Telefonnummern müssen 9-10 Ziffern haben." : n === "+41" && s.length !== 9 ? o = "Schweizer Telefonnummern müssen 9 Ziffern haben." : x = !0, x ? (p.classList.remove("invalid"), c.textContent = "", !0) : (r && (p.classList.add("invalid"), c.textContent = o), !1);
  }
  function v() {
    const n = C(), m = w();
    k.disabled = !(n && m);
  }
  g.addEventListener("input", v), b.addEventListener("input", v), E.addEventListener("change", v), l.addEventListener("submit", function(n) {
    n.preventDefault(), r = !0;
    const m = C(), c = w();
    if (!m || !c)
      return;
    const s = g.value.trim(), x = E.value, o = b.value.trim().replace(/\D/g, ""), u = `${x}${o}`;
    typeof t.onSubmit == "function" && t.onSubmit({ name: s, phoneNumber: u }), console.log("Call request submitted:", { name: s, phoneNumber: u }), f.style.display = "none", L.style.display = "block", r = !1, l.reset(), v();
  }), v();
}
function j(e = {}) {
  D();
  const t = A(e);
  return F(t, e), {
    // Show the popup programmatically
    showPopup: () => {
      t.popup.style.display = "block", t.speechBubble.classList.remove("show");
    },
    // Hide the popup programmatically
    hidePopup: () => {
      t.popup.style.display = "none";
    },
    // Show speech bubble programmatically
    showSpeechBubble: () => {
      t.speechBubble.classList.add("show");
    },
    // Hide speech bubble programmatically
    hideSpeechBubble: () => {
      t.speechBubble.classList.remove("show");
    },
    // Update widget configuration
    updateConfig: (a) => {
      a.speechBubbleText && (t.speechBubble.textContent = a.speechBubbleText);
    }
  };
}
window.ContactWidget = {
  init: j
};
document.addEventListener("DOMContentLoaded", () => {
  const e = document.querySelector("script[data-contact-widget-auto-init]");
  if (e) {
    const t = {};
    [
      "buttonText",
      "formTitle",
      "nameLabel",
      "phoneLabel",
      "submitText",
      "successMessage",
      "namePlaceholder",
      "phonePlaceholder",
      "logoSrc",
      "formDescription",
      "agbUrl",
      "datenschutzUrl",
      "speechBubbleText"
    ].forEach((i) => {
      const h = `data-${i.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      e.hasAttribute(h) && (t[i] = e.getAttribute(h));
    }), j(t);
  }
});
