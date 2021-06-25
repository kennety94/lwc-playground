import { LightningElement, track } from 'lwc';

export default class ScreenSteps extends LightningElement {

  currentStep = 1;

  value = '';
  valueList = 'inProgress';

  get options() {
      return [
          { label: 'Sales', value: 'option1' },
          { label: 'Force', value: 'option2' },
      ];
  }


  get optionsList() {
      return [
          { label: 'New', value: 'new' },
          { label: 'In Progress', value: 'inProgress' },
          { label: 'Finished', value: 'finished' },
      ];
  }

  get showPreviousBtn(){
    return this.currentStep != 1;
  }

  get showNextBtn(){
    return this.currentStep != 3;
  }

  handleChange(event) {
      this.valueList = event.detail.value;
  }

  handlePreviousStep(){
    this.template.querySelector('div.step-'+this.currentStep).classList.add('slds-hide');
    this.currentStep -= 1;
    this.template.querySelector('div.step-'+this.currentStep).classList.remove('slds-hide');
  }

  handleNextStep(){
    this.template.querySelector('div.step-'+this.currentStep).classList.add('slds-hide');
    this.currentStep += 1;
    this.template.querySelector('div.step-'+this.currentStep).classList.remove('slds-hide');
  }
}