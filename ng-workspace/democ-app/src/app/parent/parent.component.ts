import { Component, OnInit, OnChanges, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {
  isChild = false;
  // isChild = true;
  @Input()
  Name = '';

  constructor() {
    console.log('Parent Constructor called');
  }
  ngOnInit(): void {
    console.log('Parent ngonInit called');
  }
  ngOnChanges() {
    console.log('Parent OnChanges called');
  }
  ngDoCheck() {
    console.log('Parent DoCheck is called');
  }
  toggleOf() {
    this.isChild = !this.isChild;
  }
}
