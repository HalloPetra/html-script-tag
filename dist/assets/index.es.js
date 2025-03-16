function z() {
  const t = document.createElement("link");
  t.rel = "preconnect", t.href = "https://fonts.googleapis.com";
  const e = document.createElement("link");
  e.rel = "preconnect", e.href = "https://fonts.gstatic.com", e.crossOrigin = "anonymous";
  const a = document.createElement("link");
  a.rel = "stylesheet", a.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap", document.head.appendChild(t), document.head.appendChild(e), document.head.appendChild(a);
  const n = document.createElement("style");
  n.innerHTML = `
    .contact-widget-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      width: fit-content;
      padding: 12px 20px;
      background-color: #E1EFFE;
      color: #1e293b;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      font-size: 18px;
      font-weight: 700;
      font-family: 'Inter', sans-serif;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      z-index: 9999;
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
      width: 36px;
      height: 36px;
      background-color: white;
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .contact-widget-btn img {
      width: 28px;
      height: 28px;
    }

    .contact-popup {
      display: none;
      position: fixed;
      bottom: 80px;
      right: 20px;
      background: white;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
      border-radius: 12px;
      padding: 24px;
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
      width: 120px;
      padding: 10px 12px;
      font-size: 14px;
      font-family: 'Inter', sans-serif;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      background-color: #f8fafc;
      transition: all 0.2s ease;
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
  `, document.head.appendChild(n);
}
function S(t) {
  const e = document.createElement("button");
  e.id = "contact-widget-btn", e.className = "contact-widget-btn";
  const a = document.createElement("div");
  a.className = "contact-widget-logo-container";
  const n = document.createElement("img");
  n.src = t.logoSrc || "https://cdn.jsdelivr.net/gh/yourusername/contact-widget@latest/assets/logo.png", n.alt = "Logo", a.appendChild(n);
  const y = document.createTextNode(t.buttonText || "Kontakt");
  e.appendChild(a), e.appendChild(y);
  const s = document.createElement("div");
  s.id = "contact-popup", s.className = "contact-popup";
  const p = document.createElement("button");
  p.id = "close-popup", p.className = "close-btn", p.textContent = "×";
  const E = document.createElement("h3");
  E.textContent = t.formTitle || "Wir rufen Sie zurück";
  const b = document.createElement("p");
  b.className = "contact-popup-description", b.textContent = t.formDescription || "Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren.";
  const m = document.createElement("form");
  m.id = "contact-form";
  const d = document.createElement("div");
  d.className = "form-group", d.id = "name-group";
  const g = document.createElement("label");
  g.htmlFor = "name", g.textContent = t.nameLabel || "Name";
  const u = document.createElement("input");
  u.type = "text", u.id = "name", u.name = "name", u.placeholder = t.namePlaceholder || "Ihr Name", u.required = !0;
  const w = document.createElement("div");
  w.className = "error-message", d.appendChild(g), d.appendChild(u), d.appendChild(w);
  const i = document.createElement("div");
  i.className = "form-group", i.id = "phone-group";
  const c = document.createElement("label");
  c.htmlFor = "phone", c.textContent = t.phoneLabel || "Telefonnummer";
  const o = document.createElement("div");
  o.className = "phone-input-container";
  const l = document.createElement("select");
  l.id = "country-code", l.className = "country-select", [
    { code: "+49", emoji: "🇩🇪", name: "Deutschland" },
    { code: "+43", emoji: "🇦🇹", name: "Österreich" },
    { code: "+41", emoji: "🇨🇭", name: "Schweiz" }
  ].forEach((N) => {
    const L = document.createElement("option");
    L.value = N.code, L.textContent = `${N.emoji} ${N.code}`, L.title = N.name, l.appendChild(L);
  });
  const r = document.createElement("input");
  r.type = "tel", r.id = "phone", r.name = "phone", r.placeholder = t.phonePlaceholder || "Ihre Telefonnummer", r.className = "phone-input", r.required = !0;
  const f = document.createElement("div");
  f.className = "error-message", o.appendChild(l), o.appendChild(r), i.appendChild(c), i.appendChild(o), i.appendChild(f);
  const x = document.createElement("div");
  x.className = "compliance-text";
  const v = document.createElement("a");
  v.href = t.agbUrl || "https://example.com/agb", v.target = "_blank", v.textContent = "AGB";
  const k = document.createElement("a");
  k.href = t.datenschutzUrl || "https://example.com/datenschutz", k.target = "_blank", k.textContent = "Datenschutzbedingungen", x.innerHTML = "Mit dem Absenden stimmen Sie unseren ", x.appendChild(v), x.appendChild(document.createTextNode(" und ")), x.appendChild(k), x.appendChild(document.createTextNode(" zu."));
  const C = document.createElement("button");
  return C.type = "submit", C.className = "submit-btn", C.id = "submit-btn", C.textContent = t.submitText || "Anruf bekommen", C.disabled = !0, m.appendChild(d), m.appendChild(i), m.appendChild(x), m.appendChild(C), s.appendChild(p), s.appendChild(E), s.appendChild(b), s.appendChild(m), document.body.appendChild(e), document.body.appendChild(s), {
    widgetBtn: e,
    popup: s,
    closeBtn: p,
    form: m,
    nameInput: u,
    phoneInput: r,
    countrySelect: l,
    submitBtn: C,
    nameGroup: d,
    phoneGroup: i
  };
}
function I(t, e) {
  const {
    widgetBtn: a,
    popup: n,
    closeBtn: y,
    form: s,
    nameInput: p,
    phoneInput: E,
    countrySelect: b,
    submitBtn: m,
    nameGroup: d,
    phoneGroup: g
  } = t;
  a.addEventListener("click", function() {
    n.style.display = "block";
  }), y.addEventListener("click", function() {
    n.style.display = "none";
  });
  function u() {
    const c = p.value.trim(), o = d.querySelector(".error-message");
    return c.length < 2 ? (d.classList.add("invalid"), o.textContent = "Bitte geben Sie einen gültigen Namen ein.", !1) : (d.classList.remove("invalid"), o.textContent = "", !0);
  }
  function w() {
    const c = b.value, o = E.value.trim(), l = g.querySelector(".error-message"), h = o.replace(/\D/g, "");
    let r = !1, f = "";
    return h.length === 0 ? f = "Bitte geben Sie eine Telefonnummer ein." : c === "+49" && (h.length < 10 || h.length > 11) ? f = "Deutsche Telefonnummern müssen 10-11 Ziffern haben." : c === "+43" && (h.length < 9 || h.length > 10) ? f = "Österreichische Telefonnummern müssen 9-10 Ziffern haben." : c === "+41" && h.length !== 9 ? f = "Schweizer Telefonnummern müssen 9 Ziffern haben." : r = !0, r ? (g.classList.remove("invalid"), l.textContent = "", !0) : (g.classList.add("invalid"), l.textContent = f, !1);
  }
  function i() {
    const c = u(), o = w();
    m.disabled = !(c && o);
  }
  p.addEventListener("input", i), E.addEventListener("input", i), b.addEventListener("change", i), s.addEventListener("submit", function(c) {
    c.preventDefault();
    const o = p.value.trim(), l = b.value, h = E.value.trim().replace(/\D/g, ""), r = `${l}${h}`;
    typeof e.onSubmit == "function" && e.onSubmit({ name: o, phoneNumber: r }), console.log("Call request submitted:", { name: o, phoneNumber: r }), alert(e.successMessage || "Vielen Dank! Wir werden Sie in Kürze kontaktieren."), n.style.display = "none", s.reset(), i();
  }), i();
}
function T(t = {}) {
  z();
  const e = S(t);
  return I(e, t), {
    // Show the popup programmatically
    showPopup: () => {
      e.popup.style.display = "block";
    },
    // Hide the popup programmatically
    hidePopup: () => {
      e.popup.style.display = "none";
    },
    // Update widget configuration
    updateConfig: (a) => {
      a.buttonText && (e.widgetBtn.childNodes.forEach((n) => {
        n.nodeType === Node.TEXT_NODE && e.widgetBtn.removeChild(n);
      }), e.widgetBtn.appendChild(document.createTextNode(a.buttonText)));
    }
  };
}
window.ContactWidget = {
  init: T
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
      "datenschutzUrl"
    ].forEach((n) => {
      const y = `data-${n.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      t.hasAttribute(y) && (e[n] = t.getAttribute(y));
    }), T(e);
  }
});
