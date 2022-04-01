import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rt-pcr',
  templateUrl: './rt-pcr.component.html',
  styleUrls: ['./rt-pcr.component.css']
})
export class RtPcrComponent implements OnInit {
  customerModel:any;

  constructor() { }

  ngOnInit(): void {
    this.customerModel = {
      firstName: ''
    }
  }
  saveCustomer(customerFormGroup:any) {
    if(customerFormGroup.valid) {
      console.log(customerFormGroup.value);
    }
  }
  }

