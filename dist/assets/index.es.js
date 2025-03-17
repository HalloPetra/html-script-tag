function A() {
  const t = document.createElement("link");
  t.rel = "preconnect", t.href = "https://fonts.googleapis.com";
  const n = document.createElement("link");
  n.rel = "preconnect", n.href = "https://fonts.gstatic.com", n.crossOrigin = "anonymous";
  const s = document.createElement("link");
  s.rel = "stylesheet", s.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap", document.head.appendChild(t), document.head.appendChild(n), document.head.appendChild(s);
  const e = document.createElement("style");
  e.innerHTML = `
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
  `, document.head.appendChild(e);
}
function P(t) {
  const n = document.createElement("button");
  n.id = "contact-widget-btn", n.className = "contact-widget-btn";
  const s = document.createElement("div");
  s.className = "contact-widget-logo-container";
  const e = document.createElement("img");
  e.src = t.logoSrc || "https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/assets/logo.png", e.alt = "Petra", s.appendChild(e), n.appendChild(s);
  const p = document.createElement("div");
  p.id = "speech-bubble", p.className = "speech-bubble", p.textContent = t.speechBubbleText || "Wie darf ich Ihnen helfen?";
  const o = document.createElement("div");
  o.id = "contact-popup", o.className = "contact-popup";
  const h = document.createElement("button");
  h.id = "close-popup", h.className = "close-btn", h.textContent = "×";
  const g = document.createElement("div");
  g.id = "contact-form-container";
  const N = document.createElement("h3");
  N.textContent = t.formTitle || "Wir werden rufen Sie zurück";
  const y = document.createElement("p");
  y.className = "contact-popup-description", y.textContent = t.formDescription || "Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren.";
  const b = document.createElement("form");
  b.id = "contact-form";
  const a = document.createElement("div");
  a.className = "form-group", a.id = "name-group";
  const v = document.createElement("label");
  v.htmlFor = "name", v.textContent = t.nameLabel || "Name";
  const x = document.createElement("input");
  x.type = "text", x.id = "name", x.name = "name", x.placeholder = t.namePlaceholder || "Ihr Name", x.required = !0;
  const k = document.createElement("div");
  k.className = "error-message", a.appendChild(v), a.appendChild(x), a.appendChild(k);
  const d = document.createElement("div");
  d.className = "form-group", d.id = "phone-group";
  const I = document.createElement("label");
  I.htmlFor = "phone", I.textContent = t.phoneLabel || "Telefonnummer";
  const S = document.createElement("div");
  S.className = "phone-input-container";
  const E = document.createElement("select");
  E.id = "country-code", E.className = "country-select", [
    { code: "+49", emoji: "🇩🇪", name: "Deutschland" },
    { code: "+43", emoji: "🇦🇹", name: "Österreich" },
    { code: "+41", emoji: "🇨🇭", name: "Schweiz" }
  ].forEach((F) => {
    const M = document.createElement("option");
    M.value = F.code, M.textContent = `${F.emoji} ${F.code}`, M.title = F.name, E.appendChild(M);
  });
  const r = document.createElement("input");
  r.type = "tel", r.id = "phone", r.name = "phone", r.placeholder = t.phonePlaceholder || "Ihre Telefonnummer", r.className = "phone-input", r.required = !0;
  const f = document.createElement("div");
  f.className = "error-message", S.appendChild(E), S.appendChild(r), d.appendChild(I), d.appendChild(S), d.appendChild(f);
  const u = document.createElement("div");
  u.className = "compliance-text";
  const c = document.createElement("a");
  c.href = t.agbUrl || "https://example.com/agb", c.target = "_blank", c.textContent = "AGB";
  const C = document.createElement("a");
  C.href = t.datenschutzUrl || "https://example.com/datenschutz", C.target = "_blank", C.textContent = "Datenschutzbedingungen", u.innerHTML = "Mit dem Absenden stimmen Sie unseren ", u.appendChild(c), u.appendChild(document.createTextNode(" und ")), u.appendChild(C), u.appendChild(document.createTextNode(" zu."));
  const l = document.createElement("button");
  l.type = "submit", l.className = "submit-btn", l.id = "submit-btn", l.textContent = t.submitText || "Anruf bekommen", l.disabled = !0, b.appendChild(a), b.appendChild(d), b.appendChild(u), b.appendChild(l), g.appendChild(N), g.appendChild(y), g.appendChild(b);
  const m = document.createElement("div");
  m.id = "success-screen", m.className = "success-screen";
  const B = document.createElement("div");
  B.className = "success-icon", B.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
    </svg>
  `;
  const T = document.createElement("h3");
  T.className = "success-title", T.textContent = "Vielen Dank!";
  const i = document.createElement("p");
  i.className = "success-message", i.textContent = "Wir werden Sie in Kürze unter der angegebenen Nummer kontaktieren.";
  const w = document.createElement("div");
  w.className = "powered-by";
  const z = document.createElement("a");
  return z.href = "https://hallopetra.com", z.target = "_blank", z.textContent = "HalloPetra", w.appendChild(document.createTextNode("Bereitgestellt von ")), w.appendChild(z), m.appendChild(B), m.appendChild(T), m.appendChild(i), m.appendChild(w), o.appendChild(h), o.appendChild(g), o.appendChild(m), document.body.appendChild(n), document.body.appendChild(p), document.body.appendChild(o), {
    widgetBtn: n,
    popup: o,
    closeBtn: h,
    form: b,
    nameInput: x,
    phoneInput: r,
    countrySelect: E,
    submitBtn: l,
    nameGroup: a,
    phoneGroup: d,
    speechBubble: p,
    contactFormContainer: g,
    successScreen: m
  };
}
function j(t, n) {
  const {
    widgetBtn: s,
    popup: e,
    closeBtn: p,
    form: o,
    nameInput: h,
    phoneInput: g,
    countrySelect: N,
    submitBtn: y,
    nameGroup: b,
    phoneGroup: a,
    speechBubble: v,
    contactFormContainer: x,
    successScreen: k
  } = t;
  let d = !1;
  setTimeout(function() {
    v.classList.add("show"), document.addEventListener("click", function r() {
      v.classList.remove("show"), document.removeEventListener("click", r);
    }), setTimeout(function() {
      v.classList.remove("show");
    }, 3e4);
  }, 5e3), s.addEventListener("click", function() {
    e.style.display = "block", v.classList.remove("show");
  }), p.addEventListener("click", function() {
    e.style.display = "none", I();
  });
  function I() {
    o.reset(), d = !1, L(), x.style.display = "block", k.style.display = "none";
  }
  function S() {
    const r = h.value.trim(), f = b.querySelector(".error-message");
    return r.length < 2 ? (d && (b.classList.add("invalid"), f.textContent = "Bitte geben Sie einen gültigen Namen ein."), !1) : (b.classList.remove("invalid"), f.textContent = "", !0);
  }
  function E() {
    const r = N.value, f = g.value.trim(), u = a.querySelector(".error-message"), c = f.replace(/\D/g, "");
    let C = !1, l = "";
    return c.length === 0 ? l = "Bitte geben Sie eine Telefonnummer ein." : r === "+49" && (c.length < 10 || c.length > 11) ? l = "Deutsche Telefonnummern müssen 10-11 Ziffern haben." : r === "+43" && (c.length < 9 || c.length > 10) ? l = "Österreichische Telefonnummern müssen 9-10 Ziffern haben." : r === "+41" && c.length !== 9 ? l = "Schweizer Telefonnummern müssen 9 Ziffern haben." : C = !0, C ? (a.classList.remove("invalid"), u.textContent = "", !0) : (d && (a.classList.add("invalid"), u.textContent = l), !1);
  }
  function L() {
    const r = S(), f = E();
    y.disabled = !(r && f);
  }
  h.addEventListener("input", L), g.addEventListener("input", L), N.addEventListener("change", L), o.addEventListener("submit", function(r) {
    r.preventDefault(), d = !0;
    const f = S(), u = E();
    if (!f || !u)
      return;
    if (!n.customerId) {
      const i = a.querySelector(".error-message");
      a.classList.add("invalid"), i.textContent = "Konfigurationsfehler: Keine Kunden-ID vorhanden.", console.error("ContactWidget: customerId is required but was not provided in the configuration");
      return;
    }
    const c = h.value.trim(), C = N.value, l = g.value.trim().replace(/\D/g, ""), m = `${C}${l}`;
    y.disabled = !0, y.textContent = "Wird gesendet...";
    const B = new AbortController(), T = setTimeout(() => B.abort(), 1e4);
    fetch(n.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: c,
        phone: m,
        customerId: n.customerId,
        url: window.location.href,
        // Include the current page URL
        userAgent: navigator.userAgent
        // Include user agent for analytics
      }),
      signal: B.signal
    }).then((i) => {
      if (!i.ok)
        throw new Error("Server responded with an error");
      return i.json();
    }).then((i) => {
      if (console.log("Call request successfully sent to server:", i), typeof n.onSubmit == "function" && n.onSubmit({ name: c, phoneNumber: m, success: !0 }), i && i.message) {
        const w = k.querySelector(".success-message");
        w && (w.textContent = i.message);
      }
      x.style.display = "none", k.style.display = "block";
    }).catch((i) => {
      console.error("Error sending call request:", i), typeof n.onSubmit == "function" && n.onSubmit({ name: c, phoneNumber: m, success: !1, error: i });
      const w = a.querySelector(".error-message");
      a.classList.add("invalid"), w.textContent = "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.";
    }).finally(() => {
      clearTimeout(T), y.disabled = !1, y.textContent = n.submitText || "Anruf bekommen", d = !1, k.style.display === "block" && (o.reset(), L());
    });
  }), L();
}
function W(t = {}) {
  t.apiUrl = t.apiUrl || "https://api.hallopetra.de/api/web-widget/request-call";
  const n = !t.customerId;
  if (n) {
    console.error("ContactWidget: customerId is required but was not provided in the configuration");
    const e = document.createElement("div");
    e.style.position = "fixed", e.style.bottom = "20px", e.style.right = "20px", e.style.backgroundColor = "#FEF2F2", e.style.color = "#B91C1C", e.style.padding = "10px 15px", e.style.borderRadius = "8px", e.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)", e.style.zIndex = "10000", e.style.fontFamily = "Inter, sans-serif", e.style.fontSize = "14px", e.style.fontWeight = "500", e.style.maxWidth = "300px", e.textContent = "ContactWidget Error: Missing customerId. Widget will not function correctly.", (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") && (document.body.appendChild(e), setTimeout(() => {
      document.body.contains(e) && document.body.removeChild(e);
    }, 1e4));
  }
  A();
  const s = P(t);
  if (n) {
    const e = s.contactFormContainer, p = s.form, o = document.createElement("div");
    o.style.backgroundColor = "#FEF2F2", o.style.color = "#B91C1C", o.style.padding = "10px", o.style.borderRadius = "8px", o.style.margin = "0 0 16px 0", o.style.fontSize = "14px", o.style.fontWeight = "500", o.style.textAlign = "center", o.textContent = "Konfigurationsfehler: Keine Kunden-ID vorhanden.", e.insertBefore(o, e.firstChild), p.onsubmit = function(h) {
      return h.preventDefault(), !1;
    };
  }
  return j(s, t), {
    // Show the popup programmatically
    showPopup: () => {
      s.popup.style.display = "block", s.speechBubble.classList.remove("show");
    },
    // Hide the popup programmatically
    hidePopup: () => {
      s.popup.style.display = "none";
    },
    // Show speech bubble programmatically
    showSpeechBubble: () => {
      s.speechBubble.classList.add("show");
    },
    // Hide speech bubble programmatically
    hideSpeechBubble: () => {
      s.speechBubble.classList.remove("show");
    },
    // Update widget configuration
    updateConfig: (e) => {
      e.speechBubbleText && (s.speechBubble.textContent = e.speechBubbleText);
    }
  };
}
window.ContactWidget = {
  init: W
};
document.addEventListener("DOMContentLoaded", () => {
  const t = document.querySelector("script[data-contact-widget-auto-init]");
  if (t) {
    const n = {};
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
      "speechBubbleText",
      "apiUrl",
      "customerId"
    ].forEach((e) => {
      const p = `data-${e.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      t.hasAttribute(p) && (n[e] = t.getAttribute(p));
    }), W(n);
  }
});
