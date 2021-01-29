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
'week';
export interface DynamicFormInput {
  field?: string;
  fieldType: DynamicFieldType;
  displayLabel: string;
  required?: boolean;
  validationRegex?: any;
  validationLabel?: string;
  value: string;
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

  emailRegex = '^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$';
  simpleEmailRegex = '\\S+@\\S+\\.\\S+';

  dymanicFormInput: DynamicFormInput[] = [
    { displayLabel: 'First Name', fieldType: 'text', value: 'asdf', required: true, validationLabel: 'Please enter name' },
    { displayLabel: 'Email', fieldType: 'text', value: '', required: true, validationLabel: 'Please enter email',
      validationRegex: this.simpleEmailRegex },
  ];

}
