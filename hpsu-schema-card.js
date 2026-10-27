class HpsuSchemaCard extends HTMLElement {
  set hass(hass) {
    if (!this.content) {
      this.innerHTML = `
        <ha-card header="Rotex HPSU Schema">
          <div style="padding: 0; overflow: hidden; width: 100%; height: 800px;">
            <iframe id="hpsuFrame" style="width:100%; height:100%; border:none;"></iframe>
          </div>
        </ha-card>
      `;
      
      // HTML-Inhalt direkt dynamisch in das iFrame schreiben
      const iframe = this.querySelector('#hpsuFrame');
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      
      doc.open();
      doc.write(`
        <!doctype html>
        <html lang="de">
        <head>
          <meta charset="utf-8">
          <!-- HIER DEinen KOMPLETTEN HTML- UND CSS-CODE DER HPSU EINTRAGEN -->
        </head>
        <body>
          <!-- Dein kompletter SVG- und Script-Inhalt -->
        </body>
        </html>
      `);
      doc.close();

      this.content = true;
    }
  }

  getConfigSize() {
    return 4;
  }
}

customElements.define('hpsu-schema-card', HpsuSchemaCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "hpsu-schema-card",
  name: "Rotex HPSU Schema Card",
  description: "Ein dynamisches Anlagenschema für die Rotex HPSU."
});
