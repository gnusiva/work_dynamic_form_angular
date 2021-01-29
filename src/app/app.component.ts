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
  validationRegex?: string;
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

  dymanicFormInput: DynamicFormInput[] = [
    { displayLabel: 'input', fieldType: 'text', value: 'asdf', required: true, validationLabel: 'Please enter name' },
  ];

}
