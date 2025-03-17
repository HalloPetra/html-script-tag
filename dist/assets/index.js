(function(B,W){typeof exports=="object"&&typeof module<"u"?module.exports=W():typeof define=="function"&&define.amd?define(W):(B=typeof globalThis<"u"?globalThis:B||self,B.ContactWidget=W())})(this,function(){"use strict";window.contactWidgetConfig=window.contactWidgetConfig||{},window.contactWidgetConfig.apiUrl=window.contactWidgetConfig.apiUrl||"https://api.hallopetra.de/api/web-widget/request-call",window.configureContactWidget=function(t){window.contactWidgetConfig={...window.contactWidgetConfig,...t}};function B(){const t=document.createElement("link");t.rel="preconnect",t.href="https://fonts.googleapis.com";const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.gstatic.com",e.crossOrigin="anonymous";const d=document.createElement("link");d.rel="stylesheet",d.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",document.head.appendChild(t),document.head.appendChild(e),document.head.appendChild(d);const g=document.createElement("style");g.innerHTML=`
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
  `,document.head.appendChild(g)}function W(t){const e=document.createElement("button");e.id="contact-widget-btn",e.className="contact-widget-btn";const d=document.createElement("div");d.className="contact-widget-logo-container";const g=document.createElement("img");g.src=t.logoSrc||"https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/assets/logo.png",g.alt="Petra",d.appendChild(g),e.appendChild(d);const E=document.createElement("div");E.id="speech-bubble",E.className="speech-bubble",E.textContent=t.speechBubbleText||"Wie darf ich Ihnen helfen?";const l=document.createElement("div");l.id="contact-popup",l.className="contact-popup";const x=document.createElement("button");x.id="close-popup",x.className="close-btn",x.textContent="×";const f=document.createElement("div");f.id="contact-form-container";const N=document.createElement("h3");N.textContent=t.formTitle||"Wir rufen Sie zurück";const j=document.createElement("p");j.className="contact-popup-description",j.textContent=t.formDescription||"Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren.";const p=document.createElement("form");p.id="contact-form";const u=document.createElement("div");u.className="form-group",u.id="name-group";const y=document.createElement("label");y.htmlFor="name",y.textContent=t.nameLabel||"Name";const s=document.createElement("input");s.type="text",s.id="name",s.name="name",s.placeholder=t.namePlaceholder||"Ihr Name",s.required=!0;const b=document.createElement("div");b.className="error-message",u.appendChild(y),u.appendChild(s),u.appendChild(b);const a=document.createElement("div");a.className="form-group",a.id="phone-group";const M=document.createElement("label");M.htmlFor="phone",M.textContent=t.phoneLabel||"Telefonnummer";const k=document.createElement("div");k.className="phone-input-container";const C=document.createElement("select");C.id="country-code",C.className="country-select",[{code:"+49",emoji:"🇩🇪",name:"Deutschland"},{code:"+43",emoji:"🇦🇹",name:"Österreich"},{code:"+41",emoji:"🇨🇭",name:"Schweiz"}].forEach(I=>{const v=document.createElement("option");v.value=I.code,v.textContent=`${I.emoji} ${I.code}`,v.title=I.name,C.appendChild(v)});const n=document.createElement("input");n.type="tel",n.id="phone",n.name="phone",n.placeholder=t.phonePlaceholder||"Ihre Telefonnummer",n.className="phone-input",n.required=!0;const m=document.createElement("div");m.className="error-message",k.appendChild(C),k.appendChild(n),a.appendChild(M),a.appendChild(k),a.appendChild(m);const c=document.createElement("div");c.className="compliance-text";const i=document.createElement("a");i.href=t.agbUrl||"https://example.com/agb",i.target="_blank",i.textContent="AGB";const w=document.createElement("a");w.href=t.datenschutzUrl||"https://example.com/datenschutz",w.target="_blank",w.textContent="Datenschutzbedingungen",c.innerHTML="Mit dem Absenden stimmen Sie unseren ",c.appendChild(i),c.appendChild(document.createTextNode(" und ")),c.appendChild(w),c.appendChild(document.createTextNode(" zu."));const o=document.createElement("button");o.type="submit",o.className="submit-btn",o.id="submit-btn",o.textContent=t.submitText||"Anruf bekommen",o.disabled=!0,p.appendChild(u),p.appendChild(a),p.appendChild(c),p.appendChild(o),f.appendChild(N),f.appendChild(j),f.appendChild(p);const h=document.createElement("div");h.id="success-screen",h.className="success-screen";const z=document.createElement("div");z.className="success-icon",z.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
    </svg>
  `;const P=document.createElement("h3");P.className="success-title",P.textContent="Vielen Dank!";const T=document.createElement("p");T.className="success-message",T.textContent="Wir werden Sie in Kürze unter der angegebenen Nummer kontaktieren.";const S=document.createElement("div");S.className="powered-by";const r=document.createElement("a");return r.href="https://hallopetra.com",r.target="_blank",r.textContent="HalloPetra",S.appendChild(document.createTextNode("Bereitgestellt von ")),S.appendChild(r),h.appendChild(z),h.appendChild(P),h.appendChild(T),h.appendChild(S),l.appendChild(x),l.appendChild(f),l.appendChild(h),document.body.appendChild(e),document.body.appendChild(E),document.body.appendChild(l),{widgetBtn:e,popup:l,closeBtn:x,form:p,nameInput:s,phoneInput:n,countrySelect:C,submitBtn:o,nameGroup:u,phoneGroup:a,speechBubble:E,contactFormContainer:f,successScreen:h}}function A(t,e){const{widgetBtn:d,popup:g,closeBtn:E,form:l,nameInput:x,phoneInput:f,countrySelect:N,submitBtn:j,nameGroup:p,phoneGroup:u,speechBubble:y,contactFormContainer:s,successScreen:b}=t;let a=!1;setTimeout(function(){y.classList.add("show"),document.addEventListener("click",function n(){y.classList.remove("show"),document.removeEventListener("click",n)}),setTimeout(function(){y.classList.remove("show")},3e4)},5e3),d.addEventListener("click",function(){g.style.display="block",y.classList.remove("show")}),E.addEventListener("click",function(){g.style.display="none",M()});function M(){l.reset(),a=!1,L(),s.style.display="block",b.style.display="none"}function k(){const n=x.value.trim(),m=p.querySelector(".error-message");return n.length<2?(a&&(p.classList.add("invalid"),m.textContent="Bitte geben Sie einen gültigen Namen ein."),!1):(p.classList.remove("invalid"),m.textContent="",!0)}function C(){const n=N.value,m=f.value.trim(),c=u.querySelector(".error-message"),i=m.replace(/\D/g,"");let w=!1,o="";return i.length===0?o="Bitte geben Sie eine Telefonnummer ein.":n==="+49"&&(i.length<10||i.length>11)?o="Deutsche Telefonnummern müssen 10-11 Ziffern haben.":n==="+43"&&(i.length<9||i.length>10)?o="Österreichische Telefonnummern müssen 9-10 Ziffern haben.":n==="+41"&&i.length!==9?o="Schweizer Telefonnummern müssen 9 Ziffern haben.":w=!0,w?(u.classList.remove("invalid"),c.textContent="",!0):(a&&(u.classList.add("invalid"),c.textContent=o),!1)}function L(){const n=k(),m=C();j.disabled=!(n&&m)}x.addEventListener("input",L),f.addEventListener("input",L),N.addEventListener("change",L),l.addEventListener("submit",function(n){var T,S;n.preventDefault(),a=!0;const m=k(),c=C();if(!m||!c)return;const i=x.value.trim(),w=N.value,o=f.value.trim().replace(/\D/g,""),h=`${w}${o}`,z={companyRecordId:((T=window.contactWidgetConfig)==null?void 0:T.companyRecordId)||e.companyRecordId,name:i,phone:h};if(!z.companyRecordId){console.error("Error: companyRecordId is not set. Please configure the widget with a valid companyRecordId."),s.style.display="none",b.style.display="block";const r=b.querySelector(".success-title"),I=b.querySelector(".success-message"),v=b.querySelector(".success-icon svg");r.textContent="Konfigurationsfehler",I.textContent="Das Widget wurde nicht korrekt konfiguriert. Bitte kontaktieren Sie den Website-Administrator.",v.innerHTML='<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />',v.parentElement.style.backgroundColor="#FEE2E2",v.style.color="#EF4444";return}const P=((S=window.contactWidgetConfig)==null?void 0:S.apiUrl)||"https://api.hallopetra.de/api/web-widget/request-call";fetch(P,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(z)}).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{console.log("Success:",r),typeof e.onSubmit=="function"&&e.onSubmit({name:i,phoneNumber:h,response:r}),s.style.display="none",b.style.display="block"}).catch(r=>{console.error("Error submitting form:",r),s.style.display="none",b.style.display="block"}),a=!1,l.reset(),L()}),L()}function D(t={}){B();const e=W(t);return A(e,t),{showPopup:function(){e.popup.style.display="block"},hidePopup:function(){e.popup.style.display="none"},showSpeechBubble:function(){e.speechBubble.classList.add("show")},hideSpeechBubble:function(){e.speechBubble.classList.remove("show")},updateConfig:function(d){Object.assign(t,d)}}}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('script[src*="contact-widget"]').forEach(e=>{e.hasAttribute("data-contact-widget-auto-init")&&(e.hasAttribute("data-company-record-id")&&(window.contactWidgetConfig.companyRecordId=e.getAttribute("data-company-record-id")),e.hasAttribute("data-api-url")&&(window.contactWidgetConfig.apiUrl=e.getAttribute("data-api-url")),D())})});const q={init:D};return window.ContactWidget=q,q});
