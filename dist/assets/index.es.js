function A() {
  const e = document.createElement("link");
  e.rel = "preconnect", e.href = "https://fonts.googleapis.com";
  const n = document.createElement("link");
  n.rel = "preconnect", n.href = "https://fonts.gstatic.com", n.crossOrigin = "anonymous";
  const s = document.createElement("link");
  s.rel = "stylesheet", s.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap", document.head.appendChild(e), document.head.appendChild(n), document.head.appendChild(s);
  const r = document.createElement("style");
  r.innerHTML = `
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
  `, document.head.appendChild(r);
}
function F(e) {
  const n = document.createElement("button");
  n.id = "contact-widget-btn", n.className = "contact-widget-btn";
  const s = document.createElement("div");
  s.className = "contact-widget-logo-container";
  const r = document.createElement("img");
  r.src = e.logoSrc || "https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/assets/logo.png", r.alt = "Petra", s.appendChild(r), n.appendChild(s);
  const a = document.createElement("div");
  a.id = "speech-bubble", a.className = "speech-bubble", a.textContent = e.speechBubbleText || "Wie darf ich Ihnen helfen?";
  const i = document.createElement("div");
  i.id = "contact-popup", i.className = "contact-popup";
  const x = document.createElement("button");
  x.id = "close-popup", x.className = "close-btn", x.textContent = "×";
  const c = document.createElement("div");
  c.id = "contact-form-container";
  const L = document.createElement("h3");
  L.textContent = e.formTitle || "Wir werden rufen Sie zurück";
  const w = document.createElement("p");
  w.className = "contact-popup-description", w.textContent = e.formDescription || "Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren.";
  const y = document.createElement("form");
  y.id = "contact-form";
  const u = document.createElement("div");
  u.className = "form-group", u.id = "name-group";
  const k = document.createElement("label");
  k.htmlFor = "name", k.textContent = e.nameLabel || "Name";
  const v = document.createElement("input");
  v.type = "text", v.id = "name", v.name = "name", v.placeholder = e.namePlaceholder || "Ihr Name", v.required = !0;
  const E = document.createElement("div");
  E.className = "error-message", u.appendChild(k), u.appendChild(v), u.appendChild(E);
  const b = document.createElement("div");
  b.className = "form-group", b.id = "phone-group";
  const B = document.createElement("label");
  B.htmlFor = "phone", B.textContent = e.phoneLabel || "Telefonnummer";
  const T = document.createElement("div");
  T.className = "phone-input-container";
  const S = document.createElement("select");
  S.id = "country-code", S.className = "country-select", [
    { code: "+49", emoji: "🇩🇪", name: "Deutschland" },
    { code: "+43", emoji: "🇦🇹", name: "Österreich" },
    { code: "+41", emoji: "🇨🇭", name: "Schweiz" }
  ].forEach((I) => {
    const M = document.createElement("option");
    M.value = I.code, M.textContent = `${I.emoji} ${I.code}`, M.title = I.name, S.appendChild(M);
  });
  const m = document.createElement("input");
  m.type = "tel", m.id = "phone", m.name = "phone", m.placeholder = e.phonePlaceholder || "Ihre Telefonnummer", m.className = "phone-input", m.required = !0;
  const t = document.createElement("div");
  t.className = "error-message", T.appendChild(S), T.appendChild(m), b.appendChild(B), b.appendChild(T), b.appendChild(t);
  const l = document.createElement("div");
  l.className = "compliance-text";
  const C = document.createElement("a");
  C.href = e.agbUrl || "https://example.com/agb", C.target = "_blank", C.textContent = "AGB";
  const d = document.createElement("a");
  d.href = e.datenschutzUrl || "https://example.com/datenschutz", d.target = "_blank", d.textContent = "Datenschutzbedingungen", l.innerHTML = "Mit dem Absenden stimmen Sie unseren ", l.appendChild(C), l.appendChild(document.createTextNode(" und ")), l.appendChild(d), l.appendChild(document.createTextNode(" zu."));
  const p = document.createElement("button");
  p.type = "submit", p.className = "submit-btn", p.id = "submit-btn", p.textContent = e.submitText || "Anruf bekommen", p.disabled = !0, y.appendChild(u), y.appendChild(b), y.appendChild(l), y.appendChild(p), c.appendChild(L), c.appendChild(w), c.appendChild(y);
  const f = document.createElement("div");
  f.id = "success-screen", f.className = "success-screen";
  const g = document.createElement("div");
  g.className = "success-icon", g.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
    </svg>
  `;
  const N = document.createElement("h3");
  N.className = "success-title", N.textContent = e.successTitle || "Vielen Dank!";
  const z = document.createElement("p");
  z.className = "success-message", z.textContent = e.successMessage || "Wir werden Sie in Kürze unter der angegebenen Nummer kontaktieren.";
  const o = document.createElement("div");
  o.className = "powered-by";
  const h = document.createElement("a");
  return h.href = "https://hallopetra.com", h.target = "_blank", h.textContent = "HalloPetra", o.appendChild(document.createTextNode("Bereitgestellt von ")), o.appendChild(h), f.appendChild(g), f.appendChild(N), f.appendChild(z), f.appendChild(o), i.appendChild(x), i.appendChild(c), i.appendChild(f), document.body.appendChild(n), document.body.appendChild(a), document.body.appendChild(i), {
    widgetBtn: n,
    popup: i,
    closeBtn: x,
    form: y,
    nameInput: v,
    phoneInput: m,
    countrySelect: S,
    submitBtn: p,
    nameGroup: u,
    phoneGroup: b,
    speechBubble: a,
    contactFormContainer: c,
    successScreen: f
  };
}
function j(e, n) {
  const {
    widgetBtn: s,
    popup: r,
    closeBtn: a,
    form: i,
    nameInput: x,
    phoneInput: c,
    countrySelect: L,
    submitBtn: w,
    nameGroup: y,
    phoneGroup: u,
    speechBubble: k,
    contactFormContainer: v,
    successScreen: E
  } = e;
  let b = !1;
  setTimeout(function() {
    k.classList.add("show"), document.addEventListener("click", function t() {
      k.classList.remove("show"), document.removeEventListener("click", t);
    }), setTimeout(function() {
      k.classList.remove("show");
    }, 3e4);
  }, 5e3), s.addEventListener("click", function() {
    r.style.display = "block", k.classList.remove("show");
  }), a.addEventListener("click", function() {
    r.style.display = "none", B();
  });
  function B() {
    i.reset(), b = !1, m(), v.style.display = "block", E.style.display = "none";
  }
  function T() {
    const t = x.value.trim(), l = y.querySelector(".error-message");
    return t.length < 2 ? (b && (y.classList.add("invalid"), l.textContent = "Bitte geben Sie einen gültigen Namen ein."), !1) : (y.classList.remove("invalid"), l.textContent = "", !0);
  }
  function S() {
    const t = L.value, l = c.value.trim(), C = u.querySelector(".error-message");
    let d = l.replace(/[\s-]/g, "");
    d.startsWith("0") && (d = d.substring(1), c.value = d);
    const p = d.replace(/\D/g, "");
    let f = !1, g = "";
    return p.length === 0 ? g = "Bitte geben Sie eine Telefonnummer ein." : t === "+49" && (p.length < 10 || p.length > 11) ? g = "Deutsche Telefonnummern müssen 10-11 Ziffern haben." : t === "+43" && (p.length < 9 || p.length > 10) ? g = "Österreichische Telefonnummern müssen 9-10 Ziffern haben." : t === "+41" && p.length !== 9 ? g = "Schweizer Telefonnummern müssen 9 Ziffern haben." : f = !0, f ? (u.classList.remove("invalid"), C.textContent = "", !0) : (b && (u.classList.add("invalid"), C.textContent = g), !1);
  }
  function q() {
    let t = c.value;
    const l = t;
    if (t = t.replace(/[\s-]/g, ""), t.startsWith("0") && (t = t.substring(1)), t !== l && t.length > 0) {
      c.value = t;
      const C = c.style.backgroundColor, d = c.style.transition;
      c.style.transition = "background-color 0.5s ease", c.style.backgroundColor = "#eef7ff", setTimeout(() => {
        c.style.backgroundColor = C, setTimeout(() => {
          c.style.transition = d;
        }, 500);
      }, 500);
    }
    return t;
  }
  function m() {
    const t = T(), l = S();
    w.disabled = !(t && l);
  }
  x.addEventListener("input", m), c.addEventListener("input", function() {
    q(), m();
  }), L.addEventListener("change", m), i.addEventListener("submit", function(t) {
    t.preventDefault(), b = !0, q();
    const l = T(), C = S();
    if (!l || !C)
      return;
    if (!n.customerId) {
      const o = u.querySelector(".error-message");
      u.classList.add("invalid"), o.textContent = "Konfigurationsfehler: Keine Kunden-ID vorhanden.", console.error("ContactWidget: customerId is required but was not provided in the configuration");
      return;
    }
    const d = x.value.trim(), p = L.value, f = c.value.trim().replace(/\D/g, ""), g = `${p}${f}`;
    w.disabled = !0, w.textContent = "Wird gesendet...";
    const N = new AbortController(), z = setTimeout(() => N.abort(), 1e4);
    fetch(n.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: d,
        phone: g,
        customerId: n.customerId,
        url: window.location.href,
        // Include the current page URL
        userAgent: navigator.userAgent
        // Include user agent for analytics
      }),
      signal: N.signal
    }).then((o) => {
      if (!o.ok)
        throw new Error("Server responded with an error");
      return o.json();
    }).then((o) => {
      if (console.log("Call request successfully sent to server:", o), typeof n.onSubmit == "function" && n.onSubmit({ name: d, phoneNumber: g, success: !0 }), o && o.successTitle) {
        const h = E.querySelector(".success-title");
        h && (h.textContent = o.successTitle);
      }
      if (o && o.successMessage) {
        const h = E.querySelector(".success-message");
        h && (h.textContent = o.successMessage);
      } else if (o && o.message) {
        const h = E.querySelector(".success-message");
        h && (h.textContent = o.message);
      }
      v.style.display = "none", E.style.display = "block";
    }).catch((o) => {
      console.error("Error sending call request:", o), typeof n.onSubmit == "function" && n.onSubmit({ name: d, phoneNumber: g, success: !1, error: o });
      const h = u.querySelector(".error-message");
      u.classList.add("invalid"), h.textContent = "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.";
    }).finally(() => {
      clearTimeout(z), w.disabled = !1, w.textContent = n.submitText || "Anruf bekommen", b = !1, E.style.display === "block" && (i.reset(), m());
    });
  }), m();
}
function P(e = {}) {
  e.apiUrl = e.apiUrl || "https://api.hallopetra.de/api/web-widget/request-call";
  const n = !e.customerId;
  A();
  const s = F(e);
  if (n) {
    const r = s.contactFormContainer, a = s.form, i = document.createElement("div");
    i.style.backgroundColor = "#FEF2F2", i.style.color = "#B91C1C", i.style.padding = "10px", i.style.borderRadius = "8px", i.style.margin = "0 0 16px 0", i.style.fontSize = "14px", i.style.fontWeight = "500", i.style.textAlign = "center", i.textContent = "Konfigurationsfehler: Keine Kunden-ID vorhanden.", r.insertBefore(i, r.firstChild), a.onsubmit = function(x) {
      return x.preventDefault(), !1;
    };
  }
  return j(s, e), {
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
    updateConfig: (r) => {
      if (r.speechBubbleText && (s.speechBubble.textContent = r.speechBubbleText), r.successTitle) {
        const a = s.successScreen.querySelector(".success-title");
        a && (a.textContent = r.successTitle);
      }
      if (r.successMessage) {
        const a = s.successScreen.querySelector(".success-message");
        a && (a.textContent = r.successMessage);
      }
    }
  };
}
window.ContactWidget = {
  init: P
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
      "successTitle"
    ].forEach((r) => {
      const a = `data-${r.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      e.hasAttribute(a) && (n[r] = e.getAttribute(a));
    }), P(n);
  }
});
