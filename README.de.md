# Kontaktformular Widget

Ein einfaches, anpassbares Kontaktformular-Widget, das in jede Website eingebettet werden kann. Das Widget zeigt einen Button mit dem Petra-Logo an, der bei Klick ein Popup mit einem Kontaktformular öffnet, in dem Besucher ihren Namen und ihre Telefonnummer eingeben können, um einen Rückruf anzufordern. Nach 5 Sekunden erscheint eine freundliche Sprechblase mit dem Text "Wie darf ich Ihnen helfen?".

## Funktionen

- Leichtgewichtig und einfach einzubetten
- Modernes Design mit Inter-Schrift
- Anpassbares Erscheinungsbild und Text
- Interaktive Sprechblase, die nach 5 Sekunden erscheint und nach 30 Sekunden verschwindet
- Länderauswahl für Telefonnummern (Deutschland, Österreich, Schweiz)
- Optionale E-Mail- und Adressfelder
- Eingabevalidierung mit hilfreichen Fehlermeldungen (werden erst nach dem Absenden des Formulars angezeigt)
- Erfolgsbildschirm mit "Bereitgestellt von HalloPetra"-Hinweis
- Optionaler Hinweistext mit anpassbarem Link
- Formularbeschreibung zur klaren Erwartungssetzung
- Responsiv und mobilgerätefreundlich
- Deaktivierter Submit-Button bis gültige Eingaben vorliegen
- Konformität mit dem E.164-Telefonnummernformat

## Anwendung

### Grundinstallation

1. Fügen Sie das Skript zu Ihrer HTML-Datei hinzu:

```html
<script src="https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@latest/dist/assets/index.js"></script>
<script>
  // Konfigurieren Sie das Widget mit Ihrer companyRecordId - ERFORDERLICH
  configureContactWidget({
    companyRecordId: 'IHRE_COMPANY_RECORD_ID', // Ersetzen Sie dies mit Ihrer spezifischen ID - ERFORDERLICH
    apiUrl: 'https://ihre-custom-api.beispiel.de/endpunkt' // Optional: Überschreiben Sie den Standard-API-Endpunkt
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Widget mit Standardeinstellungen initialisieren
    const widget = ContactWidget.init({
      customerId: "ihre-kunden-id" // Erforderlich
    });
  });
</script>
```

### Automatische Initialisierung

Sie können das Widget auch automatisch initialisieren, indem Sie Datenattribute zum Script-Tag hinzufügen:

```html
<script 
  src="https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@latest/dist/assets/index.js" 
  data-contact-widget-auto-init
  data-customer-id="ihre-kunden-id"
></script>
```

**Wichtig**: Das `data-customer-id` Attribut ist erforderlich. Ohne dieses wird das Widget eine Fehlermeldung anzeigen, wenn versucht wird, das Formular abzusenden.

### Anpassung

Sie können das Widget anpassen, indem Sie Konfigurationsoptionen übergeben:

```html
<script src="https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@latest/dist/assets/index.js"></script>
<script>
  // Konfigurieren Sie das Widget mit erforderlichen und optionalen Einstellungen
  configureContactWidget({
    companyRecordId: 'IHRE_COMPANY_RECORD_ID', // Erforderlich: Ihre eindeutige Unternehmenskennung
    apiUrl: 'https://ihre-custom-api.beispiel.de/endpunkt', // Optional: Benutzerdefinierter API-Endpunkt
    
    // Zusätzliche optionale Anpassungen...
  });

  document.addEventListener('DOMContentLoaded', function() {
    const widget = ContactWidget.init({
      // Erforderliche Parameter
      customerId: 'ihre-kunden-id', // Ihre eindeutige Kundenkennung (erforderlich)
      
      // API-Konfiguration
      apiUrl: 'https://api.hallopetra.de/web-widget/request-call', // API-Endpunkt für Anrufanfragen
      
      // Button- und Sprechblasenanpassung
      logoSrc: 'https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@latest/assets/logo.png', // Benutzerdefiniertes Logo für den Button
      speechBubbleText: 'Wie darf ich Ihnen helfen?', // Text in der Sprechblase
      
      // Formular-Titel und Beschreibung
      formTitle: 'Wir rufen Sie zurück', // Überschrift für das Formular
      formDescription: 'Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren.', // Beschreibung unter dem Titel
      
      // Formularfelder
      nameLabel: 'Name', // Bezeichnung für das Namensfeld
      phoneLabel: 'Telefonnummer', // Bezeichnung für das Telefonfeld
      namePlaceholder: 'Ihr Name', // Platzhalter für die Namenseingabe
      phonePlaceholder: 'Ihre Telefonnummer', // Platzhalter für die Telefoneingabe
      
      // Konfiguration optionaler Felder
      extraInputFields: [
        { 
          type: "email", 
          required: true, // Auf true setzen, wenn das Feld Pflicht ist
          label: "E-Mail Adresse", // Benutzerdefinierte Bezeichnung
          placeholder: "Ihre E-Mail eingeben" // Benutzerdefinierter Platzhalter
        },
        { 
          type: "address", 
          required: false, // Auf false setzen (oder weglassen) für optionale Felder
          label: "Vollständige Adresse",
          placeholder: "Straße, PLZ, Ort"
        }
      ],
      
      // Button und Nachrichten
      submitText: 'Anruf bekommen', // Text für den Submit-Button
      
      // Erfolgsbildschirm-Anpassung
      successTitle: 'Vielen Dank!', // Titel auf dem Erfolgsbildschirm
      successMessage: 'Wir werden Sie in Kürze unter der angegebenen Nummer kontaktieren.', // Nachricht auf dem Erfolgsbildschirm
      
      // Anruf-Anpassung
      greetingText: 'Hallo, mein Name ist Petra von HalloPetra. Sie haben gerade über unsere Website um einen Rückruf gebeten.', // Die Begrüßung, die der Assistent beim Anruf sagen wird
      
      // Telefonnummer-Konfiguration
      outgoingPhoneNumber: '+49123456789', // Optional: Die Telefonnummer, von der aus der Anruf getätigt wird
      
      // Hinweistext-Anpassung (komplett optional)
      hintText: 'Mit dem Absenden stimmen Sie unseren Nutzungsbedingungen zu.', // Optional: Hinweistext vor dem Submit-Button (wird nicht angezeigt, wenn nicht angegeben)
      hintLinkText: 'Mehr erfahren', // Optional: Text für den Link nach dem Hinweistext
      hintLinkUrl: 'https://ihre-domain.de/nutzungsbedingungen', // Optional: URL für den Hinweistext-Link
      
      // Callbacks
      onSubmit: function(data) {
        // Benutzerdefinierte Callback-Funktion für die Formularübermittlung
        console.log('Formular übermittelt:', data);
        
        // data enthält: 
        // - name: Der Name des Benutzers
        // - phoneNumber: Die vollständige Telefonnummer im E.164-Format (z.B. +491234567890)
        // - email: Die E-Mail-Adresse (wenn angegeben und in extraInputFields konfiguriert)
        // - address: Die Adresse (wenn angegeben und in extraInputFields konfiguriert)
        // - success: Boolean, der angibt, ob die Übermittlung erfolgreich war
        // - error: Fehlerobjekt, wenn success false ist
      }
    });
  });
</script>
```

Sie können auch Datenattribute für die grundlegende Konfiguration verwenden:

```html
<script 
  src="https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@latest/dist/assets/index.js" 
  data-contact-widget-auto-init
  data-customer-id="ihre-kunden-id"
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
  data-hint-link-url="https://ihre-domain.de/nutzungsbedingungen"
  data-extra-input-fields='[{"type":"email","required":true,"label":"E-Mail Adresse","placeholder":"Ihre E-Mail eingeben"},{"type":"address","label":"Vollständige Adresse","placeholder":"Straße, PLZ, Ort"}]'
></script>
```

### Optionale zusätzliche Felder

Das Widget unterstützt zusätzliche optionale Felder über die `extraInputFields`-Konfiguration:

```javascript
extraInputFields: [
  { 
    type: "email", 
    required: true, // Macht das Feld zur Pflichtangabe
    label: "E-Mail Adresse", // Benutzerdefinierte Bezeichnung
    placeholder: "Ihre E-Mail eingeben" // Benutzerdefinierter Platzhalter
  },
  { 
    type: "address", 
    required: false, // Optionales Feld
    label: "Vollständige Adresse", 
    placeholder: "Straße, PLZ, Ort"
  }
]
```

Derzeit unterstützte Feldtypen:
- `email`: Fügt ein E-Mail-Eingabefeld mit Validierung hinzu
- `address`: Fügt ein Texteingabefeld für Adressinformationen hinzu

Jedes Feld kann mit folgenden Optionen konfiguriert werden:
- `type`: Der Typ des Feldes (erforderlich)
- `required`: Ob das Feld verpflichtend ist (Standard: false)
- `label`: Benutzerdefinierter Bezeichnungstext
- `placeholder`: Benutzerdefinierter Platzhaltertext

Bei Verwendung von Datenattributen übergeben Sie die Konfiguration als JSON-String:

```html
data-extra-input-fields='[{"type":"email","required":true,"label":"E-Mail Adresse","placeholder":"Ihre E-Mail eingeben"},{"type":"address","label":"Vollständige Adresse","placeholder":"Straße, PLZ, Ort"}]'
```

### Verhalten der Sprechblase

Die Sprechblase erscheint 5 Sekunden nach dem Laden des Widgets und verschwindet:
- Nach 30 Sekunden automatisch
- Wenn der Benutzer irgendwo auf der Seite klickt
- Wenn der Benutzer auf den Widget-Button klickt, um das Formular zu öffnen

Dies schafft eine ansprechende, aber nicht aufdringliche Möglichkeit, Besucher zur Interaktion mit dem Widget einzuladen.

### Erfolgsbildschirm

Nach dem Absenden des Formulars wird ein Erfolgsbildschirm angezeigt mit:
- Einem grünen Häkchen-Symbol
- Einer Dankesnachricht
- Informationen, dass der Benutzer bald kontaktiert wird
- Einem "Bereitgestellt von HalloPetra"-Hinweis mit einem Link zur Website

### Design-Anpassung

Das Widget verwendet die Inter-Schriftfamilie und ein klares, modernes Design mit:
- Einem kreisförmigen hellblauen (#E1EFFE) Button, der nur das Petra-Logo zeigt
- Einer freundlichen Sprechblase, die nach 5 Sekunden erscheint
- Formularfeldern mit Validierung und Fehlermeldungen (werden erst nach dem Versuch des Absendens angezeigt)
- Einem optionalen Hinweistext-Bereich mit anpassbarem Inhalt und Link
- Deaktiviertem Submit-Button bis die Formularvalidierung bestanden ist
- Ländervorwahl-Dropdown für Telefonnummern

Wenn Sie das Erscheinungsbild weiter anpassen möchten, können Sie benutzerdefiniertes CSS zu Ihrer Seite hinzufügen:

```css
/* Button-Erscheinungsbild anpassen */
.contact-widget-btn {
  background-color: #ihre-farbe !important;
  width: 70px !important;
  height: 70px !important;
}

/* Logo-Größe anpassen */
.contact-widget-btn img {
  width: 65px !important;
  height: 65px !important;
}

/* Sprechblase anpassen */
.speech-bubble {
  background-color: #ihre-farbe !important;
  color: #fff !important;
}

/* Formular-Erscheinungsbild anpassen */
.contact-popup {
  width: 350px !important;
}

/* Submit-Button anpassen */
.submit-btn:not(:disabled) {
  background-color: #ihre-farbe !important;
}

/* Erfolgsbildschirm anpassen */
.success-icon {
  background-color: #ihre-farbe !important;
}

/* Hinweistext anpassen */
.hint-text a {
  color: #ihre-farbe !important;
}
```

### Validierungsfunktionen

Das Widget enthält die folgenden Validierungsfunktionen:

1. **Namensvalidierung**: Erfordert mindestens 2 Zeichen
2. **Telefonnummernvalidierung**:
   - Spezifische Regeln für jede Ländervorwahl
   - Deutschland (+49): 10-11 Ziffern
   - Österreich (+43): 9-10 Ziffern
   - Schweiz (+41): 9 Ziffern
   - **Automatische Formatierung**: Führende Nullen und Bindestriche werden automatisch entfernt
   - Visuelle Rückmeldung bei angewendeter Formatierung
3. **E-Mail-Validierung** (falls aktiviert):
   - Überprüft das Standard-E-Mail-Format mit @ und Domain
   - Validiert nur, wenn das Feld erforderlich ist oder Inhalt hat
4. **Adressvalidierung** (falls aktiviert):
   - Erfordert mindestens 5 Zeichen, wenn das Feld erforderlich ist oder Inhalt hat
5. **E.164-Format**: Formatiert die Telefonnummer automatisch nach dem E.164-Standard

Der Submit-Button bleibt deaktiviert, bis alle Validierungen bestanden sind, aber Fehlermeldungen werden erst angezeigt, nachdem der Benutzer versucht hat, das Formular abzusenden.

### API-Methoden

Das von `ContactWidget.init()` zurückgegebene Widget-Objekt stellt die folgenden Methoden bereit:

```javascript
// Popup programmatisch anzeigen
widget.showPopup();

// Popup programmatisch ausblenden
widget.hidePopup();

// Sprechblase programmatisch anzeigen
widget.showSpeechBubble();

// Sprechblase programmatisch ausblenden
widget.hideSpeechBubble();

// Widget-Konfiguration aktualisieren
widget.updateConfig({
  speechBubbleText: 'Neuer Sprechblasentext',
  successTitle: 'Vielen Dank für Ihre Anfrage!',
  successMessage: 'Unser Team wird Sie in Kürze kontaktieren.',
  greetingText: 'Hallo, hier ist Petra von HalloPetra. Sie haben kürzlich über unsere Website um einen Rückruf gebeten.'
});
```

## Aus dem Quellcode bauen

1. Repository klonen
2. Abhängigkeiten installieren: `npm install`
3. Projekt bauen: `npm run build`
4. Die gebauten Dateien befinden sich im Verzeichnis `dist`

## Demo

Öffnen Sie die Datei `index.html` in Ihrem Browser, um eine Demo des Kontaktformular-Widgets zu sehen.

## Browser-Kompatibilität

Das Kontaktformular-Widget ist kompatibel mit:
- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)
- Opera (neueste Version)
- Mobile Browser (iOS Safari, Android Chrome)

## Testen

Um zu testen, ob Ihr Widget richtig konfiguriert ist:

1. Stellen Sie sicher, dass Sie Ihre `customerId` in der Konfiguration angegeben haben
2. Klicken Sie auf den Widget-Button, um das Formular zu öffnen
3. Geben Sie einen gültigen Namen und eine gültige Telefonnummer ein
4. Wenn Sie zusätzliche Felder konfiguriert haben, füllen Sie auch diese aus
5. Senden Sie das Formular ab
6. Sie sollten den Erfolgsbildschirm sehen, wenn alles richtig konfiguriert ist

Wenn Sie eine Fehlermeldung bezüglich einer fehlenden Kunden-ID sehen, überprüfen Sie, ob Sie den Parameter `customerId` in Ihrer Konfiguration angegeben haben.

## Lizenz

MIT 

## API-Integration

Das Widget sendet Formulardaten automatisch an den in Ihrer Konfiguration angegebenen API-Endpunkt:
```
https://api.hallopetra.de/web-widget/request-call
```
Dies ist der Standard-Endpunkt, aber Sie können einen benutzerdefinierten Endpunkt mit dem Parameter `apiUrl` konfigurieren.

### Anfrage-Format
Die Daten werden als JSON-Objekt mit der folgenden Struktur gesendet:
```json
{
  "companyRecordId": "IHRE_COMPANY_RECORD_ID",
  "name": "Name des Benutzers",
  "phone": "+491234567890",
  "greetingText": "Hallo, mein Name ist Petra von HalloPetra. Sie haben gerade über unsere Website um einen Rückruf gebeten.",
  "outgoingPhoneNumber": "+49123456789",
  "email": "benutzer@beispiel.de",
  "address": "Adressdaten des Benutzers"
}
```

Wobei:
- `companyRecordId` Ihre eindeutige Unternehmenskennung ist (erforderlich)
- `name` der Name des Benutzers aus dem Formular ist
- `phone` die vollständige Telefonnummer im E.164-Format ist
- `greetingText` die Begrüßung, die der Assistent beim Anruf sagen wird
- `outgoingPhoneNumber` die Telefonnummer ist, von der aus der Anruf getätigt wird
- `email` die E-Mail-Adresse des Benutzers (wenn über extraInputFields konfiguriert und vom Benutzer angegeben)
- `address` die Adressdaten des Benutzers (wenn über extraInputFields konfiguriert und vom Benutzer angegeben)

Das Feld `outgoingPhoneNumber` wird nur aufgenommen, wenn es konfiguriert wurde. Die Felder `email` und `address` werden nur in die Anfrage aufgenommen, wenn sie über `extraInputFields` konfiguriert wurden und der Benutzer Werte dafür angegeben hat.

### Antwortverarbeitung
Das Widget verarbeitet sowohl erfolgreiche als auch fehlgeschlagene API-Antworten:
- Bei Erfolg: Zeigt dem Benutzer den Erfolgsbildschirm an
- Bei Fehler: Zeigt trotzdem den Erfolgsbildschirm an, um eine reibungslose Benutzererfahrung zu gewährleisten, protokolliert den Fehler jedoch in der Konsole

Sie können die Antwortverarbeitung anpassen, indem Sie eine `onSubmit`-Callback-Funktion bereitstellen. 