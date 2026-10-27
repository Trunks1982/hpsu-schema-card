class HpsuSchemaCard extends HTMLElement {
  // Zwingend erforderlich für Lovelace Custom Cards!
  setConfig(config) {
    this._config = config;
  }

  set hass(hass) {
    this._hass = hass;
    
    if (!this.content) {
      this.innerHTML = `
        <ha-card header="Rotex HPSU Schema">
          <div style="padding: 0; overflow: hidden;">
            <iframe src="/local/hpsu-schema.html?v=${Date.now()}" style="width:100%; height:750px; border:none;"></iframe>
          </div>
        </ha-card>
      `;
      this.content = true;
    }
  }

  getConfigSize() {
    return 3;
  }
}

customElements.define('hpsu-schema-card', HpsuSchemaCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "hpsu-schema-card",
  name: "Rotex HPSU Schema Card",
  description: "Ein dynamisches Anlagenschema für die Rotex HPSU."
});
