import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  @Input()
  channelName = '';

  constructor() {
    console.log('parentConstructor');
  }

  ngOnInit(): void {
    console.log('parent ngOnNnit');
  }
  ngOnChanges() {
    console.log('parentChange');
  }
}
