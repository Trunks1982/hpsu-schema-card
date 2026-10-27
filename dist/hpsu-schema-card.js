class HpsuSchemaCard extends HTMLElement {
  setConfig(config) {
    this._config = config;
  }

  set hass(hass) {
    this._hass = hass;

    if (!this.content) {
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
            <iframe src="url: '/local/hpsu-schema.html'?v=${Date.now()}"></iframe>
          </div>
        </ha-card>
      `;
      this.content = true;
    }
  }

  getConfigSize() {
    return 10;
  }
}

customElements.define('hpsu-schema-card', HpsuSchemaCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "hpsu-schema-card",
  name: "Rotex HPSU Schema Card",
  description: "Ein dynamisches Anlagenschema für die Rotex HPSU."
});
