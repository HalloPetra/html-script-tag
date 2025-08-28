function D() {
  const e = document.createElement("link");
  e.rel = "preconnect", e.href = "https://fonts.googleapis.com";
  const r = document.createElement("link");
  r.rel = "preconnect", r.href = "https://fonts.gstatic.com", r.crossOrigin = "anonymous";
  const a = document.createElement("link");
  a.rel = "stylesheet", a.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap", document.head.appendChild(e), document.head.appendChild(r), document.head.appendChild(a);
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
      max-height: 80vh;
      overflow-y: auto;
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

    .hint-text {
      font-size: 12px;
      color: #64748b;
      margin-bottom: 16px;
      line-height: 1.4;
      font-family: 'Inter', sans-serif;
    }

    .hint-text a {
      color: #3b82f6;
      text-decoration: none;
    }

    .hint-text a:hover {
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
function G(e) {
  const r = document.createElement("button");
  r.id = "contact-widget-btn", r.className = "contact-widget-btn";
  const a = document.createElement("div");
  a.className = "contact-widget-logo-container";
  const i = document.createElement("img");
  i.src = e.logoSrc || "https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/assets/logo.png", i.alt = "Petra", a.appendChild(i), r.appendChild(a);
  const u = document.createElement("div");
  u.id = "speech-bubble", u.className = "speech-bubble", u.textContent = e.speechBubbleText || "Wie darf ich Ihnen helfen?";
  const l = document.createElement("div");
  l.id = "contact-popup", l.className = "contact-popup";
  const E = document.createElement("button");
  E.id = "close-popup", E.className = "close-btn", E.textContent = "×";
  const p = document.createElement("div");
  p.id = "contact-form-container";
  const z = document.createElement("h3");
  z.textContent = e.formTitle || "Wir rufen Sie zurück";
  const L = document.createElement("p");
  L.className = "contact-popup-description", L.textContent = e.formDescription || "Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren.";
  const x = document.createElement("form");
  x.id = "contact-form";
  const f = document.createElement("div");
  f.className = "form-group", f.id = "name-group";
  const S = document.createElement("label");
  S.htmlFor = "name", S.textContent = e.nameLabel || "Name";
  const k = document.createElement("input");
  k.type = "text", k.id = "name", k.name = "name", k.placeholder = e.namePlaceholder || "Ihr Name", k.required = !0;
  const F = document.createElement("div");
  F.className = "error-message", f.appendChild(S), f.appendChild(k), f.appendChild(F);
  const c = document.createElement("div");
  c.className = "form-group", c.id = "phone-group";
  const m = document.createElement("label");
  m.htmlFor = "phone", m.textContent = e.phoneLabel || "Telefonnummer";
  const y = document.createElement("div");
  y.className = "phone-input-container";
  const I = document.createElement("select");
  I.id = "country-code", I.className = "country-select", [
    { code: "+49", emoji: "🇩🇪", name: "Deutschland" },
    { code: "+43", emoji: "🇦🇹", name: "Österreich" },
    { code: "+41", emoji: "🇨🇭", name: "Schweiz" }
  ].forEach((s) => {
    const n = document.createElement("option");
    n.value = s.code, n.textContent = `${s.emoji} ${s.code}`, n.title = s.name, I.appendChild(n);
  });
  const w = document.createElement("input");
  w.type = "tel", w.id = "phone", w.name = "phone", w.placeholder = e.phonePlaceholder || "Ihre Telefonnummer", w.className = "phone-input", w.required = !0;
  const A = document.createElement("div");
  A.className = "error-message", y.appendChild(I), y.appendChild(w), c.appendChild(m), c.appendChild(y), c.appendChild(A);
  const B = [], P = { element: null, input: null }, v = { element: null, input: null };
  e.extraInputFields && Array.isArray(e.extraInputFields) && e.extraInputFields.forEach((s) => {
    if (s.type) {
      if (s.type.toLowerCase() === "email") {
        const n = document.createElement("div");
        n.className = "form-group", n.id = "email-group";
        const b = document.createElement("label");
        b.htmlFor = "email", b.textContent = s.label || e.emailLabel || "E-Mail";
        const d = document.createElement("input");
        d.type = "email", d.id = "email", d.name = "email", d.placeholder = s.placeholder || e.emailPlaceholder || "Ihre E-Mail-Adresse", d.required = !!s.required;
        const q = document.createElement("div");
        q.className = "error-message", n.appendChild(b), n.appendChild(d), n.appendChild(q), B.push({ type: "email", element: n, input: d, required: !!s.required }), P.element = n, P.input = d;
      } else if (s.type.toLowerCase() === "address") {
        const n = document.createElement("div");
        n.className = "form-group", n.id = "address-group";
        const b = document.createElement("label");
        b.htmlFor = "address", b.textContent = s.label || e.addressLabel || "Adresse";
        const d = document.createElement("input");
        d.type = "text", d.id = "address", d.name = "address", d.placeholder = s.placeholder || e.addressPlaceholder || "Ihre Adresse", d.required = !!s.required;
        const q = document.createElement("div");
        q.className = "error-message", n.appendChild(b), n.appendChild(d), n.appendChild(q), B.push({ type: "address", element: n, input: d, required: !!s.required }), v.element = n, v.input = d;
      }
    }
  });
  const t = document.createElement("button");
  if (t.type = "submit", t.className = "submit-btn", t.id = "submit-btn", t.textContent = e.submitText || "Anruf bekommen", t.disabled = !0, x.appendChild(f), x.appendChild(c), B.forEach((s) => {
    x.appendChild(s.element);
  }), e.hintText) {
    const s = document.createElement("div");
    if (s.className = "hint-text", s.textContent = e.hintText, e.hintLinkText && e.hintLinkUrl) {
      s.appendChild(document.createTextNode(" "));
      const n = document.createElement("a");
      n.href = e.hintLinkUrl, n.target = "_blank", n.textContent = e.hintLinkText, s.appendChild(n);
    }
    x.appendChild(s);
  }
  x.appendChild(t), p.appendChild(z), p.appendChild(L), p.appendChild(x);
  const o = document.createElement("div");
  o.id = "success-screen", o.className = "success-screen";
  const h = document.createElement("div");
  h.className = "success-icon", h.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
    </svg>
  `;
  const g = document.createElement("h3");
  g.className = "success-title", g.textContent = e.successTitle || "Vielen Dank!";
  const T = document.createElement("p");
  T.className = "success-message", T.textContent = e.successMessage || "Wir werden Sie in Kürze unter der angegebenen Nummer kontaktieren.";
  const C = document.createElement("div");
  C.className = "powered-by";
  const M = document.createElement("a");
  return M.href = "https://hallopetra.de", M.target = "_blank", M.textContent = "HalloPetra", C.appendChild(document.createTextNode("Bereitgestellt von ")), C.appendChild(M), o.appendChild(h), o.appendChild(g), o.appendChild(T), o.appendChild(C), l.appendChild(E), l.appendChild(p), l.appendChild(o), document.body.appendChild(r), document.body.appendChild(u), document.body.appendChild(l), {
    widgetBtn: r,
    popup: l,
    closeBtn: E,
    form: x,
    nameInput: k,
    phoneInput: w,
    countrySelect: I,
    submitBtn: t,
    nameGroup: f,
    phoneGroup: c,
    speechBubble: u,
    contactFormContainer: p,
    successScreen: o,
    extraFields: B,
    emailGroup: P,
    addressGroup: v
  };
}
function U(e, r) {
  const {
    widgetBtn: a,
    popup: i,
    closeBtn: u,
    form: l,
    nameInput: E,
    phoneInput: p,
    countrySelect: z,
    submitBtn: L,
    nameGroup: x,
    phoneGroup: f,
    speechBubble: S,
    contactFormContainer: k,
    successScreen: F,
    emailGroup: c,
    addressGroup: m
  } = e;
  let y = !1;
  setTimeout(function() {
    S.classList.add("show"), document.addEventListener("click", function t() {
      S.classList.remove("show"), document.removeEventListener("click", t);
    }), setTimeout(function() {
      S.classList.remove("show");
    }, 3e4);
  }, 5e3), a.addEventListener("click", function() {
    i.style.display = "block", S.classList.remove("show");
  }), u.addEventListener("click", function() {
    i.style.display = "none", I();
  });
  function I() {
    l.reset(), y = !1, v(), k.style.display = "block", F.style.display = "none";
  }
  function W() {
    const t = E.value.trim(), o = x.querySelector(".error-message");
    return t.length < 2 ? (y && (x.classList.add("invalid"), o.textContent = "Bitte geben Sie einen gültigen Namen ein."), !1) : (x.classList.remove("invalid"), o.textContent = "", !0);
  }
  function w() {
    if (!c.element || !c.input)
      return !0;
    const t = c.input.value.trim(), o = c.element.querySelector(".error-message");
    return !c.input.required && t === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t) ? (c.element.classList.remove("invalid"), o.textContent = "", !0) : (y && (c.element.classList.add("invalid"), o.textContent = "Bitte geben Sie eine gültige E-Mail-Adresse ein."), !1);
  }
  function A() {
    if (!m.element || !m.input)
      return !0;
    const t = m.input.value.trim(), o = m.element.querySelector(".error-message");
    return !m.input.required && t === "" ? (m.element.classList.remove("invalid"), o.textContent = "", !0) : t.length < 5 ? (y && (m.element.classList.add("invalid"), o.textContent = "Bitte geben Sie eine gültige Adresse ein."), !1) : (m.element.classList.remove("invalid"), o.textContent = "", !0);
  }
  function B() {
    z.value;
    const t = p.value.trim(), o = f.querySelector(".error-message");
    let h = t.replace(/[\s-]/g, "");
    h.startsWith("0") && (h = h.substring(1), p.value = h);
    const g = h.replace(/\D/g, "");
    let T = !1, C = "";
    return g.length === 0 ? C = "Bitte geben Sie eine Telefonnummer ein." : g.length < 6 ? C = "Telefonnummern müssen mindestens 6 Ziffern haben." : T = !0, T ? (f.classList.remove("invalid"), o.textContent = "", !0) : (y && (f.classList.add("invalid"), o.textContent = C), !1);
  }
  function P() {
    let t = p.value;
    const o = t;
    if (t = t.replace(/[\s-]/g, ""), t.startsWith("0") && (t = t.substring(1)), t !== o && t.length > 0) {
      p.value = t;
      const h = p.style.backgroundColor, g = p.style.transition;
      p.style.transition = "background-color 0.5s ease", p.style.backgroundColor = "#eef7ff", setTimeout(() => {
        p.style.backgroundColor = h, setTimeout(() => {
          p.style.transition = g;
        }, 500);
      }, 500);
    }
    return t;
  }
  function v() {
    const t = W(), o = B(), h = w(), g = A();
    L.disabled = !(t && o && h && g);
  }
  E.addEventListener("input", v), p.addEventListener("input", function() {
    P(), v();
  }), z.addEventListener("change", v), c.input && c.input.addEventListener("input", v), m.input && m.input.addEventListener("input", v), l.addEventListener("submit", function(t) {
    t.preventDefault(), y = !0, P();
    const o = W(), h = B(), g = w(), T = A();
    if (!o || !h || !g || !T)
      return;
    if (!r.customerId) {
      const N = f.querySelector(".error-message");
      f.classList.add("invalid"), N.textContent = "Konfigurationsfehler: Keine Kunden-ID vorhanden.", console.error("ContactWidget: customerId is required but was not provided in the configuration");
      return;
    }
    const C = E.value.trim(), M = z.value, s = p.value.trim().replace(/\D/g, ""), n = `${M}${s}`, b = {
      name: C,
      phone: n,
      customerId: r.customerId,
      url: window.location.href,
      // Include the current page URL
      userAgent: navigator.userAgent,
      // Include user agent for analytics
      greetingText: r.greetingText
    };
    r.outgoingPhoneNumber && (b.outgoingPhoneNumber = r.outgoingPhoneNumber), c.input && c.input.value.trim() && (b.email = c.input.value.trim()), m.input && m.input.value.trim() && (b.address = m.input.value.trim()), L.disabled = !0, L.textContent = "Wird gesendet...";
    const d = new AbortController(), q = setTimeout(() => d.abort(), 1e4);
    fetch(r.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(b),
      signal: d.signal
    }).then((N) => {
      if (!N.ok)
        throw new Error("Server responded with an error");
      return N.json();
    }).then((N) => {
      console.log("Call request successfully sent to server:", N), typeof r.onSubmit == "function" && r.onSubmit({
        name: C,
        phoneNumber: n,
        email: b.email,
        address: b.address,
        success: !0
      }), k.style.display = "none", F.style.display = "block";
    }).catch((N) => {
      console.error("Error sending call request:", N), typeof r.onSubmit == "function" && r.onSubmit({
        name: C,
        phoneNumber: n,
        email: b.email,
        address: b.address,
        success: !1,
        error: N
      });
      const V = f.querySelector(".error-message");
      f.classList.add("invalid"), V.textContent = "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.";
    }).finally(() => {
      clearTimeout(q), L.disabled = !1, L.textContent = r.submitText || "Anruf bekommen", y = !1, F.style.display === "block" && (l.reset(), v());
    });
  }), v();
}
function j(e = {}) {
  e.apiUrl = e.apiUrl || "https://api.hallopetra.de/web-widget/request-call";
  const r = !e.customerId;
  if (typeof e.extraInputFields == "string")
    try {
      e.extraInputFields = JSON.parse(e.extraInputFields);
    } catch {
      console.error("ContactWidget: Error parsing extraInputFields. It should be a valid JSON array."), e.extraInputFields = [];
    }
  D();
  const a = G(e);
  if (r) {
    const i = a.contactFormContainer, u = a.form, l = document.createElement("div");
    l.style.backgroundColor = "#FEF2F2", l.style.color = "#B91C1C", l.style.padding = "10px", l.style.borderRadius = "8px", l.style.margin = "0 0 16px 0", l.style.fontSize = "14px", l.style.fontWeight = "500", l.style.textAlign = "center", l.textContent = "Konfigurationsfehler: Keine Kunden-ID vorhanden.", i.insertBefore(l, i.firstChild), u.onsubmit = function(E) {
      return E.preventDefault(), !1;
    };
  }
  return U(a, e), {
    // Show the popup programmatically
    showPopup: () => {
      a.popup.style.display = "block", a.speechBubble.classList.remove("show");
    },
    // Hide the popup programmatically
    hidePopup: () => {
      a.popup.style.display = "none";
    },
    // Show speech bubble programmatically
    showSpeechBubble: () => {
      a.speechBubble.classList.add("show");
    },
    // Hide speech bubble programmatically
    hideSpeechBubble: () => {
      a.speechBubble.classList.remove("show");
    },
    // Update widget configuration
    updateConfig: (i) => {
      if (i.speechBubbleText && (a.speechBubble.textContent = i.speechBubbleText), i.successTitle) {
        const u = a.successScreen.querySelector(".success-title");
        u && (u.textContent = i.successTitle);
      }
      if (i.successMessage) {
        const u = a.successScreen.querySelector(".success-message");
        u && (u.textContent = i.successMessage);
      }
      i.greetingText && (e.greetingText = i.greetingText);
    }
  };
}
window.ContactWidget = {
  init: j
};
document.addEventListener("DOMContentLoaded", () => {
  const e = document.querySelector("script[data-contact-widget-auto-init]");
  if (e) {
    const r = {};
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
      "speechBubbleText",
      "apiUrl",
      "customerId",
      "successTitle",
      "greetingText",
      "extraInputFields",
      "emailLabel",
      "emailPlaceholder",
      "addressLabel",
      "addressPlaceholder",
      "hintText",
      "hintLinkText",
      "hintLinkUrl",
      "outgoingPhoneNumber"
    ].forEach((i) => {
      const u = `data-${i.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      e.hasAttribute(u) && (r[i] = e.getAttribute(u));
    }), j(r);
  }
});
