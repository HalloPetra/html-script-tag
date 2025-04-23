function G() {
  const e = document.createElement("link");
  e.rel = "preconnect", e.href = "https://fonts.googleapis.com";
  const n = document.createElement("link");
  n.rel = "preconnect", n.href = "https://fonts.gstatic.com", n.crossOrigin = "anonymous";
  const s = document.createElement("link");
  s.rel = "stylesheet", s.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap", document.head.appendChild(e), document.head.appendChild(n), document.head.appendChild(s);
  const o = document.createElement("style");
  o.innerHTML = `
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

    .form-group textarea {
      width: 100%;
      padding: 10px 12px;
      font-size: 14px;
      font-family: 'Inter', sans-serif;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      box-sizing: border-box;
      background-color: #f8fafc;
      transition: all 0.2s ease;
      resize: vertical;
      min-height: 80px;
    }

    .form-group textarea:focus {
      outline: none;
      border-color: #93c5fd;
      background-color: #fff;
      box-shadow: 0 0 0 3px rgba(147, 197, 253, 0.25);
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
  `, document.head.appendChild(o);
}
function U(e) {
  const n = document.createElement("button");
  n.id = "contact-widget-btn", n.className = "contact-widget-btn";
  const s = document.createElement("div");
  s.className = "contact-widget-logo-container";
  const o = document.createElement("img");
  o.src = e.logoSrc || "https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/assets/logo.png", o.alt = "Petra", s.appendChild(o), n.appendChild(s);
  const m = document.createElement("div");
  m.id = "speech-bubble", m.className = "speech-bubble", m.textContent = e.speechBubbleText || "Wie darf ich Ihnen helfen?";
  const a = document.createElement("div");
  a.id = "contact-popup", a.className = "contact-popup";
  const w = document.createElement("button");
  w.id = "close-popup", w.className = "close-btn", w.textContent = "×";
  const p = document.createElement("div");
  p.id = "contact-form-container";
  const F = document.createElement("h3");
  F.textContent = e.formTitle || "Wir rufen Sie zurück";
  const N = document.createElement("p");
  N.className = "contact-popup-description", N.textContent = e.formDescription || "Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren.";
  const y = document.createElement("form");
  y.id = "contact-form";
  const g = document.createElement("div");
  g.className = "form-group", g.id = "name-group";
  const I = document.createElement("label");
  I.htmlFor = "name", I.textContent = e.nameLabel || "Name";
  const S = document.createElement("input");
  S.type = "text", S.id = "name", S.name = "name", S.placeholder = e.namePlaceholder || "Ihr Name", S.required = !0;
  const M = document.createElement("div");
  M.className = "error-message", g.appendChild(I), g.appendChild(S), g.appendChild(M);
  const l = document.createElement("div");
  l.className = "form-group", l.id = "phone-group";
  const b = document.createElement("label");
  b.htmlFor = "phone", b.textContent = e.phoneLabel || "Telefonnummer";
  const v = document.createElement("div");
  v.className = "phone-input-container";
  const z = document.createElement("select");
  z.id = "country-code", z.className = "country-select", [
    { code: "+49", emoji: "🇩🇪", name: "Deutschland" },
    { code: "+43", emoji: "🇦🇹", name: "Österreich" },
    { code: "+41", emoji: "🇨🇭", name: "Schweiz" }
  ].forEach((c) => {
    const i = document.createElement("option");
    i.value = c.code, i.textContent = `${c.emoji} ${c.code}`, i.title = c.name, z.appendChild(i);
  });
  const k = document.createElement("input");
  k.type = "tel", k.id = "phone", k.name = "phone", k.placeholder = e.phonePlaceholder || "Ihre Telefonnummer", k.className = "phone-input", k.required = !0;
  const P = document.createElement("div");
  P.className = "error-message", v.appendChild(z), v.appendChild(k), l.appendChild(b), l.appendChild(v), l.appendChild(P);
  const q = [], A = { element: null, input: null }, C = { element: null, input: null };
  e.extraInputFields && Array.isArray(e.extraInputFields) && e.extraInputFields.forEach((c) => {
    if (c.type) {
      if (c.type.toLowerCase() === "email") {
        const i = document.createElement("div");
        i.className = "form-group", i.id = "email-group";
        const f = document.createElement("label");
        f.htmlFor = "email", f.textContent = c.label || e.emailLabel || "E-Mail";
        const u = document.createElement("input");
        u.type = "email", u.id = "email", u.name = "email", u.placeholder = c.placeholder || e.emailPlaceholder || "Ihre E-Mail-Adresse", u.required = !!c.required;
        const W = document.createElement("div");
        W.className = "error-message", i.appendChild(f), i.appendChild(u), i.appendChild(W), q.push({ type: "email", element: i, input: u, required: !!c.required }), A.element = i, A.input = u;
      } else if (c.type.toLowerCase() === "address") {
        const i = document.createElement("div");
        i.className = "form-group", i.id = "address-group";
        const f = document.createElement("label");
        f.htmlFor = "address", f.textContent = c.label || e.addressLabel || "Adresse";
        const u = document.createElement("input");
        u.type = "text", u.id = "address", u.name = "address", u.placeholder = c.placeholder || e.addressPlaceholder || "Ihre Adresse", u.required = !!c.required;
        const W = document.createElement("div");
        W.className = "error-message", i.appendChild(f), i.appendChild(u), i.appendChild(W), q.push({ type: "address", element: i, input: u, required: !!c.required }), C.element = i, C.input = u;
      }
    }
  });
  const t = document.createElement("div");
  t.className = "compliance-text";
  const r = document.createElement("a");
  r.href = e.agbUrl || "https://hallopetra.de/agb", r.target = "_blank", r.textContent = "AGB";
  const x = document.createElement("a");
  x.href = e.datenschutzUrl || "https://hallopetra.de/datenschutz", x.target = "_blank", x.textContent = "Datenschutzbedingungen", t.innerHTML = "Mit dem Absenden stimmen Sie unseren ", t.appendChild(r), t.appendChild(document.createTextNode(" und ")), t.appendChild(x), t.appendChild(document.createTextNode(" zu."));
  const d = document.createElement("button");
  d.type = "submit", d.className = "submit-btn", d.id = "submit-btn", d.textContent = e.submitText || "Anruf bekommen", d.disabled = !0, y.appendChild(g), y.appendChild(l), q.forEach((c) => {
    y.appendChild(c.element);
  }), y.appendChild(t), y.appendChild(d), p.appendChild(F), p.appendChild(N), p.appendChild(y);
  const h = document.createElement("div");
  h.id = "success-screen", h.className = "success-screen";
  const T = document.createElement("div");
  T.className = "success-icon", T.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
    </svg>
  `;
  const L = document.createElement("h3");
  L.className = "success-title", L.textContent = e.successTitle || "Vielen Dank!";
  const D = document.createElement("p");
  D.className = "success-message", D.textContent = e.successMessage || "Wir werden Sie in Kürze unter der angegebenen Nummer kontaktieren.";
  const B = document.createElement("div");
  B.className = "powered-by";
  const E = document.createElement("a");
  return E.href = "https://hallopetra.de", E.target = "_blank", E.textContent = "HalloPetra", B.appendChild(document.createTextNode("Bereitgestellt von ")), B.appendChild(E), h.appendChild(T), h.appendChild(L), h.appendChild(D), h.appendChild(B), a.appendChild(w), a.appendChild(p), a.appendChild(h), document.body.appendChild(n), document.body.appendChild(m), document.body.appendChild(a), {
    widgetBtn: n,
    popup: a,
    closeBtn: w,
    form: y,
    nameInput: S,
    phoneInput: k,
    countrySelect: z,
    submitBtn: d,
    nameGroup: g,
    phoneGroup: l,
    speechBubble: m,
    contactFormContainer: p,
    successScreen: h,
    extraFields: q,
    emailGroup: A,
    addressGroup: C
  };
}
function K(e, n) {
  const {
    widgetBtn: s,
    popup: o,
    closeBtn: m,
    form: a,
    nameInput: w,
    phoneInput: p,
    countrySelect: F,
    submitBtn: N,
    nameGroup: y,
    phoneGroup: g,
    speechBubble: I,
    contactFormContainer: S,
    successScreen: M,
    emailGroup: l,
    addressGroup: b
  } = e;
  let v = !1;
  setTimeout(function() {
    I.classList.add("show"), document.addEventListener("click", function t() {
      I.classList.remove("show"), document.removeEventListener("click", t);
    }), setTimeout(function() {
      I.classList.remove("show");
    }, 3e4);
  }, 5e3), s.addEventListener("click", function() {
    o.style.display = "block", I.classList.remove("show");
  }), m.addEventListener("click", function() {
    o.style.display = "none", z();
  });
  function z() {
    a.reset(), v = !1, C(), S.style.display = "block", M.style.display = "none";
  }
  function j() {
    const t = w.value.trim(), r = y.querySelector(".error-message");
    return t.length < 2 ? (v && (y.classList.add("invalid"), r.textContent = "Bitte geben Sie einen gültigen Namen ein."), !1) : (y.classList.remove("invalid"), r.textContent = "", !0);
  }
  function k() {
    if (!l.element || !l.input)
      return !0;
    const t = l.input.value.trim(), r = l.element.querySelector(".error-message");
    return !l.input.required && t === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t) ? (l.element.classList.remove("invalid"), r.textContent = "", !0) : (v && (l.element.classList.add("invalid"), r.textContent = "Bitte geben Sie eine gültige E-Mail-Adresse ein."), !1);
  }
  function P() {
    if (!b.element || !b.input)
      return !0;
    const t = b.input.value.trim(), r = b.element.querySelector(".error-message");
    return !b.input.required && t === "" ? (b.element.classList.remove("invalid"), r.textContent = "", !0) : t.length < 5 ? (v && (b.element.classList.add("invalid"), r.textContent = "Bitte geben Sie eine gültige Adresse ein."), !1) : (b.element.classList.remove("invalid"), r.textContent = "", !0);
  }
  function q() {
    const t = F.value, r = p.value.trim(), x = g.querySelector(".error-message");
    let d = r.replace(/[\s-]/g, "");
    d.startsWith("0") && (d = d.substring(1), p.value = d);
    const h = d.replace(/\D/g, "");
    let T = !1, L = "";
    return h.length === 0 ? L = "Bitte geben Sie eine Telefonnummer ein." : t === "+49" && (h.length < 10 || h.length > 11) ? L = "Deutsche Telefonnummern müssen 10-11 Ziffern haben." : t === "+43" && (h.length < 9 || h.length > 10) ? L = "Österreichische Telefonnummern müssen 9-10 Ziffern haben." : t === "+41" && h.length !== 9 ? L = "Schweizer Telefonnummern müssen 9 Ziffern haben." : T = !0, T ? (g.classList.remove("invalid"), x.textContent = "", !0) : (v && (g.classList.add("invalid"), x.textContent = L), !1);
  }
  function A() {
    let t = p.value;
    const r = t;
    if (t = t.replace(/[\s-]/g, ""), t.startsWith("0") && (t = t.substring(1)), t !== r && t.length > 0) {
      p.value = t;
      const x = p.style.backgroundColor, d = p.style.transition;
      p.style.transition = "background-color 0.5s ease", p.style.backgroundColor = "#eef7ff", setTimeout(() => {
        p.style.backgroundColor = x, setTimeout(() => {
          p.style.transition = d;
        }, 500);
      }, 500);
    }
    return t;
  }
  function C() {
    const t = j(), r = q(), x = k(), d = P();
    N.disabled = !(t && r && x && d);
  }
  w.addEventListener("input", C), p.addEventListener("input", function() {
    A(), C();
  }), F.addEventListener("change", C), l.input && l.input.addEventListener("input", C), b.input && b.input.addEventListener("input", C), a.addEventListener("submit", function(t) {
    t.preventDefault(), v = !0, A();
    const r = j(), x = q(), d = k(), h = P();
    if (!r || !x || !d || !h)
      return;
    if (!n.customerId) {
      const f = g.querySelector(".error-message");
      g.classList.add("invalid"), f.textContent = "Konfigurationsfehler: Keine Kunden-ID vorhanden.", console.error("ContactWidget: customerId is required but was not provided in the configuration");
      return;
    }
    const T = w.value.trim(), L = F.value, D = p.value.trim().replace(/\D/g, ""), B = `${L}${D}`, E = {
      name: T,
      phone: B,
      customerId: n.customerId,
      url: window.location.href,
      // Include the current page URL
      userAgent: navigator.userAgent,
      // Include user agent for analytics
      greetingText: n.greetingText
    };
    l.input && l.input.value.trim() && (E.email = l.input.value.trim()), b.input && b.input.value.trim() && (E.address = b.input.value.trim()), N.disabled = !0, N.textContent = "Wird gesendet...";
    const c = new AbortController(), i = setTimeout(() => c.abort(), 1e4);
    fetch(n.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(E),
      signal: c.signal
    }).then((f) => {
      if (!f.ok)
        throw new Error("Server responded with an error");
      return f.json();
    }).then((f) => {
      console.log("Call request successfully sent to server:", f), typeof n.onSubmit == "function" && n.onSubmit({
        name: T,
        phoneNumber: B,
        email: E.email,
        address: E.address,
        success: !0
      }), S.style.display = "none", M.style.display = "block";
    }).catch((f) => {
      console.error("Error sending call request:", f), typeof n.onSubmit == "function" && n.onSubmit({
        name: T,
        phoneNumber: B,
        email: E.email,
        address: E.address,
        success: !1,
        error: f
      });
      const u = g.querySelector(".error-message");
      g.classList.add("invalid"), u.textContent = "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.";
    }).finally(() => {
      clearTimeout(i), N.disabled = !1, N.textContent = n.submitText || "Anruf bekommen", v = !1, M.style.display === "block" && (a.reset(), C());
    });
  }), C();
}
function V(e = {}) {
  e.apiUrl = e.apiUrl || "https://api.hallopetra.de/web-widget/request-call";
  const n = !e.customerId;
  if (typeof e.extraInputFields == "string")
    try {
      e.extraInputFields = JSON.parse(e.extraInputFields);
    } catch {
      console.error("ContactWidget: Error parsing extraInputFields. It should be a valid JSON array."), e.extraInputFields = [];
    }
  G();
  const s = U(e);
  if (n) {
    const o = s.contactFormContainer, m = s.form, a = document.createElement("div");
    a.style.backgroundColor = "#FEF2F2", a.style.color = "#B91C1C", a.style.padding = "10px", a.style.borderRadius = "8px", a.style.margin = "0 0 16px 0", a.style.fontSize = "14px", a.style.fontWeight = "500", a.style.textAlign = "center", a.textContent = "Konfigurationsfehler: Keine Kunden-ID vorhanden.", o.insertBefore(a, o.firstChild), m.onsubmit = function(w) {
      return w.preventDefault(), !1;
    };
  }
  return K(s, e), {
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
    updateConfig: (o) => {
      if (o.speechBubbleText && (s.speechBubble.textContent = o.speechBubbleText), o.successTitle) {
        const m = s.successScreen.querySelector(".success-title");
        m && (m.textContent = o.successTitle);
      }
      if (o.successMessage) {
        const m = s.successScreen.querySelector(".success-message");
        m && (m.textContent = o.successMessage);
      }
      o.greetingText && (e.greetingText = o.greetingText);
    }
  };
}
window.ContactWidget = {
  init: V
};
document.addEventListener("DOMContentLoaded", () => {
  const e = document.querySelector("script[data-contact-widget-auto-init]");
  if (e) {
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
      "customerId",
      "successTitle",
      "greetingText",
      "extraInputFields",
      "emailLabel",
      "emailPlaceholder",
      "addressLabel",
      "addressPlaceholder"
    ].forEach((o) => {
      const m = `data-${o.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      e.hasAttribute(m) && (n[o] = e.getAttribute(m));
    }), V(n);
  }
});
