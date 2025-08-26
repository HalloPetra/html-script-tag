// Contact Form Widget - Embeddable script

// Create and inject CSS styles
function injectStyles() {
  // Add Inter font
  const fontLink1 = document.createElement("link");
  fontLink1.rel = "preconnect";
  fontLink1.href = "https://fonts.googleapis.com";

  const fontLink2 = document.createElement("link");
  fontLink2.rel = "preconnect";
  fontLink2.href = "https://fonts.gstatic.com";
  fontLink2.crossOrigin = "anonymous";

  const fontLink3 = document.createElement("link");
  fontLink3.rel = "stylesheet";
  fontLink3.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";

  document.head.appendChild(fontLink1);
  document.head.appendChild(fontLink2);
  document.head.appendChild(fontLink3);

  // Add styles
  const styleSheet = document.createElement("style");
  styleSheet.innerHTML = `
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
  `;
  document.head.appendChild(styleSheet);
}

// Create widget DOM elements
function createWidgetElements(config) {
  // Create button
  const widgetBtn = document.createElement('button');
  widgetBtn.id = 'contact-widget-btn';
  widgetBtn.className = 'contact-widget-btn';

  // Create logo container with circular white background
  const logoContainer = document.createElement('div');
  logoContainer.className = 'contact-widget-logo-container';

  // Add logo to container
  const logoImg = document.createElement('img');
  logoImg.src = config.logoSrc || 'https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/assets/logo.png';
  logoImg.alt = 'Petra';

  logoContainer.appendChild(logoImg);

  // Add logo to button (no text)
  widgetBtn.appendChild(logoContainer);

  // Create speech bubble
  const speechBubble = document.createElement('div');
  speechBubble.id = 'speech-bubble';
  speechBubble.className = 'speech-bubble';
  speechBubble.textContent = config.speechBubbleText || 'Wie darf ich Ihnen helfen?';

  // Create popup
  const popup = document.createElement('div');
  popup.id = 'contact-popup';
  popup.className = 'contact-popup';

  // Create close button
  const closeBtn = document.createElement('button');
  closeBtn.id = 'close-popup';
  closeBtn.className = 'close-btn';
  closeBtn.textContent = '×';

  // Create contact form container
  const contactFormContainer = document.createElement('div');
  contactFormContainer.id = 'contact-form-container';

  // Create form heading
  const heading = document.createElement('h3');
  heading.textContent = config.formTitle || 'Wir rufen Sie zurück';

  // Create form description
  const description = document.createElement('p');
  description.className = 'contact-popup-description';
  description.textContent = config.formDescription || 'Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren.';

  // Create form
  const form = document.createElement('form');
  form.id = 'contact-form';

  // Create name field
  const nameGroup = document.createElement('div');
  nameGroup.className = 'form-group';
  nameGroup.id = 'name-group';

  const nameLabel = document.createElement('label');
  nameLabel.htmlFor = 'name';
  nameLabel.textContent = config.nameLabel || 'Name';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'name';
  nameInput.name = 'name';
  nameInput.placeholder = config.namePlaceholder || 'Ihr Name';
  nameInput.required = true;

  const nameError = document.createElement('div');
  nameError.className = 'error-message';

  nameGroup.appendChild(nameLabel);
  nameGroup.appendChild(nameInput);
  nameGroup.appendChild(nameError);

  // Create phone field with country selection
  const phoneGroup = document.createElement('div');
  phoneGroup.className = 'form-group';
  phoneGroup.id = 'phone-group';

  const phoneLabel = document.createElement('label');
  phoneLabel.htmlFor = 'phone';
  phoneLabel.textContent = config.phoneLabel || 'Telefonnummer';

  // Create phone input container for country code and number
  const phoneInputContainer = document.createElement('div');
  phoneInputContainer.className = 'phone-input-container';

  // Create country code select
  const countrySelect = document.createElement('select');
  countrySelect.id = 'country-code';
  countrySelect.className = 'country-select';

  // Add country options
  const countries = [
    { code: '+49', emoji: '🇩🇪', name: 'Deutschland' },
    { code: '+43', emoji: '🇦🇹', name: 'Österreich' },
    { code: '+41', emoji: '🇨🇭', name: 'Schweiz' }
  ];

  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code;
    option.textContent = `${country.emoji} ${country.code}`;
    option.title = country.name;
    countrySelect.appendChild(option);
  });

  // Create phone number input
  const phoneInput = document.createElement('input');
  phoneInput.type = 'tel';
  phoneInput.id = 'phone';
  phoneInput.name = 'phone';
  phoneInput.placeholder = config.phonePlaceholder || 'Ihre Telefonnummer';
  phoneInput.className = 'phone-input';
  phoneInput.required = true;

  const phoneError = document.createElement('div');
  phoneError.className = 'error-message';

  // Assemble phone input
  phoneInputContainer.appendChild(countrySelect);
  phoneInputContainer.appendChild(phoneInput);

  phoneGroup.appendChild(phoneLabel);
  phoneGroup.appendChild(phoneInputContainer);
  phoneGroup.appendChild(phoneError);

  // Initialize arrays to store extra fields
  const extraFields = [];
  const emailGroup = { element: null, input: null };
  const addressGroup = { element: null, input: null };

  // Create additional fields if extraInputFields are configured
  if (config.extraInputFields && Array.isArray(config.extraInputFields)) {
    config.extraInputFields.forEach(field => {
      if (!field.type) return;

      if (field.type.toLowerCase() === 'email') {
        // Create email field
        const group = document.createElement('div');
        group.className = 'form-group';
        group.id = 'email-group';

        const label = document.createElement('label');
        label.htmlFor = 'email';
        // Use label from the field object, fallback to config, or default
        label.textContent = field.label || config.emailLabel || 'E-Mail';

        const input = document.createElement('input');
        input.type = 'email';
        input.id = 'email';
        input.name = 'email';
        // Use placeholder from the field object, fallback to config, or default
        input.placeholder = field.placeholder || config.emailPlaceholder || 'Ihre E-Mail-Adresse';
        input.required = !!field.required;

        const errorMsg = document.createElement('div');
        errorMsg.className = 'error-message';

        group.appendChild(label);
        group.appendChild(input);
        group.appendChild(errorMsg);

        extraFields.push({ type: 'email', element: group, input, required: !!field.required });
        emailGroup.element = group;
        emailGroup.input = input;
      }
      else if (field.type.toLowerCase() === 'address') {
        // Create address field
        const group = document.createElement('div');
        group.className = 'form-group';
        group.id = 'address-group';

        const label = document.createElement('label');
        label.htmlFor = 'address';
        // Use label from the field object, fallback to config, or default
        label.textContent = field.label || config.addressLabel || 'Adresse';

        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'address';
        input.name = 'address';
        // Use placeholder from the field object, fallback to config, or default
        input.placeholder = field.placeholder || config.addressPlaceholder || 'Ihre Adresse';
        input.required = !!field.required;

        const errorMsg = document.createElement('div');
        errorMsg.className = 'error-message';

        group.appendChild(label);
        group.appendChild(input);
        group.appendChild(errorMsg);

        extraFields.push({ type: 'address', element: group, input, required: !!field.required });
        addressGroup.element = group;
        addressGroup.input = input;
      }
    });
  }

  // Create submit button
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.className = 'submit-btn';
  submitBtn.id = 'submit-btn';
  submitBtn.textContent = config.submitText || 'Anruf bekommen';
  submitBtn.disabled = true; // Initially disabled until validation passes

  // Assemble form
  form.appendChild(nameGroup);
  form.appendChild(phoneGroup);

  // Add extra fields if they exist
  extraFields.forEach(field => {
    form.appendChild(field.element);
  });

  // Create hint text only if hintText is provided (position it right before the submit button)
  if (config.hintText) {
    const hintText = document.createElement('div');
    hintText.className = 'hint-text';

    // Set the hint text content
    hintText.textContent = config.hintText;

    // Add optional link after hint text
    if (config.hintLinkText && config.hintLinkUrl) {
      // Create space after hint text
      hintText.appendChild(document.createTextNode(' '));

      // Create optional link
      const hintLink = document.createElement('a');
      hintLink.href = config.hintLinkUrl;
      hintLink.target = '_blank';
      hintLink.textContent = config.hintLinkText;

      // Add link to hint text
      hintText.appendChild(hintLink);
    }

    // Add hint text to form
    form.appendChild(hintText);
  }

  // Add submit button as the last element
  form.appendChild(submitBtn);

  // Add form elements to contact form container
  contactFormContainer.appendChild(heading);
  contactFormContainer.appendChild(description);
  contactFormContainer.appendChild(form);

  // Create success screen
  const successScreen = document.createElement('div');
  successScreen.id = 'success-screen';
  successScreen.className = 'success-screen';

  // Create success icon
  const successIcon = document.createElement('div');
  successIcon.className = 'success-icon';
  successIcon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
    </svg>
  `;

  // Create success title
  const successTitle = document.createElement('h3');
  successTitle.className = 'success-title';
  successTitle.textContent = config.successTitle || 'Vielen Dank!';

  // Create success message
  const successMessage = document.createElement('p');
  successMessage.className = 'success-message';
  successMessage.textContent = config.successMessage || 'Wir werden Sie in Kürze unter der angegebenen Nummer kontaktieren.';

  // Create powered by text
  const poweredBy = document.createElement('div');
  poweredBy.className = 'powered-by';

  const poweredByLink = document.createElement('a');
  poweredByLink.href = 'https://hallopetra.de';
  poweredByLink.target = '_blank';
  poweredByLink.textContent = 'HalloPetra';

  poweredBy.appendChild(document.createTextNode('Bereitgestellt von '));
  poweredBy.appendChild(poweredByLink);

  // Assemble success screen
  successScreen.appendChild(successIcon);
  successScreen.appendChild(successTitle);
  successScreen.appendChild(successMessage);
  successScreen.appendChild(poweredBy);

  // Assemble popup
  popup.appendChild(closeBtn);
  popup.appendChild(contactFormContainer);
  popup.appendChild(successScreen);

  // Add to document
  document.body.appendChild(widgetBtn);
  document.body.appendChild(speechBubble);
  document.body.appendChild(popup);

  return {
    widgetBtn,
    popup,
    closeBtn,
    form,
    nameInput,
    phoneInput,
    countrySelect,
    submitBtn,
    nameGroup,
    phoneGroup,
    speechBubble,
    contactFormContainer,
    successScreen,
    extraFields,
    emailGroup,
    addressGroup
  };
}

// Initialize widget functionality
function initWidgetBehavior(elements, config) {
  const {
    widgetBtn,
    popup,
    closeBtn,
    form,
    nameInput,
    phoneInput,
    countrySelect,
    submitBtn,
    nameGroup,
    phoneGroup,
    speechBubble,
    contactFormContainer,
    successScreen,
    extraFields,
    emailGroup,
    addressGroup
  } = elements;

  // Track if form has been submitted
  let formSubmitted = false;

  // Show speech bubble after 5 seconds
  setTimeout(function () {
    speechBubble.classList.add('show');

    // Hide speech bubble when clicked anywhere or after 30 seconds
    document.addEventListener('click', function hideSpeechBubble() {
      speechBubble.classList.remove('show');
      document.removeEventListener('click', hideSpeechBubble);
    });

    setTimeout(function () {
      speechBubble.classList.remove('show');
    }, 30000);
  }, 5000);

  // Toggle popup visibility when widget button is clicked
  widgetBtn.addEventListener('click', function () {
    popup.style.display = 'block';
    // Hide speech bubble when popup is opened
    speechBubble.classList.remove('show');
  });

  // Close popup when close button is clicked
  closeBtn.addEventListener('click', function () {
    popup.style.display = 'none';
    // Reset form and show contact form (hide success screen)
    resetForm();
  });

  // Function to reset the form and UI state
  function resetForm() {
    form.reset();
    formSubmitted = false;
    updateSubmitButtonState();
    contactFormContainer.style.display = 'block';
    successScreen.style.display = 'none';
  }

  // Validate name input
  function validateName() {
    const name = nameInput.value.trim();
    const nameErrorMsg = nameGroup.querySelector('.error-message');

    if (name.length < 2) {
      if (formSubmitted) {
        nameGroup.classList.add('invalid');
        nameErrorMsg.textContent = 'Bitte geben Sie einen gültigen Namen ein.';
      }
      return false;
    } else {
      nameGroup.classList.remove('invalid');
      nameErrorMsg.textContent = '';
      return true;
    }
  }

  // Validate email input
  function validateEmail() {
    // If email field doesn't exist, skip validation
    if (!emailGroup.element || !emailGroup.input) {
      return true;
    }

    const email = emailGroup.input.value.trim();
    const emailErrorMsg = emailGroup.element.querySelector('.error-message');
    const isRequired = emailGroup.input.required;

    // If field is not required and is empty, it's valid
    if (!isRequired && email === '') {
      emailGroup.element.classList.remove('invalid');
      emailErrorMsg.textContent = '';
      return true;
    }

    // Email regex pattern for basic validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);

    if (!isValid) {
      if (formSubmitted) {
        emailGroup.element.classList.add('invalid');
        emailErrorMsg.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
      }
      return false;
    } else {
      emailGroup.element.classList.remove('invalid');
      emailErrorMsg.textContent = '';
      return true;
    }
  }

  // Validate address input
  function validateAddress() {
    // If address field doesn't exist, skip validation
    if (!addressGroup.element || !addressGroup.input) {
      return true;
    }

    const address = addressGroup.input.value.trim();
    const addressErrorMsg = addressGroup.element.querySelector('.error-message');
    const isRequired = addressGroup.input.required;

    // If field is not required and is empty, it's valid
    if (!isRequired && address === '') {
      addressGroup.element.classList.remove('invalid');
      addressErrorMsg.textContent = '';
      return true;
    }

    // Simple validation - just check for minimum length
    if (address.length < 5) {
      if (formSubmitted) {
        addressGroup.element.classList.add('invalid');
        addressErrorMsg.textContent = 'Bitte geben Sie eine gültige Adresse ein.';
      }
      return false;
    } else {
      addressGroup.element.classList.remove('invalid');
      addressErrorMsg.textContent = '';
      return true;
    }
  }

  // Validate phone input to ensure E.164 format
  function validatePhone() {
    const countryCode = countrySelect.value;
    const phoneNumber = phoneInput.value.trim();
    const phoneErrorMsg = phoneGroup.querySelector('.error-message');

    // Format the phone number - remove hyphens and spaces
    let formattedNumber = phoneNumber.replace(/[\s-]/g, '');

    // Remove leading zero if present (common for local phone number format)
    if (formattedNumber.startsWith('0')) {
      formattedNumber = formattedNumber.substring(1);

      // Update the input field to show the formatted number without the leading zero
      phoneInput.value = formattedNumber;
    }

    // Remove any non-digit characters for validation
    const digitsOnly = formattedNumber.replace(/\D/g, '');

    // Basic validation based on country code
    let isValid = false;
    let errorMessage = '';

    if (digitsOnly.length === 0) {
      errorMessage = 'Bitte geben Sie eine Telefonnummer ein.';
    } else if (digitsOnly.length < 6) {
      errorMessage = 'Telefonnummern müssen mindestens 6 Ziffern haben.';
    } else {
      isValid = true;
    }

    if (isValid) {
      phoneGroup.classList.remove('invalid');
      phoneErrorMsg.textContent = '';
      return true;
    } else {
      if (formSubmitted) {
        phoneGroup.classList.add('invalid');
        phoneErrorMsg.textContent = errorMessage;
      }
      return false;
    }
  }

  // Add function to format phone number on input
  function formatPhoneNumber() {
    let value = phoneInput.value;
    const originalValue = value;

    // Remove spaces and hyphens
    value = value.replace(/[\s-]/g, '');

    // Remove leading zero if present
    if (value.startsWith('0')) {
      value = value.substring(1);
    }

    // If the value changed, update the input and show visual feedback
    if (value !== originalValue && value.length > 0) {
      // Update the input with the formatted value
      phoneInput.value = value;

      // Add a brief highlight effect to show the user the value was changed
      const originalBackgroundColor = phoneInput.style.backgroundColor;
      const originalTransition = phoneInput.style.transition;

      phoneInput.style.transition = 'background-color 0.5s ease';
      phoneInput.style.backgroundColor = '#eef7ff'; // Light blue highlight

      setTimeout(() => {
        phoneInput.style.backgroundColor = originalBackgroundColor;
        setTimeout(() => {
          phoneInput.style.transition = originalTransition;
        }, 500);
      }, 500);
    }

    return value;
  }

  // Update submit button state based on form validity
  function updateSubmitButtonState() {
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();
    const isAddressValid = validateAddress();

    // Check if all validations pass
    submitBtn.disabled = !(isNameValid && isPhoneValid && isEmailValid && isAddressValid);
  }

  // Add input event listeners for validation
  nameInput.addEventListener('input', updateSubmitButtonState);

  // Add both formatting and validation for phone input
  phoneInput.addEventListener('input', function () {
    formatPhoneNumber();
    updateSubmitButtonState();
  });

  countrySelect.addEventListener('change', updateSubmitButtonState);

  // Add validation for email and address fields if they exist
  if (emailGroup.input) {
    emailGroup.input.addEventListener('input', updateSubmitButtonState);
  }

  if (addressGroup.input) {
    addressGroup.input.addEventListener('input', updateSubmitButtonState);
  }

  // Handle form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Set formSubmitted to true
    formSubmitted = true;

    // Format phone number one more time to ensure it's correct
    formatPhoneNumber();

    // Run validation with visual feedback
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();
    const isAddressValid = validateAddress();

    if (!isNameValid || !isPhoneValid || !isEmailValid || !isAddressValid) {
      return;
    }

    // Check if customerId is provided
    if (!config.customerId) {
      // Show error in UI
      const phoneErrorMsg = phoneGroup.querySelector('.error-message');
      phoneGroup.classList.add('invalid');
      phoneErrorMsg.textContent = 'Konfigurationsfehler: Keine Kunden-ID vorhanden.';
      console.error('ContactWidget: customerId is required but was not provided in the configuration');
      return;
    }

    const name = nameInput.value.trim();
    const countryCode = countrySelect.value;
    const phoneNumber = phoneInput.value.trim().replace(/\D/g, '');

    // Format phone number in E.164 format (country code + number without leading zero)
    const e164PhoneNumber = `${countryCode}${phoneNumber}`;

    // Prepare request data
    const requestData = {
      name: name,
      phone: e164PhoneNumber,
      customerId: config.customerId,
      url: window.location.href, // Include the current page URL
      userAgent: navigator.userAgent, // Include user agent for analytics
      greetingText: config.greetingText
    };

    // Add outgoingPhoneNumber if provided
    if (config.outgoingPhoneNumber) {
      requestData.outgoingPhoneNumber = config.outgoingPhoneNumber;
    }

    // Add email and address if they exist and have values
    if (emailGroup.input && emailGroup.input.value.trim()) {
      requestData.email = emailGroup.input.value.trim();
    }

    if (addressGroup.input && addressGroup.input.value.trim()) {
      requestData.address = addressGroup.input.value.trim();
    }

    // Disable submit button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Wird gesendet...';

    // Send data to server
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    fetch(config.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
      signal: controller.signal
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Server responded with an error');
        }
        return response.json();
      })
      .then(data => {
        console.log('Call request successfully sent to server:', data);

        // Call the handler function if provided
        if (typeof config.onSubmit === 'function') {
          config.onSubmit({
            name,
            phoneNumber: e164PhoneNumber,
            email: requestData.email,
            address: requestData.address,
            success: true
          });
        }

        // Show success screen
        contactFormContainer.style.display = 'none';
        successScreen.style.display = 'block';
      })
      .catch(error => {
        console.error('Error sending call request:', error);

        // Call the handler function if provided
        if (typeof config.onSubmit === 'function') {
          config.onSubmit({
            name,
            phoneNumber: e164PhoneNumber,
            email: requestData.email,
            address: requestData.address,
            success: false,
            error
          });
        }

        // Show error in UI
        const phoneErrorMsg = phoneGroup.querySelector('.error-message');
        phoneGroup.classList.add('invalid');
        phoneErrorMsg.textContent = 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.';
      })
      .finally(() => {
        clearTimeout(timeoutId);
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.textContent = config.submitText || 'Anruf bekommen';

        // Reset form state but keep the popup open if there was an error
        formSubmitted = false;
        if (successScreen.style.display === 'block') {
          form.reset();
          updateSubmitButtonState();
        }
      });
  });

  // Initial validation check
  updateSubmitButtonState();
}

// Initialize the contact widget
function initContactWidget(config = {}) {
  // Set default API URL if not provided
  config.apiUrl = config.apiUrl || 'https://api.hallopetra.de/web-widget/request-call';

  // Check if customerId is provided
  const missingCustomerId = !config.customerId;
  // if (missingCustomerId) {
  //   console.error('ContactWidget: customerId is required but was not provided in the configuration');

  //   // Create and display warning banner
  //   const warningBanner = document.createElement('div');
  //   warningBanner.style.position = 'fixed';
  //   warningBanner.style.bottom = '20px';
  //   warningBanner.style.right = '20px';
  //   warningBanner.style.backgroundColor = '#FEF2F2';
  //   warningBanner.style.color = '#B91C1C';
  //   warningBanner.style.padding = '10px 15px';
  //   warningBanner.style.borderRadius = '8px';
  //   warningBanner.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  //   warningBanner.style.zIndex = '10000';
  //   warningBanner.style.fontFamily = 'Inter, sans-serif';
  //   warningBanner.style.fontSize = '14px';
  //   warningBanner.style.fontWeight = '500';
  //   warningBanner.style.maxWidth = '300px';
  //   warningBanner.textContent = 'ContactWidget Error: Missing customerId. Widget will not function correctly.';

  //   // Only add if in development environment
  //   if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  //     document.body.appendChild(warningBanner);

  //     // Remove the banner after 10 seconds
  //     setTimeout(() => {
  //       if (document.body.contains(warningBanner)) {
  //         document.body.removeChild(warningBanner);
  //       }
  //     }, 10000);
  //   }
  // }

  // Process extraInputFields if provided as a string (from data attribute)
  if (typeof config.extraInputFields === 'string') {
    try {
      config.extraInputFields = JSON.parse(config.extraInputFields);
    } catch (e) {
      console.error('ContactWidget: Error parsing extraInputFields. It should be a valid JSON array.');
      config.extraInputFields = [];
    }
  }

  // Example extraInputFields structure:
  // extraInputFields: [
  //   { 
  //     type: "email",
  //     required: true,
  //     label: "E-Mail Adresse",   // Optional: custom label
  //     placeholder: "Ihre E-Mail" // Optional: custom placeholder
  //   },
  //   { 
  //     type: "address",
  //     required: false,
  //     label: "Ihre Adresse",     // Optional: custom label
  //     placeholder: "Straße, PLZ, Ort" // Optional: custom placeholder
  //   }
  // ]

  // Inject CSS
  injectStyles();

  // Create widget elements
  const elements = createWidgetElements(config);

  // Add missing customerId warning to the form if needed
  if (missingCustomerId) {
    const contactFormContainer = elements.contactFormContainer;
    const form = elements.form;

    // Create a warning element
    const warningElement = document.createElement('div');
    warningElement.style.backgroundColor = '#FEF2F2';
    warningElement.style.color = '#B91C1C';
    warningElement.style.padding = '10px';
    warningElement.style.borderRadius = '8px';
    warningElement.style.margin = '0 0 16px 0';
    warningElement.style.fontSize = '14px';
    warningElement.style.fontWeight = '500';
    warningElement.style.textAlign = 'center';
    warningElement.textContent = 'Konfigurationsfehler: Keine Kunden-ID vorhanden.';

    // Insert it at the top of the form
    contactFormContainer.insertBefore(warningElement, contactFormContainer.firstChild);

    // Disable form submission
    form.onsubmit = function (e) {
      e.preventDefault();
      return false;
    };
  }

  // Initialize behavior
  initWidgetBehavior(elements, config);

  // Return widget controller with public methods
  return {
    // Show the popup programmatically
    showPopup: () => {
      elements.popup.style.display = 'block';
      elements.speechBubble.classList.remove('show');
    },
    // Hide the popup programmatically
    hidePopup: () => {
      elements.popup.style.display = 'none';
    },
    // Show speech bubble programmatically
    showSpeechBubble: () => {
      elements.speechBubble.classList.add('show');
    },
    // Hide speech bubble programmatically
    hideSpeechBubble: () => {
      elements.speechBubble.classList.remove('show');
    },
    // Update widget configuration
    updateConfig: (newConfig) => {
      // Update speech bubble text if provided
      if (newConfig.speechBubbleText) {
        elements.speechBubble.textContent = newConfig.speechBubbleText;
      }

      // Update success title if provided
      if (newConfig.successTitle) {
        const successTitle = elements.successScreen.querySelector('.success-title');
        if (successTitle) {
          successTitle.textContent = newConfig.successTitle;
        }
      }

      // Update success message if provided
      if (newConfig.successMessage) {
        const successMessage = elements.successScreen.querySelector('.success-message');
        if (successMessage) {
          successMessage.textContent = newConfig.successMessage;
        }
      }

      // Update greeting text if provided
      if (newConfig.greetingText) {
        config.greetingText = newConfig.greetingText;
      }

      // Other updates could be added here
    }
  };
}

// Expose the widget to the global scope
window.ContactWidget = {
  init: initContactWidget
};

// Auto-initialize if the script has data-auto-init attribute
document.addEventListener('DOMContentLoaded', () => {
  const scriptTag = document.querySelector('script[data-contact-widget-auto-init]');
  if (scriptTag) {
    // Get configuration from data attributes if available
    const config = {};

    // Common configuration attributes
    const configAttributes = [
      'buttonText', 'formTitle', 'nameLabel', 'phoneLabel', 'submitText', 'successMessage',
      'namePlaceholder', 'phonePlaceholder', 'logoSrc', 'formDescription',
      'speechBubbleText', 'apiUrl', 'customerId', 'successTitle',
      'greetingText', 'extraInputFields', 'emailLabel', 'emailPlaceholder', 'addressLabel', 'addressPlaceholder',
      'hintText', 'hintLinkText', 'hintLinkUrl', 'outgoingPhoneNumber'
    ];

    configAttributes.forEach(attr => {
      const dataAttr = `data-${attr.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      if (scriptTag.hasAttribute(dataAttr)) {
        config[attr] = scriptTag.getAttribute(dataAttr);
      }
    });

    // Initialize with configuration from data attributes
    initContactWidget(config);
  }
});
