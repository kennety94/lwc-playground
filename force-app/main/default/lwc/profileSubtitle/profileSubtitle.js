import { LightningElement, wire, api } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import PROFILE_SELECTED from '@salesforce/messageChannel/ProfileSelected__c';

export default class ProfileSubtitle extends LightningElement {
  defaultSubtitle = 'Passe o mouse sobre cada vivinho para detalhes.';
  subtitle = this.defaultSubtitle;

  @wire(MessageContext)
  messageContext;

  profileSelectedSubscription;

  connectedCallback(){
    this.profileSelectedSubscription = subscribe(
      this.messageContext,
      PROFILE_SELECTED,
      (message) => this.handleSelectedProfile(message)
    );
  }

  handleSelectedProfile(message) {
    var aux = {...message };
    this.subtitle = aux.profileSelected;
  }

  @api
  changeToDefaultSubtitle(){
    this.subtitle = this.defaultSubtitle;
  }

}