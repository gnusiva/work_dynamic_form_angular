import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher, ThemePalette } from '@angular/material/core';
import { DynamicFormInput } from '../app.component';
import { faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control && control.invalid;
  }
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges {

  @Input() fields: DynamicFormInput[] = [];
  matcher = new MyErrorStateMatcher();

  faCheckCircle = faCheckCircle;
  faExclamationCircle = faExclamationCircle;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if ( this.fields.length > 0) {
      this.fields.map( (item) => {
        item.formControl = new FormControl(item.value);
        const validator = [];
        if ( item.required ) {
          validator.push(Validators.required);
        }
        if ( item.validationRegex ) {
          validator.push(Validators.pattern( new RegExp(item.validationRegex)));
        }
        if ( item.required && item.fieldType === 'checkbox' ) {
          validator.push( (control: AbstractControl) => control.value ? null : {required: false} );
        }
        item.formControl.setValidators(validator);
      });
    }
  }

  onSubmit(event): void {
    event.preventDefault();
    this.fields.forEach( item => item.formControl.markAsTouched());
  }

}
