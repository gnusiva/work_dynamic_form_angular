import { DynamicFormInput } from "../app.component";

export const MockInput: DynamicFormInput[] = [
  { displayLabel: 'First Name', fieldType: 'text', value: 'asdf', required: true, validationLabel: 'Please enter name' },

  { displayLabel: 'select one option', fieldType: 'checkbox', value: false, required: true, validationLabel: 'Please select checkbox' },

  { displayLabel: 'Enter Email', fieldType: 'email', value: '', required: true, validationLabel: 'Please enter email',
    validationRegex: '\\S+@\\S+\\.\\S+' },

  // tslint:disable-next-line: max-line-length
  { displayLabel: 'select one option', fieldType: 'select', value: '2', required: true, validationLabel: 'Please select atleast one option.',
    options: [{id: '1', label: 'option1'}, {id: '2', label: 'option2'}, {id: '3', label: 'option3'}] },

  { displayLabel: 'select one option', fieldType: 'radio', value: '', required: true, validationLabel: 'Please select one..',
    options: [{id: '1', label: 'option1'}, {id: '2', label: 'option2'}, {id: '3', label: 'option3'}] },

  { displayLabel: 'select a date', fieldType: 'date', value: '', required: true, validationLabel: 'Please select date.' },

  { displayLabel: 'Enter a number', fieldType: 'number', value: '', required: true, validationLabel: 'Please select date.' },

]
