import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

type DynamicFieldType =
'button' |
'checkbox' |
'color' |
'date' |
'datetime-local'|
'email' |
'file' |
'hidden'|
'image' |
'month' |
'number' |
'password' |
'radio' |
'range' |
'reset' |
'search' |
'submit' |
'tel' |
'text' |
'time' |
'url' |
'week' |
'select';

interface SelectOption {
  label: string;
  id: string;
}
export interface DynamicFormInput {
  field?: string;
  fieldType: DynamicFieldType;
  displayLabel: string;
  required?: boolean;
  validationRegex?: any;
  validationLabel?: string;
  value: any;
  options?: SelectOption[];
  // formType: null;
  // searchType: null;
  // country: null;
  // region: null;
  // region2: null;
  // locationType: null;
  // id: number;
  // modified: string;
  // created: string;
  // deleted: null;
  formControl?: FormControl;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAllValid = false;

  emailRegex = '^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$';
  simpleEmailRegex = '\\S+@\\S+\\.\\S+';

  dymanicFormInput: DynamicFormInput[] = [
    { displayLabel: 'First Name', fieldType: 'text', value: '', required: false, validationLabel: 'Please enter name' },

    { displayLabel: 'First Name', fieldType: 'text', value: '', required: false, validationLabel: 'Please enter name' },

    { displayLabel: 'select one option', fieldType: 'checkbox', value: false, required: true, validationLabel: 'Please select checkbox' },

    { displayLabel: 'Enter Email', fieldType: 'email', value: '', required: true, validationLabel: 'Please enter email',
      validationRegex: this.simpleEmailRegex },

    { displayLabel: 'select one option', fieldType: 'select', value: '2', required: true, validationLabel: 'Please select atleast one option.',
      options: [{id: '1', label: 'option1'}, {id: '2', label: 'option2'}, {id: '3', label: 'option3'}] },

    { displayLabel: 'select one option', fieldType: 'select', value: '', required: true, validationLabel: 'Please select atleast one option.',
      options: [{id: '1', label: 'option1'}, {id: '2', label: 'option2'}, {id: '3', label: 'option3'}] },

    { displayLabel: 'select one option', fieldType: 'radio', value: '', required: true, validationLabel: 'Please select one..',
      options: [{id: '1', label: 'option1'}, {id: '2', label: 'option2'}, {id: '3', label: 'option3'}] },

    { displayLabel: 'select a date', fieldType: 'date', value: '', required: true, validationLabel: 'Please select date.' },

    { displayLabel: 'select a date', fieldType: 'date', value: '', required: false, validationLabel: 'Please select date.' },

    { displayLabel: 'Enter a number', fieldType: 'number', value: '', required: true, validationLabel: 'Please select date.' },

  ];

  onSubmit(event): void {
    event.preventDefault();
    this.dymanicFormInput.forEach( item => item.formControl.markAsTouched());
  }

}
