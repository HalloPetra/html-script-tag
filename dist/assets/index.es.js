function D() {
  const t = document.createElement("link");
  t.rel = "preconnect", t.href = "https://fonts.googleapis.com";
  const e = document.createElement("link");
  e.rel = "preconnect", e.href = "https://fonts.gstatic.com", e.crossOrigin = "anonymous";
  const r = document.createElement("link");
  r.rel = "stylesheet", r.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap", document.head.appendChild(t), document.head.appendChild(e), document.head.appendChild(r);
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
function A(t) {
  const e = document.createElement("button");
  e.id = "contact-widget-btn", e.className = "contact-widget-btn";
  const r = document.createElement("div");
  r.className = "contact-widget-logo-container";
  const i = document.createElement("img");
  i.src = t.logoSrc || "https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/assets/logo.png", i.alt = "Petra", r.appendChild(i), e.appendChild(r);
  const f = document.createElement("div");
  f.id = "speech-bubble", f.className = "speech-bubble", f.textContent = t.speechBubbleText || "Wie darf ich Ihnen helfen?";
  const l = document.createElement("div");
  l.id = "contact-popup", l.className = "contact-popup";
  const x = document.createElement("button");
  x.id = "close-popup", x.className = "close-btn", x.textContent = "×";
  const g = document.createElement("div");
  g.id = "contact-form-container";
  const E = document.createElement("h3");
  E.textContent = t.formTitle || "Wir rufen Sie zurück";
  const N = document.createElement("p");
  N.className = "contact-popup-description", N.textContent = t.formDescription || "Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren.";
  const d = document.createElement("form");
  d.id = "contact-form";
  const p = document.createElement("div");
  p.className = "form-group", p.id = "name-group";
  const w = document.createElement("label");
  w.htmlFor = "name", w.textContent = t.nameLabel || "Name";
  const m = document.createElement("input");
  m.type = "text", m.id = "name", m.name = "name", m.placeholder = t.namePlaceholder || "Ihr Name", m.required = !0;
  const L = document.createElement("div");
  L.className = "error-message", p.appendChild(w), p.appendChild(m), p.appendChild(L);
  const a = document.createElement("div");
  a.className = "form-group", a.id = "phone-group";
  const S = document.createElement("label");
  S.htmlFor = "phone", S.textContent = t.phoneLabel || "Telefonnummer";
  const v = document.createElement("div");
  v.className = "phone-input-container";
  const C = document.createElement("select");
  C.id = "country-code", C.className = "country-select", [
    { code: "+49", emoji: "🇩🇪", name: "Deutschland" },
    { code: "+43", emoji: "🇦🇹", name: "Österreich" },
    { code: "+41", emoji: "🇨🇭", name: "Schweiz" }
  ].forEach((I) => {
    const P = document.createElement("option");
    P.value = I.code, P.textContent = `${I.emoji} ${I.code}`, P.title = I.name, C.appendChild(P);
  });
  const n = document.createElement("input");
  n.type = "tel", n.id = "phone", n.name = "phone", n.placeholder = t.phonePlaceholder || "Ihre Telefonnummer", n.className = "phone-input", n.required = !0;
  const u = document.createElement("div");
  u.className = "error-message", v.appendChild(C), v.appendChild(n), a.appendChild(S), a.appendChild(v), a.appendChild(u);
  const c = document.createElement("div");
  c.className = "compliance-text";
  const s = document.createElement("a");
  s.href = t.agbUrl || "https://example.com/agb", s.target = "_blank", s.textContent = "AGB";
  const y = document.createElement("a");
  y.href = t.datenschutzUrl || "https://example.com/datenschutz", y.target = "_blank", y.textContent = "Datenschutzbedingungen", c.innerHTML = "Mit dem Absenden stimmen Sie unseren ", c.appendChild(s), c.appendChild(document.createTextNode(" und ")), c.appendChild(y), c.appendChild(document.createTextNode(" zu."));
  const o = document.createElement("button");
  o.type = "submit", o.className = "submit-btn", o.id = "submit-btn", o.textContent = t.submitText || "Anruf bekommen", o.disabled = !0, d.appendChild(p), d.appendChild(a), d.appendChild(c), d.appendChild(o), g.appendChild(E), g.appendChild(N), g.appendChild(d);
  const h = document.createElement("div");
  h.id = "success-screen", h.className = "success-screen";
  const z = document.createElement("div");
  z.className = "success-icon", z.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
    </svg>
  `;
  const b = document.createElement("h3");
  b.className = "success-title", b.textContent = "Vielen Dank!";
  const j = document.createElement("p");
  j.className = "success-message", j.textContent = "Wir werden Sie in Kürze unter der angegebenen Nummer kontaktieren.";
  const T = document.createElement("div");
  T.className = "powered-by";
  const B = document.createElement("a");
  return B.href = "https://hallopetra.com", B.target = "_blank", B.textContent = "HalloPetra", T.appendChild(document.createTextNode("Bereitgestellt von ")), T.appendChild(B), h.appendChild(z), h.appendChild(b), h.appendChild(j), h.appendChild(T), l.appendChild(x), l.appendChild(g), l.appendChild(h), document.body.appendChild(e), document.body.appendChild(f), document.body.appendChild(l), {
    widgetBtn: e,
    popup: l,
    closeBtn: x,
    form: d,
    nameInput: m,
    phoneInput: n,
    countrySelect: C,
    submitBtn: o,
    nameGroup: p,
    phoneGroup: a,
    speechBubble: f,
    contactFormContainer: g,
    successScreen: h
  };
}
function F(t, e) {
  const {
    widgetBtn: r,
    popup: i,
    closeBtn: f,
    form: l,
    nameInput: x,
    phoneInput: g,
    countrySelect: E,
    submitBtn: N,
    nameGroup: d,
    phoneGroup: p,
    speechBubble: w,
    contactFormContainer: m,
    successScreen: L
  } = t;
  let a = !1;
  setTimeout(function() {
    w.classList.add("show"), document.addEventListener("click", function n() {
      w.classList.remove("show"), document.removeEventListener("click", n);
    }), setTimeout(function() {
      w.classList.remove("show");
    }, 3e4);
  }, 5e3), r.addEventListener("click", function() {
    i.style.display = "block", w.classList.remove("show");
  }), f.addEventListener("click", function() {
    i.style.display = "none", S();
  });
  function S() {
    l.reset(), a = !1, k(), m.style.display = "block", L.style.display = "none";
  }
  function v() {
    const n = x.value.trim(), u = d.querySelector(".error-message");
    return n.length < 2 ? (a && (d.classList.add("invalid"), u.textContent = "Bitte geben Sie einen gültigen Namen ein."), !1) : (d.classList.remove("invalid"), u.textContent = "", !0);
  }
  function C() {
    const n = E.value, u = g.value.trim(), c = p.querySelector(".error-message"), s = u.replace(/\D/g, "");
    let y = !1, o = "";
    return s.length === 0 ? o = "Bitte geben Sie eine Telefonnummer ein." : n === "+49" && (s.length < 10 || s.length > 11) ? o = "Deutsche Telefonnummern müssen 10-11 Ziffern haben." : n === "+43" && (s.length < 9 || s.length > 10) ? o = "Österreichische Telefonnummern müssen 9-10 Ziffern haben." : n === "+41" && s.length !== 9 ? o = "Schweizer Telefonnummern müssen 9 Ziffern haben." : y = !0, y ? (p.classList.remove("invalid"), c.textContent = "", !0) : (a && (p.classList.add("invalid"), c.textContent = o), !1);
  }
  function k() {
    const n = v(), u = C();
    N.disabled = !(n && u);
  }
  x.addEventListener("input", k), g.addEventListener("input", k), E.addEventListener("change", k), l.addEventListener("submit", function(n) {
    n.preventDefault(), a = !0;
    const u = v(), c = C();
    if (!u || !c)
      return;
    const s = x.value.trim(), y = E.value, o = g.value.trim().replace(/\D/g, ""), h = `${y}${o}`, z = {
      companyId: e.companyId || "default",
      name: s,
      phone: h
    };
    fetch("https://martin-desired-ringtail.ngrok-free.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(z)
    }).then((b) => {
      if (!b.ok)
        throw new Error("Network response was not ok");
      return b.json();
    }).then((b) => {
      console.log("Success:", b), typeof e.onSubmit == "function" && e.onSubmit({ name: s, phoneNumber: h, response: b }), m.style.display = "none", L.style.display = "block";
    }).catch((b) => {
      console.error("Error submitting form:", b), m.style.display = "none", L.style.display = "block";
    }), a = !1, l.reset(), k();
  }), k();
}
function M(t = {}) {
  D();
  const e = A(t);
  return F(e, t), {
    // Show the popup programmatically
    showPopup: () => {
      e.popup.style.display = "block", e.speechBubble.classList.remove("show");
    },
    // Hide the popup programmatically
    hidePopup: () => {
      e.popup.style.display = "none";
    },
    // Show speech bubble programmatically
    showSpeechBubble: () => {
      e.speechBubble.classList.add("show");
    },
    // Hide speech bubble programmatically
    hideSpeechBubble: () => {
      e.speechBubble.classList.remove("show");
    },
    // Update widget configuration
    updateConfig: (r) => {
      r.speechBubbleText && (e.speechBubble.textContent = r.speechBubbleText);
    }
  };
}
window.ContactWidget = {
  init: M
};
document.addEventListener("DOMContentLoaded", () => {
  const t = document.querySelector("script[data-contact-widget-auto-init]");
  if (t) {
    const e = {};
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
      "companyId"
    ].forEach((i) => {
      const f = `data-${i.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      t.hasAttribute(f) && (e[i] = t.getAttribute(f));
    }), M(e);
  }
});
