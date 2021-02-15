import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DynamicFormComponent } from './dynamic-form.component';
import { MockInput } from './dynamic-form.mock';
import { DynamicFormModule } from './dynamic-form.module';

@Component({
  selector: 'app-host-component',
  template: `
    <form>
      <app-dynamic-form [(fields)]="mock" ></app-dynamic-form>
      <button type="submit">submit</button>
    </form>
    `
})
class TestHostComponent {
  mock = MockInput;
}

describe('DynamicFormComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  // let component: DynamicFormComponent;
  // let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormComponent, TestHostComponent ],
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        MatSelectModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FontAwesomeModule,
        DynamicFormModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();

    // fixture = TestBed.createComponent(DynamicFormComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();

  });

  // For text field

  it('for text field should render input element in html with type attribute as text ', () => {
    testHostComponent.mock = [  { displayLabel: 'First Name', fieldType: 'text', value: 'asdf', required: true, validationLabel: 'Please enter name' }  ];
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('input')[0].type).toEqual('text');
  });

  it('for text field should render red color error msg and error icon if value is null and clicked outside ', () => {
    testHostComponent.mock = [  { displayLabel: 'First Name', fieldType: 'text', value: null, required: true, validationLabel: 'Please enter name' }  ];
    testHostFixture.detectChanges();
    testHostComponent.mock[0].formControl.markAsTouched();
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('mat-error')[0]).toBeTruthy();
    expect(compiled.getElementsByTagName('mat-error')[0].innerText).toEqual('Please enter name');
    expect(compiled.getElementsByTagName('fa-icon')[0].getElementsByTagName('svg')[0].className.baseVal).toContain('fa-exclamation-circle');
  });

  it('for text field should render green color tick icon if value is passed and clicked outside', () => {
    testHostComponent.mock = [  { displayLabel: 'First Name', fieldType: 'text', value: 'test value', required: true, validationLabel: 'Please enter name' }  ];
    testHostFixture.detectChanges();
    testHostComponent.mock[0].formControl.markAsTouched();
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('fa-icon')[0].getElementsByTagName('svg')[0].className.baseVal).toContain('fa-check-circle');
  });

  // For number field

  it('for number field should render input element in html with type attribute as number ', () => {
    testHostComponent.mock = [  { displayLabel: 'First Name', fieldType: 'number', value: '123', required: true, validationLabel: 'Please enter name' }  ];
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('input')[0].type).toEqual('number');
  });

  it('for number field should render red color error msg and error icon if value is null and clicked outside ', () => {
    testHostComponent.mock = [  { displayLabel: 'First Name', fieldType: 'number', value: null, required: true, validationLabel: 'Please enter name' }  ];
    testHostFixture.detectChanges();
    testHostComponent.mock[0].formControl.markAsTouched();
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('mat-error')[0]).toBeTruthy();
    expect(compiled.getElementsByTagName('mat-error')[0].innerText).toEqual('Please enter name');
    expect(compiled.getElementsByTagName('fa-icon')[0].getElementsByTagName('svg')[0].className.baseVal).toContain('fa-exclamation-circle');
  });

  it('for number field should render green color tick icon if value is passed and clicked outside', () => {
    testHostComponent.mock = [  { displayLabel: 'First Name', fieldType: 'number', value: '123', required: true, validationLabel: 'Please enter name' }  ];
    testHostFixture.detectChanges();
    testHostComponent.mock[0].formControl.markAsTouched();
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('fa-icon')[0].getElementsByTagName('svg')[0].className.baseVal).toContain('fa-check-circle');
  });

  // For email field

  it('for email field should render input element in html with type attribute as email ', () => {
    testHostComponent.mock = [  { displayLabel: 'First Name', fieldType: 'email', value: 'abc@abc.com', required: true, validationLabel: 'Please enter email' }  ];
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('input')[0].type).toEqual('email');
  });

  it('for email field should render red color error msg and error icon if value is null and clicked outside ', () => {
    testHostComponent.mock = [  { displayLabel: 'First Name', fieldType: 'email', value: null, required: true, validationLabel: 'Please enter email' }  ];
    testHostFixture.detectChanges();
    testHostComponent.mock[0].formControl.markAsTouched();
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('mat-error')[0]).toBeTruthy();
    expect(compiled.getElementsByTagName('mat-error')[0].innerText).toEqual('Please enter email');
    expect(compiled.getElementsByTagName('fa-icon')[0].getElementsByTagName('svg')[0].className.baseVal).toContain('fa-exclamation-circle');
  });

  it('for email field should render red color error msg and error icon if value is not a valid email and clicked outside ', () => {
    testHostComponent.mock = [  { displayLabel: 'First Name', fieldType: 'email', value: 'asdf', required: true, validationLabel: 'Please enter email', validationRegex: '\\S+@\\S+\\.\\S+' }  ];
    testHostFixture.detectChanges();
    testHostComponent.mock[0].formControl.markAsTouched();
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('mat-error')[0]).toBeTruthy();
    expect(compiled.getElementsByTagName('mat-error')[0].innerText).toEqual('Please enter email');
    expect(compiled.getElementsByTagName('fa-icon')[0].getElementsByTagName('svg')[0].className.baseVal).toContain('fa-exclamation-circle');
  });

  it('for email field should render green color tick icon if valid email is passed and clicked outside', () => {
    testHostComponent.mock = [  { displayLabel: 'First Name', fieldType: 'email', value: 'abc@abc.com', required: true, validationLabel: 'Please enter email', validationRegex: '\\S+@\\S+\\.\\S+' }  ];
    testHostFixture.detectChanges();
    testHostComponent.mock[0].formControl.markAsTouched();
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('fa-icon')[0].getElementsByTagName('svg')[0].className.baseVal).toContain('fa-check-circle');
  });

  // For date field

  it('for date field should render input element in html with type attribute as date ', () => {
    testHostComponent.mock = [  { displayLabel: 'First Name', fieldType: 'date', value: 'abc@abc.com', required: true, validationLabel: 'Please enter date' }  ];
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    // we are not keeping date field as date, because default date icon will overlap with material date icon
    expect(compiled.getElementsByTagName('input')[0].type).toEqual('text');
  });

  it('for date field should render red color error msg if value is null and clicked outside ', () => {
    testHostComponent.mock = [  { displayLabel: 'First Name', fieldType: 'date', value: null, required: true, validationLabel: 'Please enter date' }  ];
    testHostFixture.detectChanges();
    testHostComponent.mock[0].formControl.markAsTouched();
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('mat-error')[0]).toBeTruthy();
    expect(compiled.getElementsByTagName('mat-error')[0].innerText).toEqual('Please enter date');
  });

  it('for date field should not render red color error icon if value is null and clicked outside ', () => {
    testHostComponent.mock = [  { displayLabel: 'First Name', fieldType: 'date', value: null, required: true, validationLabel: 'Please enter date' }  ];
    testHostFixture.detectChanges();
    testHostComponent.mock[0].formControl.markAsTouched();
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('fa-icon')[0]).toBeFalsy();
  });

  it('for date field should not render green color tick icon if valid date is passed and clicked outside', () => {
    testHostComponent.mock = [  { displayLabel: 'First Name', fieldType: 'date', value: '01/01/2020', required: true, validationLabel: 'Please enter date' }  ];
    testHostFixture.detectChanges();
    testHostComponent.mock[0].formControl.markAsTouched();
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('fa-icon')[0]).toBeFalsy();
  });


  // For select field

  it('for select field should render mat-select element', () => {
    testHostComponent.mock = [  { displayLabel: 'select one option', fieldType: 'select', value: '2', required: true, validationLabel: 'Please select atleast one option.',
                                  options: [{id: '1', label: 'option1'}, {id: '2', label: 'option2'}, {id: '3', label: 'option3'}] }  ];
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('mat-select')).toBeTruthy();
  });

  it('for select field should render red color error msg and if value is null and clicked outside ', () => {
    testHostComponent.mock = [  { displayLabel: 'select one option', fieldType: 'select', value: '', required: true, validationLabel: 'Please select atleast one option.',
                                  options: [{id: '1', label: 'option1'}, {id: '2', label: 'option2'}, {id: '3', label: 'option3'}] }  ];
    testHostFixture.detectChanges();
    testHostComponent.mock[0].formControl.markAsTouched();
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('mat-error')[0]).toBeTruthy();
    expect(compiled.getElementsByTagName('mat-error')[0].innerText).toEqual('Please select atleast one option.');
  });

  it('for select field should not render red color error icon if value is null and clicked outside ', () => {
    testHostComponent.mock = [  { displayLabel: 'select one option', fieldType: 'select', value: '', required: true, validationLabel: 'Please select atleast one option.',
                                  options: [{id: '1', label: 'option1'}, {id: '2', label: 'option2'}, {id: '3', label: 'option3'}] }  ];
    testHostFixture.detectChanges();
    testHostComponent.mock[0].formControl.markAsTouched();
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('fa-icon')[0]).toBeFalsy();
  });

  it('for select field should not render green color tick icon if valid date is passed and clicked outside', () => {
    testHostComponent.mock = [  { displayLabel: 'select one option', fieldType: 'select', value: '2', required: true, validationLabel: 'Please select atleast one option.',
                                  options: [{id: '1', label: 'option1'}, {id: '2', label: 'option2'}, {id: '3', label: 'option3'}] }  ];
    testHostFixture.detectChanges();
    testHostComponent.mock[0].formControl.markAsTouched();
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('fa-icon')[0]).toBeFalsy();
  });

   // For radio field

  it('for radio field should render mat-select element', () => {
    testHostComponent.mock = [  { displayLabel: 'select one option', fieldType: 'radio', value: '', required: true, validationLabel: 'Please select one..',
                                options: [{id: '1', label: 'option1'}, {id: '2', label: 'option2'}, {id: '3', label: 'option3'}] } ];
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('mat-radio-group')).toBeTruthy();
  });

  it('for radio field should render red color error msg and if value is null and clicked outside ', () => {
    testHostComponent.mock = [  { displayLabel: 'select one option', fieldType: 'radio', value: '', required: true, validationLabel: 'Please select one..',
                                  options: [{id: '1', label: 'option1'}, {id: '2', label: 'option2'}, {id: '3', label: 'option3'}] } ];
    testHostFixture.detectChanges();
    testHostComponent.mock[0].formControl.markAsTouched();
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByClassName('text-danger')[0]).toBeTruthy();
    expect(compiled.getElementsByClassName('text-danger')[0].innerText).toEqual('Please select one..');
  });

  it('for radio field should not render red color error icon if value is null and clicked outside ', () => {
    testHostComponent.mock = [  { displayLabel: 'select one option', fieldType: 'radio', value: '', required: true, validationLabel: 'Please select one..',
                                options: [{id: '1', label: 'option1'}, {id: '2', label: 'option2'}, {id: '3', label: 'option3'}] }  ];
    testHostFixture.detectChanges();
    testHostComponent.mock[0].formControl.markAsTouched();
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('fa-icon')[0]).toBeFalsy();
  });

  it('for radio field should not render green color tick icon if valid date is passed and clicked outside', () => {
    testHostComponent.mock = [  { displayLabel: 'select one option', fieldType: 'radio', value: '', required: true, validationLabel: 'Please select one..',
                                options: [{id: '1', label: 'option1'}, {id: '2', label: 'option2'}, {id: '3', label: 'option3'}] }  ];
    testHostFixture.detectChanges();
    testHostComponent.mock[0].formControl.markAsTouched();
    testHostFixture.detectChanges();
    const compiled = testHostFixture.nativeElement;
    expect(compiled.getElementsByTagName('fa-icon')[0]).toBeFalsy();
  });

});
