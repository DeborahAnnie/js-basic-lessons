import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControlOptions,
} from '@angular/forms';
import { rangeValidator, emailMatchValidator } from '../my-validator';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  employeeFormGroup: FormGroup;

  empRecord: any = {
    firstName: 'Annie',
    lastName: 'Deborah',
    email: 'annie1234@gmail.com',
    mobile: '8909123635',
  };
  constructor(private fb: FormBuilder) {
    this.employeeFormGroup = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]], // to fetch empRecord at beginning use this.empRecord.firstName
      lastName: [''],
      emailGroup: this.fb.group(
        {
          email: ['', [Validators.required, Validators.email]],
          confirmEmail: ['', [Validators.required, Validators.email]],
        },
        { validators: emailMatchValidator }
      ),
      mobile: [''],
      sendNotification: ['email'],
      range: ['', [rangeValidator(10, 20)]],
    });
  }
  //dependency injection(DI)

  ngOnInit(): void {}

  // ! is non-null assertion operator(post-fix expression),just saying to the type checker that u're sure that 'a' is not null or undefined
  //the opeartion 'a!' produces a value of type of 'a' with null and undefined excluded

  get firstName() {
    return this.employeeFormGroup.get('firstName')!;
  }
  get range() {
    return this.employeeFormGroup.get('range')!;
  }
  get emailGroup() {
    return this.employeeFormGroup.get('emailGroup')!;
  }
  get mobile() {
    return this.employeeFormGroup.get('mobile')!;
  }

  loadEmployee() {
    let data = {
      firstName: 'Annie',
      lastName: 'Deborah',
    };
    this.employeeFormGroup.patchValue(data);
  }

  doNotification(msgtype: any) {
    if (msgtype === 'sms') {
      let mobileControl = this.employeeFormGroup.get('mobile');
      mobileControl?.setValidators([
        Validators.required,
        rangeValidator(80000000, 999999999),
      ]);
      mobileControl?.updateValueAndValidity();
    }
  }
}
