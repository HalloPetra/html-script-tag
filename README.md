# Contact Form Widget

A simple, customizable contact form widget that can be embedded on any website. The widget displays a button with the Petra logo that, when clicked, shows a popup with a contact form where visitors can enter their name and phone number to request a call back. A friendly speech bubble appears after 5 seconds saying "Wie darf ich Ihnen helfen?".

## Features

- Lightweight and easy to embed
- Modern design with Inter font
- Customizable appearance and text
- Interactive speech bubble that appears after 5 seconds and disappears after 30 seconds
- Country selection for phone numbers (Germany, Austria, Switzerland)
- Optional email and address fields
- Input validation with helpful error messages (only shown after form submission)
- Success screen with "Powered by HalloPetra" attribution
- Optional hint text with customizable link
- Form description to set clear expectations
- Responsive and mobile-friendly
- Disabled submit button until valid input is provided
- E.164 phone number format compliance

## How to Use

### Basic Installation

1. Add the script to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@latest/dist/assets/index.js"></script>
<script>
  // Configure the widget with your companyRecordId - REQUIRED
  configureContactWidget({
    companyRecordId: 'YOUR_COMPANY_RECORD_ID', // Replace with your specific ID - REQUIRED
    apiUrl: 'https://your-custom-api.example.com/endpoint' // Optional: override the default API endpoint
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Initialize the widget with required customerId
    const widget = ContactWidget.init({
      customerId: "your-customer-id" // Required
    });
  });
</script>
```

**Note**: The `customerId` parameter is required for the widget to function correctly.

### Auto-initialization

You can also auto-initialize the widget by adding data attributes to the script tag:

```html
<script 
  src="https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@latest/dist/assets/index.js" 
  data-contact-widget-auto-init
  data-customer-id="your-customer-id"
></script>
```

**Important**: The `data-customer-id` attribute is required. Without it, the widget will display an error message when attempting to submit the form.

### Customization

You can customize the widget by passing configuration options:

```html
<script src="https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@latest/dist/assets/index.js"></script>
<script>
  // Configure the widget with required and optional settings
  configureContactWidget({
    companyRecordId: 'YOUR_COMPANY_RECORD_ID', // Required: Your unique company identifier
    apiUrl: 'https://your-custom-api.example.com/endpoint', // Optional: Custom API endpoint
    
    // Additional optional customizations...
  });

  document.addEventListener('DOMContentLoaded', function() {
    const widget = ContactWidget.init({
      // Required parameters
      customerId: 'your-customer-id', // Your unique customer ID (required)
      
      // API configuration
      apiUrl: 'https://api.hallopetra.de/web-widget/request-call', // API endpoint for call requests
      
      // Button and speech bubble customization
      logoSrc: 'https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@latest/assets/logo.png', // Custom logo for the button
      speechBubbleText: 'Wie darf ich Ihnen helfen?', // Text in the speech bubble
      
      // Form title and description
      formTitle: 'Wir rufen Sie zurück', // Heading for the form
      formDescription: 'Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren.', // Description below the title
      
      // Form fields
      nameLabel: 'Name', // Label for the name field
      phoneLabel: 'Telefonnummer', // Label for the phone field
      namePlaceholder: 'Ihr Name', // Placeholder for name input
      phonePlaceholder: 'Ihre Telefonnummer', // Placeholder for phone input
      
      // Optional fields configuration
      extraInputFields: [
        { 
          type: "email", 
          required: true, // Set to true if field is mandatory
          label: "E-Mail Adresse", // Custom label for the field
          placeholder: "Ihre E-Mail eingeben" // Custom placeholder
        },
        { 
          type: "address", 
          required: false, // Set to false (or omit) for optional field
          label: "Vollständige Adresse",
          placeholder: "Straße, PLZ, Ort"
        }
      ],
      
      // Button and messages
      submitText: 'Anruf bekommen', // Text for the submit button
      
      // Success screen customization
      successTitle: 'Vielen Dank!', // Title shown on the success screen
      successMessage: 'Wir werden Sie in Kürze unter der angegebenen Nummer kontaktieren.', // Message shown on success screen
      
      // Call customization
      greetingText: 'Hallo, mein Name ist Petra von HalloPetra. Sie haben gerade über unsere Website um einen Rückruf gebeten.', // The greeting the assistant will say when calling
      
      // Phone number configuration
      outgoingPhoneNumber: '+49123456789', // Optional: The phone number from which the call will be made
      
      // Hint text customization (completely optional)
      hintText: 'Mit dem Absenden stimmen Sie unseren Nutzungsbedingungen zu.', // Optional: hint text displayed before submit button (if not provided, no hint will be shown)
      hintLinkText: 'Mehr erfahren', // Optional: Text for the link after hint text
      hintLinkUrl: 'https://your-domain.com/terms', // Optional: URL for the hint text link
      
      // Callbacks
      onSubmit: function(data) {
        // Custom callback function for form submission
        console.log('Form submitted:', data);
        
        // data contains: 
        // - name: The user's name
        // - phoneNumber: The full phone number in E.164 format (e.g. +491234567890)
        // - email: The user's email address (if provided and included in extraInputFields)
        // - address: The user's address (if provided and included in extraInputFields)
        // - success: Boolean indicating if the submission was successful
        // - error: Error object if success is false
      }
    });
  });
</script>
```

You can also use data attributes for basic configuration:

```html
<script 
  src="https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@latest/dist/assets/index.js" 
  data-contact-widget-auto-init
  data-customer-id="your-customer-id"
  data-api-url="https://api.hallopetra.de/web-widget/request-call"
  data-logo-src="https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@latest/assets/logo.png"
  data-speech-bubble-text="Wie darf ich Ihnen helfen?"
  data-form-title="Wir rufen Sie zurück"
  data-form-description="Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren."
  data-name-label="Name"
  data-phone-label="Telefonnummer"
  data-name-placeholder="Ihr Name"
  data-phone-placeholder="Ihre Telefonnummer"
  data-submit-text="Anruf bekommen"
  data-success-title="Vielen Dank!"
  data-success-message="Wir werden Sie in Kürze unter der angegebenen Nummer kontaktieren."
  data-greeting-text="Hallo, mein Name ist Petra von HalloPetra. Sie haben gerade über unsere Website um einen Rückruf gebeten."
  data-outgoing-phone-number="+49123456789"
  data-hint-text="Mit dem Absenden stimmen Sie unseren Nutzungsbedingungen zu."
  data-hint-link-text="Mehr erfahren"
  data-hint-link-url="https://your-domain.com/terms"
  data-extra-input-fields='[{"type":"email","required":true,"label":"E-Mail Adresse","placeholder":"Ihre E-Mail eingeben"},{"type":"address","label":"Vollständige Adresse","placeholder":"Straße, PLZ, Ort"}]'
></script>
```

### Optional Extra Fields

The widget supports additional optional fields through the `extraInputFields` configuration:

```javascript
extraInputFields: [
  { 
    type: "email", 
    required: true, // Makes the field mandatory
    label: "E-Mail Adresse", // Custom label
    placeholder: "Ihre E-Mail eingeben" // Custom placeholder
  },
  { 
    type: "address", 
    required: false, // Optional field
    label: "Vollständige Adresse", 
    placeholder: "Straße, PLZ, Ort"
  }
]
```

Currently supported field types:
- `email`: Adds an email input field with validation
- `address`: Adds a text input field for address information

Each field can be configured with:
- `type`: The type of field (required)
- `required`: Whether the field is mandatory (default: false)
- `label`: Custom label text
- `placeholder`: Custom placeholder text

When using data attributes, pass the configuration as a JSON string:

```html
data-extra-input-fields='[{"type":"email","required":true,"label":"E-Mail Adresse","placeholder":"Ihre E-Mail eingeben"},{"type":"address","label":"Vollständige Adresse","placeholder":"Straße, PLZ, Ort"}]'
```

### Required Parameters

The widget requires the following parameter:

- **customerId**: Your unique customer identifier provided by HalloPetra. Without this parameter, the form submission will fail and display an error message.

### API Integration

The widget automatically sends form data to the HalloPetra API when a user submits the form. The data is sent to `https://api.hallopetra.de/web-widget/request-call` with the following payload:

```json
{
  "name": "User's name",
  "phone": "+491234567890",
  "customerId": "your-customer-id",
  "url": "Current page URL",
  "userAgent": "Browser user agent",
  "greetingText": "Hello, this is Petra from HalloPetra. You recently requested a call back through our website.",
  "outgoingPhoneNumber": "+49123456789",
  "email": "user@example.com",
  "address": "User's address details"
}
```

The `outgoingPhoneNumber` field is only included if it is configured. The `email` and `address` fields are only included if they are configured via `extraInputFields` and the user provides values.

If the submission is successful, the success screen will be displayed. If the API responds with a message, it will be shown in the success screen.

If the submission fails, an error message will be displayed to the user.

### Speech Bubble Behavior

The speech bubble appears 5 seconds after the widget is loaded and disappears:
- After 30 seconds automatically
- When the user clicks anywhere on the page
- When the user clicks on the widget button to open the form

This creates an engaging but non-intrusive way to invite visitors to interact with the widget.

### Success Screen

After submitting the form, a success screen is displayed with:
- A green checkmark icon
- A thank you message
- Information that the user will be contacted soon
- A "Powered by HalloPetra" attribution with a link to the website

### Design Customization

The widget uses the Inter font family and a clean, modern design with:
- A circular light blue (#E1EFFE) button displaying only the Petra logo
- A friendly speech bubble that appears after 5 seconds
- Form fields with validation and error messages (only shown after submission attempt)
- An optional hint text section with customizable content and link
- Disabled submit button until form validation passes
- Country code dropdown for phone numbers

If you want to further customize the appearance, you can add custom CSS to your page:

```css
/* Customize button appearance */
.contact-widget-btn {
  background-color: #your-color !important;
  width: 70px !important;
  height: 70px !important;
}

/* Customize logo size */
.contact-widget-btn img {
  width: 65px !important;
  height: 65px !important;
}

/* Customize speech bubble */
.speech-bubble {
  background-color: #your-color !important;
  color: #fff !important;
}

/* Customize form appearance */
.contact-popup {
  width: 350px !important;
}

/* Customize submit button */
.submit-btn:not(:disabled) {
  background-color: #your-color !important;
}

/* Customize success screen */
.success-icon {
  background-color: #your-color !important;
}

/* Customize hint text */
.hint-text a {
  color: #your-color !important;
}
```