// Contact Form Widget - Embeddable script

// Initialize config object with defaults
window.contactWidgetConfig = window.contactWidgetConfig || {};

// Set default API URL if not specified
window.contactWidgetConfig.apiUrl = window.contactWidgetConfig.apiUrl || 'https://api.hallopetra.de/api/web-widget/request-call';

// Function to configure the widget
window.configureContactWidget = function (config) {
  window.contactWidgetConfig = { ...window.contactWidgetConfig, ...config };
};

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

  // Create compliance text
  const complianceText = document.createElement('div');
  complianceText.className = 'compliance-text';

  // Create AGB link
  const agbLink = document.createElement('a');
  agbLink.href = config.agbUrl || 'https://example.com/agb';
  agbLink.target = '_blank';
  agbLink.textContent = 'AGB';

  // Create Datenschutz link
  const datenschutzLink = document.createElement('a');
  datenschutzLink.href = config.datenschutzUrl || 'https://example.com/datenschutz';
  datenschutzLink.target = '_blank';
  datenschutzLink.textContent = 'Datenschutzbedingungen';

  // Set the compliance text with links
  complianceText.innerHTML = `Mit dem Absenden stimmen Sie unseren `;
  complianceText.appendChild(agbLink);
  complianceText.appendChild(document.createTextNode(' und '));
  complianceText.appendChild(datenschutzLink);
  complianceText.appendChild(document.createTextNode(' zu.'));

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
  form.appendChild(complianceText);
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
  successTitle.textContent = 'Vielen Dank!';

  // Create success message
  const successMessage = document.createElement('p');
  successMessage.className = 'success-message';
  successMessage.textContent = 'Wir werden Sie in Kürze unter der angegebenen Nummer kontaktieren.';

  // Create powered by text
  const poweredBy = document.createElement('div');
  poweredBy.className = 'powered-by';

  const poweredByLink = document.createElement('a');
  poweredByLink.href = 'https://hallopetra.com';
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
    successScreen
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
    successScreen
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

  // Validate phone input to ensure E.164 format
  function validatePhone() {
    const countryCode = countrySelect.value;
    const phoneNumber = phoneInput.value.trim();
    const phoneErrorMsg = phoneGroup.querySelector('.error-message');

    // Remove any non-digit characters
    const digitsOnly = phoneNumber.replace(/\D/g, '');

    // Basic validation based on country code
    let isValid = false;
    let errorMessage = '';

    if (digitsOnly.length === 0) {
      errorMessage = 'Bitte geben Sie eine Telefonnummer ein.';
    } else if (countryCode === '+49' && (digitsOnly.length < 10 || digitsOnly.length > 11)) {
      errorMessage = 'Deutsche Telefonnummern müssen 10-11 Ziffern haben.';
    } else if (countryCode === '+43' && (digitsOnly.length < 9 || digitsOnly.length > 10)) {
      errorMessage = 'Österreichische Telefonnummern müssen 9-10 Ziffern haben.';
    } else if (countryCode === '+41' && digitsOnly.length !== 9) {
      errorMessage = 'Schweizer Telefonnummern müssen 9 Ziffern haben.';
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

  // Update submit button state based on form validity
  function updateSubmitButtonState() {
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();

    submitBtn.disabled = !(isNameValid && isPhoneValid);
  }

  // Add input event listeners for validation
  nameInput.addEventListener('input', updateSubmitButtonState);
  phoneInput.addEventListener('input', updateSubmitButtonState);
  countrySelect.addEventListener('change', updateSubmitButtonState);

  // Handle form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Set formSubmitted to true
    formSubmitted = true;

    // Run validation with visual feedback
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();

    if (!isNameValid || !isPhoneValid) {
      return;
    }

    const name = nameInput.value.trim();
    const countryCode = countrySelect.value;
    const phoneNumber = phoneInput.value.trim().replace(/\D/g, '');

    // Format phone number in E.164 format
    const e164PhoneNumber = `${countryCode}${phoneNumber}`;

    // Prepare data for API submission
    const formData = {
      companyRecordId: window.contactWidgetConfig?.companyRecordId || config.companyRecordId,
      name: name,
      phone: e164PhoneNumber
    };

    // Check if companyRecordId is set
    if (!formData.companyRecordId) {
      console.error('Error: companyRecordId is not set. Please configure the widget with a valid companyRecordId.');

      // Show error message to the user
      contactFormContainer.style.display = 'none';
      successScreen.style.display = 'block';

      // Update success screen to show error
      const successTitle = successScreen.querySelector('.success-title');
      const successMessage = successScreen.querySelector('.success-message');
      const successIcon = successScreen.querySelector('.success-icon svg');

      // Change success screen to error screen
      successTitle.textContent = 'Konfigurationsfehler';
      successMessage.textContent = 'Das Widget wurde nicht korrekt konfiguriert. Bitte kontaktieren Sie den Website-Administrator.';
      successIcon.innerHTML = '<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />';
      successIcon.parentElement.style.backgroundColor = '#FEE2E2';
      successIcon.style.color = '#EF4444';

      return;
    }

    // Get the API URL from config or use default
    const apiUrl = window.contactWidgetConfig?.apiUrl || 'https://api.hallopetra.de/api/web-widget/request-call';

    // Send data to the configured API endpoint
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);

        // Call the handler function if provided
        if (typeof config.onSubmit === 'function') {
          config.onSubmit({ name, phoneNumber: e164PhoneNumber, response: data });
        }

        // Show success screen
        contactFormContainer.style.display = 'none';
        successScreen.style.display = 'block';
      })
      .catch(error => {
        console.error('Error submitting form:', error);

        // Optional: Implement error handling UI here
        // For now, still show success screen to avoid disrupting user experience
        contactFormContainer.style.display = 'none';
        successScreen.style.display = 'block';
      });

    // Reset form state but keep the popup open with success screen
    formSubmitted = false;
    form.reset();
    updateSubmitButtonState();
  });

  // Initial validation check
  updateSubmitButtonState();
}

// Initialize the contact widget
function initContactWidget(config = {}) {
  // Inject CSS
  injectStyles();

  // Create widget elements
  const elements = createWidgetElements(config);

  // Initialize widget behavior
  initWidgetBehavior(elements, config);

  // Return API for programmatic control
  return {
    showPopup: function () {
      elements.popup.style.display = 'block';
    },
    hidePopup: function () {
      elements.popup.style.display = 'none';
    },
    showSpeechBubble: function () {
      elements.speechBubble.classList.add('show');
    },
    hideSpeechBubble: function () {
      elements.speechBubble.classList.remove('show');
    },
    updateConfig: function (newConfig) {
      Object.assign(config, newConfig);
    }
  };
}

// Check for data attributes in script tag for auto-initialization
document.addEventListener('DOMContentLoaded', function () {
  const scriptTags = document.querySelectorAll('script[src*="contact-widget"]');
  scriptTags.forEach(script => {
    if (script.hasAttribute('data-contact-widget-auto-init')) {
      // Read configuration from data attributes
      if (script.hasAttribute('data-company-record-id')) {
        window.contactWidgetConfig.companyRecordId = script.getAttribute('data-company-record-id');
      }

      // Read API URL from data attributes
      if (script.hasAttribute('data-api-url')) {
        window.contactWidgetConfig.apiUrl = script.getAttribute('data-api-url');
      }

      // Initialize widget if auto-init is enabled
      initContactWidget();
    }
  });
});

// Export
export default {
  init: initContactWidget
};
