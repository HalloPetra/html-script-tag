(function(I){typeof define=="function"&&define.amd?define(I):I()})(function(){"use strict";function I(){const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com";const t=document.createElement("link");t.rel="preconnect",t.href="https://fonts.gstatic.com",t.crossOrigin="anonymous";const s=document.createElement("link");s.rel="stylesheet",s.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",document.head.appendChild(e),document.head.appendChild(t),document.head.appendChild(s);const o=document.createElement("style");o.innerHTML=`
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
  `,document.head.appendChild(o)}function j(e){const t=document.createElement("button");t.id="contact-widget-btn",t.className="contact-widget-btn";const s=document.createElement("div");s.className="contact-widget-logo-container";const o=document.createElement("img");o.src=e.logoSrc||"https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/assets/logo.png",o.alt="Petra",s.appendChild(o),t.appendChild(s);const a=document.createElement("div");a.id="speech-bubble",a.className="speech-bubble",a.textContent=e.speechBubbleText||"Wie darf ich Ihnen helfen?";const r=document.createElement("div");r.id="contact-popup",r.className="contact-popup";const g=document.createElement("button");g.id="close-popup",g.className="close-btn",g.textContent="×";const i=document.createElement("div");i.id="contact-form-container";const T=document.createElement("h3");T.textContent=e.formTitle||"Wir werden rufen Sie zurück";const v=document.createElement("p");v.className="contact-popup-description",v.textContent=e.formDescription||"Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren.";const x=document.createElement("form");x.id="contact-form";const p=document.createElement("div");p.className="form-group",p.id="name-group";const w=document.createElement("label");w.htmlFor="name",w.textContent=e.nameLabel||"Name";const C=document.createElement("input");C.type="text",C.id="name",C.name="name",C.placeholder=e.namePlaceholder||"Ihr Name",C.required=!0;const S=document.createElement("div");S.className="error-message",p.appendChild(w),p.appendChild(C),p.appendChild(S);const h=document.createElement("div");h.className="form-group",h.id="phone-group";const B=document.createElement("label");B.htmlFor="phone",B.textContent=e.phoneLabel||"Telefonnummer";const k=document.createElement("div");k.className="phone-input-container";const E=document.createElement("select");E.id="country-code",E.className="country-select",[{code:"+49",emoji:"🇩🇪",name:"Deutschland"},{code:"+43",emoji:"🇦🇹",name:"Österreich"},{code:"+41",emoji:"🇨🇭",name:"Schweiz"}].forEach(M=>{const P=document.createElement("option");P.value=M.code,P.textContent=`${M.emoji} ${M.code}`,P.title=M.name,E.appendChild(P)});const u=document.createElement("input");u.type="tel",u.id="phone",u.name="phone",u.placeholder=e.phonePlaceholder||"Ihre Telefonnummer",u.className="phone-input",u.required=!0;const n=document.createElement("div");n.className="error-message",k.appendChild(E),k.appendChild(u),h.appendChild(B),h.appendChild(k),h.appendChild(n);const c=document.createElement("div");c.className="compliance-text";const y=document.createElement("a");y.href=e.agbUrl||"https://example.com/agb",y.target="_blank",y.textContent="AGB";const l=document.createElement("a");l.href=e.datenschutzUrl||"https://example.com/datenschutz",l.target="_blank",l.textContent="Datenschutzbedingungen",c.innerHTML="Mit dem Absenden stimmen Sie unseren ",c.appendChild(y),c.appendChild(document.createTextNode(" und ")),c.appendChild(l),c.appendChild(document.createTextNode(" zu."));const d=document.createElement("button");d.type="submit",d.className="submit-btn",d.id="submit-btn",d.textContent=e.submitText||"Anruf bekommen",d.disabled=!0,x.appendChild(p),x.appendChild(h),x.appendChild(c),x.appendChild(d),i.appendChild(T),i.appendChild(v),i.appendChild(x);const b=document.createElement("div");b.id="success-screen",b.className="success-screen";const f=document.createElement("div");f.className="success-icon",f.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
    </svg>
  `;const L=document.createElement("h3");L.className="success-title",L.textContent=e.successTitle||"Vielen Dank!";const z=document.createElement("p");z.className="success-message",z.textContent=e.successMessage||"Wir werden Sie in Kürze unter der angegebenen Nummer kontaktieren.";const m=document.createElement("div");m.className="powered-by";const N=document.createElement("a");return N.href="https://hallopetra.com",N.target="_blank",N.textContent="HalloPetra",m.appendChild(document.createTextNode("Bereitgestellt von ")),m.appendChild(N),b.appendChild(f),b.appendChild(L),b.appendChild(z),b.appendChild(m),r.appendChild(g),r.appendChild(i),r.appendChild(b),document.body.appendChild(t),document.body.appendChild(a),document.body.appendChild(r),{widgetBtn:t,popup:r,closeBtn:g,form:x,nameInput:C,phoneInput:u,countrySelect:E,submitBtn:d,nameGroup:p,phoneGroup:h,speechBubble:a,contactFormContainer:i,successScreen:b}}function q(e,t){const{widgetBtn:s,popup:o,closeBtn:a,form:r,nameInput:g,phoneInput:i,countrySelect:T,submitBtn:v,nameGroup:x,phoneGroup:p,speechBubble:w,contactFormContainer:C,successScreen:S}=e;let h=!1;setTimeout(function(){w.classList.add("show"),document.addEventListener("click",function n(){w.classList.remove("show"),document.removeEventListener("click",n)}),setTimeout(function(){w.classList.remove("show")},3e4)},5e3),s.addEventListener("click",function(){o.style.display="block",w.classList.remove("show")}),a.addEventListener("click",function(){o.style.display="none",B()});function B(){r.reset(),h=!1,u(),C.style.display="block",S.style.display="none"}function k(){const n=g.value.trim(),c=x.querySelector(".error-message");return n.length<2?(h&&(x.classList.add("invalid"),c.textContent="Bitte geben Sie einen gültigen Namen ein."),!1):(x.classList.remove("invalid"),c.textContent="",!0)}function E(){const n=T.value,c=i.value.trim(),y=p.querySelector(".error-message");let l=c.replace(/[\s-]/g,"");l.startsWith("0")&&(l=l.substring(1),i.value=l);const d=l.replace(/\D/g,"");let b=!1,f="";return d.length===0?f="Bitte geben Sie eine Telefonnummer ein.":n==="+49"&&(d.length<10||d.length>11)?f="Deutsche Telefonnummern müssen 10-11 Ziffern haben.":n==="+43"&&(d.length<9||d.length>10)?f="Österreichische Telefonnummern müssen 9-10 Ziffern haben.":n==="+41"&&d.length!==9?f="Schweizer Telefonnummern müssen 9 Ziffern haben.":b=!0,b?(p.classList.remove("invalid"),y.textContent="",!0):(h&&(p.classList.add("invalid"),y.textContent=f),!1)}function A(){let n=i.value;const c=n;if(n=n.replace(/[\s-]/g,""),n.startsWith("0")&&(n=n.substring(1)),n!==c&&n.length>0){i.value=n;const y=i.style.backgroundColor,l=i.style.transition;i.style.transition="background-color 0.5s ease",i.style.backgroundColor="#eef7ff",setTimeout(()=>{i.style.backgroundColor=y,setTimeout(()=>{i.style.transition=l},500)},500)}return n}function u(){const n=k(),c=E();v.disabled=!(n&&c)}g.addEventListener("input",u),i.addEventListener("input",function(){A(),u()}),T.addEventListener("change",u),r.addEventListener("submit",function(n){n.preventDefault(),h=!0,A();const c=k(),y=E();if(!c||!y)return;if(!t.customerId){const m=p.querySelector(".error-message");p.classList.add("invalid"),m.textContent="Konfigurationsfehler: Keine Kunden-ID vorhanden.",console.error("ContactWidget: customerId is required but was not provided in the configuration");return}const l=g.value.trim(),d=T.value,b=i.value.trim().replace(/\D/g,""),f=`${d}${b}`;v.disabled=!0,v.textContent="Wird gesendet...";const L=new AbortController,z=setTimeout(()=>L.abort(),1e4);fetch(t.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l,phone:f,customerId:t.customerId,url:window.location.href,userAgent:navigator.userAgent,greetingText:t.greetingText}),signal:L.signal}).then(m=>{if(!m.ok)throw new Error("Server responded with an error");return m.json()}).then(m=>{console.log("Call request successfully sent to server:",m),typeof t.onSubmit=="function"&&t.onSubmit({name:l,phoneNumber:f,success:!0}),C.style.display="none",S.style.display="block"}).catch(m=>{console.error("Error sending call request:",m),typeof t.onSubmit=="function"&&t.onSubmit({name:l,phoneNumber:f,success:!1,error:m});const N=p.querySelector(".error-message");p.classList.add("invalid"),N.textContent="Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."}).finally(()=>{clearTimeout(z),v.disabled=!1,v.textContent=t.submitText||"Anruf bekommen",h=!1,S.style.display==="block"&&(r.reset(),u())})}),u()}function F(e={}){e.apiUrl=e.apiUrl||"https://api.hallopetra.de/api/web-widget/request-call";const t=!e.customerId;I();const s=j(e);if(t){const o=s.contactFormContainer,a=s.form,r=document.createElement("div");r.style.backgroundColor="#FEF2F2",r.style.color="#B91C1C",r.style.padding="10px",r.style.borderRadius="8px",r.style.margin="0 0 16px 0",r.style.fontSize="14px",r.style.fontWeight="500",r.style.textAlign="center",r.textContent="Konfigurationsfehler: Keine Kunden-ID vorhanden.",o.insertBefore(r,o.firstChild),a.onsubmit=function(g){return g.preventDefault(),!1}}return q(s,e),{showPopup:()=>{s.popup.style.display="block",s.speechBubble.classList.remove("show")},hidePopup:()=>{s.popup.style.display="none"},showSpeechBubble:()=>{s.speechBubble.classList.add("show")},hideSpeechBubble:()=>{s.speechBubble.classList.remove("show")},updateConfig:o=>{if(o.speechBubbleText&&(s.speechBubble.textContent=o.speechBubbleText),o.successTitle){const a=s.successScreen.querySelector(".success-title");a&&(a.textContent=o.successTitle)}if(o.successMessage){const a=s.successScreen.querySelector(".success-message");a&&(a.textContent=o.successMessage)}o.greetingText&&(e.greetingText=o.greetingText)}}}window.ContactWidget={init:F},document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("script[data-contact-widget-auto-init]");if(e){const t={};["buttonText","formTitle","nameLabel","phoneLabel","submitText","successMessage","namePlaceholder","phonePlaceholder","logoSrc","formDescription","agbUrl","datenschutzUrl","speechBubbleText","apiUrl","customerId","successTitle","greetingText"].forEach(o=>{const a=`data-${o.replace(/([A-Z])/g,"-$1").toLowerCase()}`;e.hasAttribute(a)&&(t[o]=e.getAttribute(a))}),F(t)}})});
