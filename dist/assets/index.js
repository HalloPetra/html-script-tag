(function($){typeof define=="function"&&define.amd?define($):$()})(function(){"use strict";function $(e=!1){if(!e){const s=document.createElement("link");s.rel="preconnect",s.href="https://fonts.googleapis.com";const l=document.createElement("link");l.rel="preconnect",l.href="https://fonts.gstatic.com",l.crossOrigin="anonymous";const o=document.createElement("link");o.rel="stylesheet",o.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",document.head.appendChild(s),document.head.appendChild(l),document.head.appendChild(o)}const t=e?'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"':"'Inter', sans-serif",c=document.createElement("style");c.innerHTML=`
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
      font-family: ${t};
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
      font-family: ${t};
      z-index: 9999;
    }

    .contact-popup h3 {
      margin-top: 0;
      margin-bottom: 8px;
      color: #1e293b;
      font-size: 18px;
      font-weight: 600;
      font-family: ${t};
    }

    .contact-popup-description {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 14px;
      color: #64748b;
      line-height: 1.4;
      font-family: ${t};
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
      font-family: ${t};
    }

    .form-group input {
      width: 100%;
      padding: 10px 12px;
      font-size: 14px;
      font-family: ${t};
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
      font-family: ${t};
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
      font-family: ${t};
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
      font-family: ${t};
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
      font-family: ${t};
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
  `,document.head.appendChild(c)}function V(e){const t=document.createElement("button");t.id="contact-widget-btn",t.className="contact-widget-btn";const c=document.createElement("div");c.className="contact-widget-logo-container";const s=document.createElement("img");s.src=e.logoSrc||"https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/assets/logo.png",s.alt="Petra",c.appendChild(s),t.appendChild(c);const l=document.createElement("div");l.id="speech-bubble",l.className="speech-bubble",l.textContent=e.speechBubbleText||"Wie darf ich Ihnen helfen?";const o=document.createElement("div");o.id="contact-popup",o.className="contact-popup";const E=document.createElement("button");E.id="close-popup",E.className="close-btn",E.textContent="×";const p=document.createElement("div");p.id="contact-form-container";const z=document.createElement("h3");z.textContent=e.formTitle||"Wir rufen Sie zurück";const L=document.createElement("p");L.className="contact-popup-description",L.textContent=e.formDescription||"Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren.";const x=document.createElement("form");x.id="contact-form";const f=document.createElement("div");f.className="form-group",f.id="name-group";const N=document.createElement("label");N.htmlFor="name",N.textContent=e.nameLabel||"Name";const k=document.createElement("input");k.type="text",k.id="name",k.name="name",k.placeholder=e.namePlaceholder||"Ihr Name",k.required=!0;const F=document.createElement("div");F.className="error-message",f.appendChild(N),f.appendChild(k),f.appendChild(F);const d=document.createElement("div");d.className="form-group",d.id="phone-group";const m=document.createElement("label");m.htmlFor="phone",m.textContent=e.phoneLabel||"Telefonnummer";const y=document.createElement("div");y.className="phone-input-container";const I=document.createElement("select");I.id="country-code",I.className="country-select",[{code:"+49",emoji:"🇩🇪",name:"Deutschland"},{code:"+43",emoji:"🇦🇹",name:"Österreich"},{code:"+41",emoji:"🇨🇭",name:"Schweiz"}].forEach(a=>{const r=document.createElement("option");r.value=a.code,r.textContent=`${a.emoji} ${a.code}`,r.title=a.name,I.appendChild(r)});const w=document.createElement("input");w.type="tel",w.id="phone",w.name="phone",w.placeholder=e.phonePlaceholder||"Ihre Telefonnummer",w.className="phone-input",w.required=!0;const M=document.createElement("div");M.className="error-message",y.appendChild(I),y.appendChild(w),d.appendChild(m),d.appendChild(y),d.appendChild(M);const B=[],P={element:null,input:null},v={element:null,input:null};e.extraInputFields&&Array.isArray(e.extraInputFields)&&e.extraInputFields.forEach(a=>{if(a.type){if(a.type.toLowerCase()==="email"){const r=document.createElement("div");r.className="form-group",r.id="email-group";const b=document.createElement("label");b.htmlFor="email",b.textContent=a.label||e.emailLabel||"E-Mail";const u=document.createElement("input");u.type="email",u.id="email",u.name="email",u.placeholder=a.placeholder||e.emailPlaceholder||"Ihre E-Mail-Adresse",u.required=!!a.required;const q=document.createElement("div");q.className="error-message",r.appendChild(b),r.appendChild(u),r.appendChild(q),B.push({type:"email",element:r,input:u,required:!!a.required}),P.element=r,P.input=u}else if(a.type.toLowerCase()==="address"){const r=document.createElement("div");r.className="form-group",r.id="address-group";const b=document.createElement("label");b.htmlFor="address",b.textContent=a.label||e.addressLabel||"Adresse";const u=document.createElement("input");u.type="text",u.id="address",u.name="address",u.placeholder=a.placeholder||e.addressPlaceholder||"Ihre Adresse",u.required=!!a.required;const q=document.createElement("div");q.className="error-message",r.appendChild(b),r.appendChild(u),r.appendChild(q),B.push({type:"address",element:r,input:u,required:!!a.required}),v.element=r,v.input=u}}});const n=document.createElement("button");if(n.type="submit",n.className="submit-btn",n.id="submit-btn",n.textContent=e.submitText||"Anruf bekommen",n.disabled=!0,x.appendChild(f),x.appendChild(d),B.forEach(a=>{x.appendChild(a.element)}),e.hintText){const a=document.createElement("div");if(a.className="hint-text",a.textContent=e.hintText,e.hintLinkText&&e.hintLinkUrl){a.appendChild(document.createTextNode(" "));const r=document.createElement("a");r.href=e.hintLinkUrl,r.target="_blank",r.textContent=e.hintLinkText,a.appendChild(r)}x.appendChild(a)}x.appendChild(n),p.appendChild(z),p.appendChild(L),p.appendChild(x);const i=document.createElement("div");i.id="success-screen",i.className="success-screen";const h=document.createElement("div");h.className="success-icon",h.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
    </svg>
  `;const g=document.createElement("h3");g.className="success-title",g.textContent=e.successTitle||"Vielen Dank!";const S=document.createElement("p");S.className="success-message",S.textContent=e.successMessage||"Wir werden Sie in Kürze unter der angegebenen Nummer kontaktieren.";const C=document.createElement("div");C.className="powered-by";const A=document.createElement("a");return A.href="https://hallopetra.de",A.target="_blank",A.textContent="HalloPetra",C.appendChild(document.createTextNode("Bereitgestellt von ")),C.appendChild(A),i.appendChild(h),i.appendChild(g),i.appendChild(S),i.appendChild(C),o.appendChild(E),o.appendChild(p),o.appendChild(i),document.body.appendChild(t),document.body.appendChild(l),document.body.appendChild(o),{widgetBtn:t,popup:o,closeBtn:E,form:x,nameInput:k,phoneInput:w,countrySelect:I,submitBtn:n,nameGroup:f,phoneGroup:d,speechBubble:l,contactFormContainer:p,successScreen:i,extraFields:B,emailGroup:P,addressGroup:v}}function D(e,t){const{widgetBtn:c,popup:s,closeBtn:l,form:o,nameInput:E,phoneInput:p,countrySelect:z,submitBtn:L,nameGroup:x,phoneGroup:f,speechBubble:N,contactFormContainer:k,successScreen:F,emailGroup:d,addressGroup:m}=e;let y=!1;setTimeout(function(){N.classList.add("show"),document.addEventListener("click",function n(){N.classList.remove("show"),document.removeEventListener("click",n)}),setTimeout(function(){N.classList.remove("show")},3e4)},5e3),c.addEventListener("click",function(){s.style.display="block",N.classList.remove("show")}),l.addEventListener("click",function(){s.style.display="none",I()});function I(){o.reset(),y=!1,v(),k.style.display="block",F.style.display="none"}function j(){const n=E.value.trim(),i=x.querySelector(".error-message");return n.length<2?(y&&(x.classList.add("invalid"),i.textContent="Bitte geben Sie einen gültigen Namen ein."),!1):(x.classList.remove("invalid"),i.textContent="",!0)}function w(){if(!d.element||!d.input)return!0;const n=d.input.value.trim(),i=d.element.querySelector(".error-message");return!d.input.required&&n===""||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)?(d.element.classList.remove("invalid"),i.textContent="",!0):(y&&(d.element.classList.add("invalid"),i.textContent="Bitte geben Sie eine gültige E-Mail-Adresse ein."),!1)}function M(){if(!m.element||!m.input)return!0;const n=m.input.value.trim(),i=m.element.querySelector(".error-message");return!m.input.required&&n===""?(m.element.classList.remove("invalid"),i.textContent="",!0):n.length<5?(y&&(m.element.classList.add("invalid"),i.textContent="Bitte geben Sie eine gültige Adresse ein."),!1):(m.element.classList.remove("invalid"),i.textContent="",!0)}function B(){z.value;const n=p.value.trim(),i=f.querySelector(".error-message");let h=n.replace(/[\s-]/g,"");h.startsWith("0")&&(h=h.substring(1),p.value=h);const g=h.replace(/\D/g,"");let S=!1,C="";return g.length===0?C="Bitte geben Sie eine Telefonnummer ein.":g.length<6?C="Telefonnummern müssen mindestens 6 Ziffern haben.":S=!0,S?(f.classList.remove("invalid"),i.textContent="",!0):(y&&(f.classList.add("invalid"),i.textContent=C),!1)}function P(){let n=p.value;const i=n;if(n=n.replace(/[\s-]/g,""),n.startsWith("0")&&(n=n.substring(1)),n!==i&&n.length>0){p.value=n;const h=p.style.backgroundColor,g=p.style.transition;p.style.transition="background-color 0.5s ease",p.style.backgroundColor="#eef7ff",setTimeout(()=>{p.style.backgroundColor=h,setTimeout(()=>{p.style.transition=g},500)},500)}return n}function v(){const n=j(),i=B(),h=w(),g=M();L.disabled=!(n&&i&&h&&g)}E.addEventListener("input",v),p.addEventListener("input",function(){P(),v()}),z.addEventListener("change",v),d.input&&d.input.addEventListener("input",v),m.input&&m.input.addEventListener("input",v),o.addEventListener("submit",function(n){n.preventDefault(),y=!0,P();const i=j(),h=B(),g=w(),S=M();if(!i||!h||!g||!S)return;if(!t.customerId){const T=f.querySelector(".error-message");f.classList.add("invalid"),T.textContent="Konfigurationsfehler: Keine Kunden-ID vorhanden.",console.error("ContactWidget: customerId is required but was not provided in the configuration");return}const C=E.value.trim(),A=z.value,a=p.value.trim().replace(/\D/g,""),r=`${A}${a}`,b={name:C,phone:r,customerId:t.customerId,url:window.location.href,userAgent:navigator.userAgent,greetingText:t.greetingText};t.outgoingPhoneNumber&&(b.outgoingPhoneNumber=t.outgoingPhoneNumber),d.input&&d.input.value.trim()&&(b.email=d.input.value.trim()),m.input&&m.input.value.trim()&&(b.address=m.input.value.trim()),L.disabled=!0,L.textContent="Wird gesendet...";const u=new AbortController,q=setTimeout(()=>u.abort(),1e4);fetch(t.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b),signal:u.signal}).then(T=>{if(!T.ok)throw new Error("Server responded with an error");return T.json()}).then(T=>{console.log("Call request successfully sent to server:",T),typeof t.onSubmit=="function"&&t.onSubmit({name:C,phoneNumber:r,email:b.email,address:b.address,success:!0}),k.style.display="none",F.style.display="block"}).catch(T=>{console.error("Error sending call request:",T),typeof t.onSubmit=="function"&&t.onSubmit({name:C,phoneNumber:r,email:b.email,address:b.address,success:!1,error:T});const U=f.querySelector(".error-message");f.classList.add("invalid"),U.textContent="Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."}).finally(()=>{clearTimeout(q),L.disabled=!1,L.textContent=t.submitText||"Anruf bekommen",y=!1,F.style.display==="block"&&(o.reset(),v())})}),v()}function W(e={}){e.apiUrl=e.apiUrl||"https://api.hallopetra.de/web-widget/request-call";const t=!e.customerId;if(typeof e.extraInputFields=="string")try{e.extraInputFields=JSON.parse(e.extraInputFields)}catch{console.error("ContactWidget: Error parsing extraInputFields. It should be a valid JSON array."),e.extraInputFields=[]}$(e.use_system_font);const c=V(e);if(t){const s=c.contactFormContainer,l=c.form,o=document.createElement("div");o.style.backgroundColor="#FEF2F2",o.style.color="#B91C1C",o.style.padding="10px",o.style.borderRadius="8px",o.style.margin="0 0 16px 0",o.style.fontSize="14px",o.style.fontWeight="500",o.style.textAlign="center",o.textContent="Konfigurationsfehler: Keine Kunden-ID vorhanden.",s.insertBefore(o,s.firstChild),l.onsubmit=function(E){return E.preventDefault(),!1}}return D(c,e),{showPopup:()=>{c.popup.style.display="block",c.speechBubble.classList.remove("show")},hidePopup:()=>{c.popup.style.display="none"},showSpeechBubble:()=>{c.speechBubble.classList.add("show")},hideSpeechBubble:()=>{c.speechBubble.classList.remove("show")},updateConfig:s=>{if(s.speechBubbleText&&(c.speechBubble.textContent=s.speechBubbleText),s.successTitle){const l=c.successScreen.querySelector(".success-title");l&&(l.textContent=s.successTitle)}if(s.successMessage){const l=c.successScreen.querySelector(".success-message");l&&(l.textContent=s.successMessage)}s.greetingText&&(e.greetingText=s.greetingText)}}}window.ContactWidget={init:W},document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("script[data-contact-widget-auto-init]");if(e){const t={};["buttonText","formTitle","nameLabel","phoneLabel","submitText","successMessage","namePlaceholder","phonePlaceholder","logoSrc","formDescription","speechBubbleText","apiUrl","customerId","successTitle","greetingText","extraInputFields","emailLabel","emailPlaceholder","addressLabel","addressPlaceholder","hintText","hintLinkText","hintLinkUrl","outgoingPhoneNumber","use_system_font"].forEach(s=>{const l=`data-${s.replace(/([A-Z])/g,"-$1").toLowerCase()}`;if(e.hasAttribute(l)){const o=e.getAttribute(l);s==="use_system_font"?t[s]=o==="true"||o==="":t[s]=o}}),W(t)}})});
