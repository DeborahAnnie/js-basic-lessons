import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

    //data-model
  customerModel:any;
  constructor() { console.log("Customer Loaded") }

  ngOnInit(): void {
    this.customerModel = {
      firstName: '',
      lastName: '',
      email: 'vkcheeku18@cricket.com'
    }
  }
saveCustomer(customerFormGroup:any) {
  if(customerFormGroup.valid) {
    console.log(customerFormGroup.value);
  }
}
}
