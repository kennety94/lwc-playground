import { LightningElement, api, wire } from 'lwc';

import SF_LOGO from  '@salesforce/resourceUrl/SF_Logo';

export default class ProfileItem extends LightningElement {
  @api profile;
  svgURL = `${SF_LOGO}#sflogo`;

  connectedCallback() {
    if(this.profile) {
      // document.documentElement.style.setProperty('--vivinho-default-color', this.profile.color1);
      // var propName = '--vivinho-' + this.profile.colorName;
      // document.documentElement.style.setProperty(propName, this.profile.color1);
    }
  }

  handleHover(){
    const hoverEvt = new CustomEvent('hovered', {
      detail: this.profile
    });
    this.dispatchEvent(hoverEvt);
  }

  handleOut(){
    this.dispatchEvent(new CustomEvent('leave'));
  }

}