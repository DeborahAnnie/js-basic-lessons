import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boxa',
  templateUrl: './boxa.component.html',
  styleUrls: ['./boxa.component.css']
})
export class BoxaComponent implements OnInit {
  
  labelValue: any;
  data: any;
  counter = 0;
  
  constructor() { }

  ngOnInit(): void {
  }
  // onchange(event: { target: { value: any; }; }) {
  //   this.data=event.target.value;
  // }

}
