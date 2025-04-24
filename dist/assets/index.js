(function(W){typeof define=="function"&&define.amd?define(W):W()})(function(){"use strict";function W(){const e=document.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com";const s=document.createElement("link");s.rel="preconnect",s.href="https://fonts.gstatic.com",s.crossOrigin="anonymous";const a=document.createElement("link");a.rel="stylesheet",a.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",document.head.appendChild(e),document.head.appendChild(s),document.head.appendChild(a);const i=document.createElement("style");i.innerHTML=`
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
  `,document.head.appendChild(i)}function V(e){const s=document.createElement("button");s.id="contact-widget-btn",s.className="contact-widget-btn";const a=document.createElement("div");a.className="contact-widget-logo-container";const i=document.createElement("img");i.src=e.logoSrc||"https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/assets/logo.png",i.alt="Petra",a.appendChild(i),s.appendChild(a);const u=document.createElement("div");u.id="speech-bubble",u.className="speech-bubble",u.textContent=e.speechBubbleText||"Wie darf ich Ihnen helfen?";const l=document.createElement("div");l.id="contact-popup",l.className="contact-popup";const w=document.createElement("button");w.id="close-popup",w.className="close-btn",w.textContent="×";const p=document.createElement("div");p.id="contact-form-container";const F=document.createElement("h3");F.textContent=e.formTitle||"Wir rufen Sie zurück";const S=document.createElement("p");S.className="contact-popup-description",S.textContent=e.formDescription||"Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren.";const y=document.createElement("form");y.id="contact-form";const b=document.createElement("div");b.className="form-group",b.id="name-group";const N=document.createElement("label");N.htmlFor="name",N.textContent=e.nameLabel||"Name";const T=document.createElement("input");T.type="text",T.id="name",T.name="name",T.placeholder=e.namePlaceholder||"Ihr Name",T.required=!0;const M=document.createElement("div");M.className="error-message",b.appendChild(N),b.appendChild(T),b.appendChild(M);const c=document.createElement("div");c.className="form-group",c.id="phone-group";const m=document.createElement("label");m.htmlFor="phone",m.textContent=e.phoneLabel||"Telefonnummer";const v=document.createElement("div");v.className="phone-input-container";const B=document.createElement("select");B.id="country-code",B.className="country-select",[{code:"+49",emoji:"🇩🇪",name:"Deutschland"},{code:"+43",emoji:"🇦🇹",name:"Österreich"},{code:"+41",emoji:"🇨🇭",name:"Schweiz"}].forEach(r=>{const n=document.createElement("option");n.value=r.code,n.textContent=`${r.emoji} ${r.code}`,n.title=r.name,B.appendChild(n)});const k=document.createElement("input");k.type="tel",k.id="phone",k.name="phone",k.placeholder=e.phonePlaceholder||"Ihre Telefonnummer",k.className="phone-input",k.required=!0;const P=document.createElement("div");P.className="error-message",v.appendChild(B),v.appendChild(k),c.appendChild(m),c.appendChild(v),c.appendChild(P);const q=[],A={element:null,input:null},C={element:null,input:null};e.extraInputFields&&Array.isArray(e.extraInputFields)&&e.extraInputFields.forEach(r=>{if(r.type){if(r.type.toLowerCase()==="email"){const n=document.createElement("div");n.className="form-group",n.id="email-group";const f=document.createElement("label");f.htmlFor="email",f.textContent=r.label||e.emailLabel||"E-Mail";const d=document.createElement("input");d.type="email",d.id="email",d.name="email",d.placeholder=r.placeholder||e.emailPlaceholder||"Ihre E-Mail-Adresse",d.required=!!r.required;const z=document.createElement("div");z.className="error-message",n.appendChild(f),n.appendChild(d),n.appendChild(z),q.push({type:"email",element:n,input:d,required:!!r.required}),A.element=n,A.input=d}else if(r.type.toLowerCase()==="address"){const n=document.createElement("div");n.className="form-group",n.id="address-group";const f=document.createElement("label");f.htmlFor="address",f.textContent=r.label||e.addressLabel||"Adresse";const d=document.createElement("input");d.type="text",d.id="address",d.name="address",d.placeholder=r.placeholder||e.addressPlaceholder||"Ihre Adresse",d.required=!!r.required;const z=document.createElement("div");z.className="error-message",n.appendChild(f),n.appendChild(d),n.appendChild(z),q.push({type:"address",element:n,input:d,required:!!r.required}),C.element=n,C.input=d}}});const t=document.createElement("button");if(t.type="submit",t.className="submit-btn",t.id="submit-btn",t.textContent=e.submitText||"Anruf bekommen",t.disabled=!0,y.appendChild(b),y.appendChild(c),q.forEach(r=>{y.appendChild(r.element)}),e.hintText){const r=document.createElement("div");if(r.className="hint-text",r.textContent=e.hintText,e.hintLinkText&&e.hintLinkUrl){r.appendChild(document.createTextNode(" "));const n=document.createElement("a");n.href=e.hintLinkUrl,n.target="_blank",n.textContent=e.hintLinkText,r.appendChild(n)}y.appendChild(r)}y.appendChild(t),p.appendChild(F),p.appendChild(S),p.appendChild(y);const o=document.createElement("div");o.id="success-screen",o.className="success-screen";const g=document.createElement("div");g.className="success-icon",g.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
    </svg>
  `;const h=document.createElement("h3");h.className="success-title",h.textContent=e.successTitle||"Vielen Dank!";const x=document.createElement("p");x.className="success-message",x.textContent=e.successMessage||"Wir werden Sie in Kürze unter der angegebenen Nummer kontaktieren.";const L=document.createElement("div");L.className="powered-by";const E=document.createElement("a");return E.href="https://hallopetra.de",E.target="_blank",E.textContent="HalloPetra",L.appendChild(document.createTextNode("Bereitgestellt von ")),L.appendChild(E),o.appendChild(g),o.appendChild(h),o.appendChild(x),o.appendChild(L),l.appendChild(w),l.appendChild(p),l.appendChild(o),document.body.appendChild(s),document.body.appendChild(u),document.body.appendChild(l),{widgetBtn:s,popup:l,closeBtn:w,form:y,nameInput:T,phoneInput:k,countrySelect:B,submitBtn:t,nameGroup:b,phoneGroup:c,speechBubble:u,contactFormContainer:p,successScreen:o,extraFields:q,emailGroup:A,addressGroup:C}}function G(e,s){const{widgetBtn:a,popup:i,closeBtn:u,form:l,nameInput:w,phoneInput:p,countrySelect:F,submitBtn:S,nameGroup:y,phoneGroup:b,speechBubble:N,contactFormContainer:T,successScreen:M,emailGroup:c,addressGroup:m}=e;let v=!1;setTimeout(function(){N.classList.add("show"),document.addEventListener("click",function t(){N.classList.remove("show"),document.removeEventListener("click",t)}),setTimeout(function(){N.classList.remove("show")},3e4)},5e3),a.addEventListener("click",function(){i.style.display="block",N.classList.remove("show")}),u.addEventListener("click",function(){i.style.display="none",B()});function B(){l.reset(),v=!1,C(),T.style.display="block",M.style.display="none"}function j(){const t=w.value.trim(),o=y.querySelector(".error-message");return t.length<2?(v&&(y.classList.add("invalid"),o.textContent="Bitte geben Sie einen gültigen Namen ein."),!1):(y.classList.remove("invalid"),o.textContent="",!0)}function k(){if(!c.element||!c.input)return!0;const t=c.input.value.trim(),o=c.element.querySelector(".error-message");return!c.input.required&&t===""||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?(c.element.classList.remove("invalid"),o.textContent="",!0):(v&&(c.element.classList.add("invalid"),o.textContent="Bitte geben Sie eine gültige E-Mail-Adresse ein."),!1)}function P(){if(!m.element||!m.input)return!0;const t=m.input.value.trim(),o=m.element.querySelector(".error-message");return!m.input.required&&t===""?(m.element.classList.remove("invalid"),o.textContent="",!0):t.length<5?(v&&(m.element.classList.add("invalid"),o.textContent="Bitte geben Sie eine gültige Adresse ein."),!1):(m.element.classList.remove("invalid"),o.textContent="",!0)}function q(){const t=F.value,o=p.value.trim(),g=b.querySelector(".error-message");let h=o.replace(/[\s-]/g,"");h.startsWith("0")&&(h=h.substring(1),p.value=h);const x=h.replace(/\D/g,"");let L=!1,E="";return x.length===0?E="Bitte geben Sie eine Telefonnummer ein.":t==="+49"&&(x.length<10||x.length>11)?E="Deutsche Telefonnummern müssen 10-11 Ziffern haben.":t==="+43"&&(x.length<9||x.length>10)?E="Österreichische Telefonnummern müssen 9-10 Ziffern haben.":t==="+41"&&x.length!==9?E="Schweizer Telefonnummern müssen 9 Ziffern haben.":L=!0,L?(b.classList.remove("invalid"),g.textContent="",!0):(v&&(b.classList.add("invalid"),g.textContent=E),!1)}function A(){let t=p.value;const o=t;if(t=t.replace(/[\s-]/g,""),t.startsWith("0")&&(t=t.substring(1)),t!==o&&t.length>0){p.value=t;const g=p.style.backgroundColor,h=p.style.transition;p.style.transition="background-color 0.5s ease",p.style.backgroundColor="#eef7ff",setTimeout(()=>{p.style.backgroundColor=g,setTimeout(()=>{p.style.transition=h},500)},500)}return t}function C(){const t=j(),o=q(),g=k(),h=P();S.disabled=!(t&&o&&g&&h)}w.addEventListener("input",C),p.addEventListener("input",function(){A(),C()}),F.addEventListener("change",C),c.input&&c.input.addEventListener("input",C),m.input&&m.input.addEventListener("input",C),l.addEventListener("submit",function(t){t.preventDefault(),v=!0,A();const o=j(),g=q(),h=k(),x=P();if(!o||!g||!h||!x)return;if(!s.customerId){const I=b.querySelector(".error-message");b.classList.add("invalid"),I.textContent="Konfigurationsfehler: Keine Kunden-ID vorhanden.",console.error("ContactWidget: customerId is required but was not provided in the configuration");return}const L=w.value.trim(),E=F.value,r=p.value.trim().replace(/\D/g,""),n=`${E}${r}`,f={name:L,phone:n,customerId:s.customerId,url:window.location.href,userAgent:navigator.userAgent,greetingText:s.greetingText};c.input&&c.input.value.trim()&&(f.email=c.input.value.trim()),m.input&&m.input.value.trim()&&(f.address=m.input.value.trim()),S.disabled=!0,S.textContent="Wird gesendet...";const d=new AbortController,z=setTimeout(()=>d.abort(),1e4);fetch(s.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f),signal:d.signal}).then(I=>{if(!I.ok)throw new Error("Server responded with an error");return I.json()}).then(I=>{console.log("Call request successfully sent to server:",I),typeof s.onSubmit=="function"&&s.onSubmit({name:L,phoneNumber:n,email:f.email,address:f.address,success:!0}),T.style.display="none",M.style.display="block"}).catch(I=>{console.error("Error sending call request:",I),typeof s.onSubmit=="function"&&s.onSubmit({name:L,phoneNumber:n,email:f.email,address:f.address,success:!1,error:I});const U=b.querySelector(".error-message");b.classList.add("invalid"),U.textContent="Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."}).finally(()=>{clearTimeout(z),S.disabled=!1,S.textContent=s.submitText||"Anruf bekommen",v=!1,M.style.display==="block"&&(l.reset(),C())})}),C()}function D(e={}){e.apiUrl=e.apiUrl||"https://api.hallopetra.de/web-widget/request-call";const s=!e.customerId;if(typeof e.extraInputFields=="string")try{e.extraInputFields=JSON.parse(e.extraInputFields)}catch{console.error("ContactWidget: Error parsing extraInputFields. It should be a valid JSON array."),e.extraInputFields=[]}W();const a=V(e);if(s){const i=a.contactFormContainer,u=a.form,l=document.createElement("div");l.style.backgroundColor="#FEF2F2",l.style.color="#B91C1C",l.style.padding="10px",l.style.borderRadius="8px",l.style.margin="0 0 16px 0",l.style.fontSize="14px",l.style.fontWeight="500",l.style.textAlign="center",l.textContent="Konfigurationsfehler: Keine Kunden-ID vorhanden.",i.insertBefore(l,i.firstChild),u.onsubmit=function(w){return w.preventDefault(),!1}}return G(a,e),{showPopup:()=>{a.popup.style.display="block",a.speechBubble.classList.remove("show")},hidePopup:()=>{a.popup.style.display="none"},showSpeechBubble:()=>{a.speechBubble.classList.add("show")},hideSpeechBubble:()=>{a.speechBubble.classList.remove("show")},updateConfig:i=>{if(i.speechBubbleText&&(a.speechBubble.textContent=i.speechBubbleText),i.successTitle){const u=a.successScreen.querySelector(".success-title");u&&(u.textContent=i.successTitle)}if(i.successMessage){const u=a.successScreen.querySelector(".success-message");u&&(u.textContent=i.successMessage)}i.greetingText&&(e.greetingText=i.greetingText)}}}window.ContactWidget={init:D},document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("script[data-contact-widget-auto-init]");if(e){const s={};["buttonText","formTitle","nameLabel","phoneLabel","submitText","successMessage","namePlaceholder","phonePlaceholder","logoSrc","formDescription","speechBubbleText","apiUrl","customerId","successTitle","greetingText","extraInputFields","emailLabel","emailPlaceholder","addressLabel","addressPlaceholder","hintText","hintLinkText","hintLinkUrl"].forEach(i=>{const u=`data-${i.replace(/([A-Z])/g,"-$1").toLowerCase()}`;e.hasAttribute(u)&&(s[i]=e.getAttribute(u))}),D(s)}})});
