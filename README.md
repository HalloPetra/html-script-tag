# Contact Form Widget

A simple, customizable contact form widget that can be embedded on any website. The widget displays a button with the Petra logo that, when clicked, shows a popup with a contact form where visitors can enter their name and phone number to request a call back. A friendly speech bubble appears after 5 seconds saying "Wie darf ich Ihnen helfen?".

## Features

- Lightweight and easy to embed
- Modern design with Inter font
- Customizable appearance and text
- Interactive speech bubble that appears after 5 seconds and disappears after 30 seconds
- Country selection for phone numbers (Germany, Austria, Switzerland)
- Input validation with helpful error messages (only shown after form submission)
- Success screen with "Powered by HalloPetra" attribution
- Compliance text with customizable links to terms and privacy policy
- Form description to set clear expectations
- Responsive and mobile-friendly
- Disabled submit button until valid input is provided
- E.164 phone number format compliance

## How to Use

### Basic Installation

1. Add the script to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/dist/assets/index.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize the widget with default settings
    const widget = ContactWidget.init();
  });
</script>
```

### Auto-initialization

You can also auto-initialize the widget by adding a data attribute to the script tag:

```html
<script src="https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/dist/assets/index.js" data-contact-widget-auto-init></script>
```

### Customization

You can customize the widget by passing configuration options:

```html
<script src="https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/dist/assets/index.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const widget = ContactWidget.init({
      // Button and speech bubble customization
      logoSrc: 'https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/assets/logo.png', // Custom logo for the button
      speechBubbleText: 'Wie darf ich Ihnen helfen?', // Text in the speech bubble
      
      // Form title and description
      formTitle: 'Wir rufen Sie zurück', // Heading for the form
      formDescription: 'Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren.', // Description below the title
      
      // Form fields
      nameLabel: 'Name', // Label for the name field
      phoneLabel: 'Telefonnummer', // Label for the phone field
      namePlaceholder: 'Ihr Name', // Placeholder for name input
      phonePlaceholder: 'Ihre Telefonnummer', // Placeholder for phone input
      
      // Button and messages
      submitText: 'Anruf bekommen', // Text for the submit button
      successMessage: 'Vielen Dank! Wir werden Sie in Kürze kontaktieren.', // Message shown after form submission
      
      // Legal links
      agbUrl: 'https://your-domain.com/agb', // URL to your terms and conditions
      datenschutzUrl: 'https://your-domain.com/datenschutz', // URL to your privacy policy
      
      // Callbacks
      onSubmit: function(data) {
        // Custom callback function for form submission
        console.log('Form submitted:', data);
        
        // data contains: 
        // - name: The user's name
        // - phoneNumber: The full phone number in E.164 format (e.g. +491234567890)
        
        // You can send the data to your server using fetch or XMLHttpRequest
        fetch('https://your-api.com/submit-contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
          console.log('Success:', result);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      }
    });
  });
</script>
```

You can also use data attributes for basic configuration:

```html
<script 
  src="https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/dist/assets/index.js" 
  data-contact-widget-auto-init
  data-logo-src="https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/assets/logo.png"
  data-speech-bubble-text="Wie darf ich Ihnen helfen?"
  data-form-title="Wir rufen Sie zurück"
  data-form-description="Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren."
  data-name-label="Name"
  data-phone-label="Telefonnummer"
  data-name-placeholder="Ihr Name"
  data-phone-placeholder="Ihre Telefonnummer"
  data-submit-text="Anruf bekommen"
  data-success-message="Vielen Dank! Wir werden Sie in Kürze kontaktieren."
  data-agb-url="https://your-domain.com/agb"
  data-datenschutz-url="https://your-domain.com/datenschutz"
></script>
```

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
- A compliance text section with legal links
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

/* Customize compliance text */
.compliance-text a {
  color: #your-color !important;
}
```

### Validation Features

The widget includes the following validation features:

1. **Name validation**: Requires at least 2 characters
2. **Phone number validation**:
   - Specific rules for each country code
   - Germany (+49): 10-11 digits
   - Austria (+43): 9-10 digits
   - Switzerland (+41): 9 digits
3. **E.164 format**: Automatically formats the phone number to E.164 standard

The submit button remains disabled until all validations pass, but error messages are only shown after the user attempts to submit the form.

### API Methods

The widget object returned by `ContactWidget.init()` provides the following methods:

```javascript
// Show the popup programmatically
widget.showPopup();

// Hide the popup programmatically
widget.hidePopup();

// Show the speech bubble programmatically
widget.showSpeechBubble();

// Hide the speech bubble programmatically
widget.hideSpeechBubble();

// Update widget configuration
widget.updateConfig({
  speechBubbleText: 'New speech bubble text'
});
```

## Building from Source

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. The built files will be in the `dist` directory

## Demo

Open the `index.html` file in your browser to see a demo of the contact form widget.

## Browser Compatibility

The contact form widget is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

MIT
