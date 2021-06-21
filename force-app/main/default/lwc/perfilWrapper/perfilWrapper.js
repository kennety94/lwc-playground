import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';

import PROFILE_SELECTED from '@salesforce/messageChannel/ProfileSelected__c';

export default class PerfilWrapper extends LightningElement {

  @wire(MessageContext)
  messageContext;

  vivinhoInfos = {
    vivinhos: [
      {
        colorName: 'Azul',
        color1: 'blue',
        color2: 'blue',
        tag: 'fill: blue',
        subtitle: 'Vivinho 1 identifica que o cliente é um bom pagador'
      },
      {
        colorName: 'Verde',
        color1: 'green',
        color2: 'green',
        tag: 'fill: green',
        subtitle: 'Vivinho 2 identifica que o cliente é gamer'
      },
      {
        colorName: 'Crepusculo',
        color1: '#F65',
        color2: '#FF6',
        tag: 'fill: #9403fc',
        subtitle: 'Vivinho 3 identifica que o cliente é fraudador'
      },
    ]
  };

  handleHoverProfile(event) {
    publish(this.messageContext, PROFILE_SELECTED, {
      profileSelected: event.detail.subtitle
    });
  }

  handleLeave() {
    this.template.querySelector('c-profile-subtitle').changeToDefaultSubtitle();
  }

  addColorStyle() {
    var vivinhos = this.vivinhoInfos.vivinhos.map(item => {
      return {
        colorName: item.colorName,
        color1: item.color1,
        color2: item.color2,
        tag: 'fill: ' + item.color1,
        subtitle: item.subtitle,
      }
    });
  }

}