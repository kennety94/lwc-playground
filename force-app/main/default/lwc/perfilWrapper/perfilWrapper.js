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
        subtitle: 'Vivinho 1 identifica que o cliente é um bom pagador'
      },
      {
        colorName: 'Verde',
        color1: 'green',
        color2: 'green',
        subtitle: 'Vivinho 2 identifica que o cliente é gamer'
      },
      {
        colorName: 'Crepusculo',
        color1: '#F65',
        color2: '#FF6',
        subtitle: 'Vivinho 3 identifica que o cliente é fraudador'
      },
    ]
  };

  handleHoverProfile(event){
    publish(this.messageContext, PROFILE_SELECTED, {
      profileSelected: event.detail.subtitle
    });
  }

  handleLeave(){
    this.template.querySelector('c-profile-subtitle').changeToDefaultSubtitle();
  }

}