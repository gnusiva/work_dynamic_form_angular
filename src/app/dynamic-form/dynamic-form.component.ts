import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher, ThemePalette } from '@angular/material/core';
import { DynamicFormInput } from '../app.component';
import { faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';


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
export class DynamicFormComponent implements OnInit, OnChanges, AfterViewInit , OnDestroy {

  @Input() fields: DynamicFormInput[] = [];
  @Output() isAllValid = new EventEmitter();
  matcher = new MyErrorStateMatcher();
  fg = new FormGroup({});
  fgSubscription: Subscription;

  faCheckCircle = faCheckCircle;
  faExclamationCircle = faExclamationCircle;

  constructor(public cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {

    if ( this.fgSubscription ) { this.fgSubscription.unsubscribe(); }
    Object.keys(this.fg.controls).forEach( item => this.fg.removeControl(item));

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
        this.fg.addControl( 'n' + Math.random(), item.formControl);
      });
      this.cdr.detectChanges();
      this.fgSubscription = this.fg.valueChanges.subscribe( (d) => {
        let valid = true;
        this.fields.forEach(element => {
          if ( ! element.formControl.valid ){
            valid = false;
          }
        });
        this.isAllValid.emit(valid);
      });

    }
  }

  ngAfterViewInit(): void {
    let valid = true;
    this.fields.forEach( item => {
      item.formControl.markAsTouched();
      this.cdr.detectChanges();
      if ( !item.formControl.valid ) { valid = false; }
    });
    this.isAllValid.emit(valid);
  }

  onSubmit(event): void {
    event.preventDefault();
    this.fields.forEach( item => item.formControl.markAsTouched());
  }

  ngOnDestroy(): void {
    if ( this.fgSubscription ) { this.fgSubscription.unsubscribe(); }
  }

}
