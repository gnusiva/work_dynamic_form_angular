import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { DynamicFormInput } from '../app.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges {

  @Input() fields: DynamicFormInput[] = [];


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
        item.formControl.setValidators(validator);
      });
    }
  }

}
