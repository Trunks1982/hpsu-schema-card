class HpsuSchemaCard extends HTMLElement {
  setConfig(config) {
    this._config = config;
  }

  set hass(hass) {
    this._hass = hass;

    if (!this.content) {
      const htmlUrl = `/hacsfiles/hpsu-schema-card/hpsu-schema.html?v=${Date.now()}`;

      this.innerHTML = `
      <style>
      ha-card {
        background: transparent !important;
        box-shadow: none !important;
        border: none !important;
        height: 100% !important;
        display: flex !important;
        flex-direction: column !important;
      }
      .card-content {
        flex: 1 !important;
        height: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
      }
      iframe {
        width: 100% !important;
        height: 100% !important;
        border: none !important;
        display: block !important;
      }
      </style>
      <ha-card>
      <div class="card-content">
      <iframe src="${htmlUrl}"></iframe>
      </div>
      </ha-card>
      `;
      this.content = true;
    }
  }

  getCardSize() {
    return 6;
  }

  // Definiert einen leeren Editor, damit HA den Layout-Tab und Größen-Editor freigibt
  static getConfigElement() {
    return document.createElement("hpsu-schema-card-editor");
  }

  static getStubConfig() {
    return {};
  }
}

// Dummy-Editor-Klasse, die den Layout-Reiter in Home Assistant freischaltet
class HpsuSchemaCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = config;
  }
  set hass(hass) {
    this._hass = hass;
  }
}

customElements.define('hpsu-schema-card', HpsuSchemaCard);
customElements.define('hpsu-schema-card-editor', HpsuSchemaCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "hpsu-schema-card",
  name: "Rotex HPSU Schema Card",
  description: "Ein dynamisches Anlagenschema für die Rotex HPSU.",
  preview: true,
  configurable: true
});
