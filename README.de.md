# Kontaktformular Widget

Ein einfaches, anpassbares Kontaktformular-Widget, das in jede Website eingebettet werden kann. Das Widget zeigt einen Button mit dem Petra-Logo an, der bei Klick ein Popup mit einem Kontaktformular öffnet, in dem Besucher ihren Namen und ihre Telefonnummer eingeben können, um einen Rückruf anzufordern. Nach 5 Sekunden erscheint eine freundliche Sprechblase mit dem Text "Wie darf ich Ihnen helfen?".

## Funktionen

- Leichtgewichtig und einfach einzubetten
- Modernes Design mit Inter-Schrift
- Anpassbares Erscheinungsbild und Text
- Interaktive Sprechblase, die nach 5 Sekunden erscheint und nach 30 Sekunden verschwindet
- Länderauswahl für Telefonnummern (Deutschland, Österreich, Schweiz)
- Eingabevalidierung mit hilfreichen Fehlermeldungen (werden erst nach dem Absenden des Formulars angezeigt)
- Erfolgsbildschirm mit "Bereitgestellt von HalloPetra"-Hinweis
- Einwilligungstext mit anpassbaren Links zu AGB und Datenschutzerklärung
- Formularbeschreibung zur klaren Erwartungssetzung
- Responsiv und mobilgerätefreundlich
- Deaktivierter Submit-Button bis gültige Eingaben vorliegen
- Konformität mit dem E.164-Telefonnummernformat

## Anwendung

### Grundinstallation

1. Fügen Sie das Skript zu Ihrer HTML-Datei hinzu:

```html
<script src="https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/dist/assets/index.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Widget mit Standardeinstellungen initialisieren
    const widget = ContactWidget.init();
  });
</script>
```

### Automatische Initialisierung

Sie können das Widget auch automatisch initialisieren, indem Sie ein Datenattribut zum Script-Tag hinzufügen:

```html
<script src="https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/dist/assets/index.js" data-contact-widget-auto-init></script>
```

### Anpassung

Sie können das Widget anpassen, indem Sie Konfigurationsoptionen übergeben:

```html
<script src="https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/dist/assets/index.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const widget = ContactWidget.init({
      // Button- und Sprechblasenanpassung
      logoSrc: 'https://cdn.jsdelivr.net/gh/HalloPetra/html-script-tag@master/assets/logo.png', // Benutzerdefiniertes Logo für den Button
      speechBubbleText: 'Wie darf ich Ihnen helfen?', // Text in der Sprechblase
      
      // Formular-Titel und Beschreibung
      formTitle: 'Wir rufen Sie zurück', // Überschrift für das Formular
      formDescription: 'Wir werden Sie innerhalb der nächsten Minute unter der angegebenen Telefonnummer kontaktieren.', // Beschreibung unter dem Titel
      
      // Formularfelder
      nameLabel: 'Name', // Bezeichnung für das Namensfeld
      phoneLabel: 'Telefonnummer', // Bezeichnung für das Telefonfeld
      namePlaceholder: 'Ihr Name', // Platzhalter für die Namenseingabe
      phonePlaceholder: 'Ihre Telefonnummer', // Platzhalter für die Telefoneingabe
      
      // Button und Nachrichten
      submitText: 'Anruf bekommen', // Text für den Submit-Button
      successMessage: 'Vielen Dank! Wir werden Sie in Kürze kontaktieren.', // Nachricht nach dem Absenden des Formulars
      
      // Rechtliche Links
      agbUrl: 'https://ihre-domain.de/agb', // URL zu Ihren AGB
      datenschutzUrl: 'https://ihre-domain.de/datenschutz', // URL zu Ihrer Datenschutzerklärung
      
      // Callbacks
      onSubmit: function(data) {
        // Benutzerdefinierte Callback-Funktion für die Formularübermittlung
        console.log('Formular übermittelt:', data);
        
        // data enthält: 
        // - name: Der Name des Benutzers
        // - phoneNumber: Die vollständige Telefonnummer im E.164-Format (z.B. +491234567890)
        
        // Sie können die Daten mit fetch oder XMLHttpRequest an Ihren Server senden
        fetch('https://ihre-api.de/kontakt-senden', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
          console.log('Erfolg:', result);
        })
        .catch(error => {
          console.error('Fehler:', error);
        });
      }
    });
  });
</script>
```

Sie können auch Datenattribute für die grundlegende Konfiguration verwenden:

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
  data-agb-url="https://ihre-domain.de/agb"
  data-datenschutz-url="https://ihre-domain.de/datenschutz"
></script>
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
- Einem Einwilligungstext-Bereich mit rechtlichen Links
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

/* Einwilligungstext anpassen */
.compliance-text a {
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
3. **E.164-Format**: Formatiert die Telefonnummer automatisch nach dem E.164-Standard

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
  speechBubbleText: 'Neuer Sprechblasentext'
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

## Lizenz

MIT 