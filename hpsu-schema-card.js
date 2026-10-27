class HpsuSchemaCard extends HTMLElement {
  set hass(hass) {
    if (!this.content) {
      this.innerHTML = `
        <ha-card header="Rotex HPSU Schema">
          <div style="padding: 0; overflow: hidden;">
            <iframe src="/local/hpsu-schema.html?v=${Date.now()}" style="width:100%; height:700px; border:none;"></iframe>
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
