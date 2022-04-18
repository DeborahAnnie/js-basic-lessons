import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  Input,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  ContentChild,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  counter = 0;
  // interval: any;
  @Input()
  Name = '';

  @ContentChild('projectedContent') projectedContent: any;
  constructor() {
    console.log('Child Constructor');
  }

  ngOnInit(): void {
    console.log('Child ngonInit "components Constructed"');
    console.log('OnInit - ' + this.projectedContent);

    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // }, 500);
  }

  ngOnDestroy(): void {
    // clearInterval(this.interval);
    console.log('Child ngonDestroy "components is Destroyed"');
    console.log('OnDestroy - ' + this.projectedContent);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('Child OnChanges');
    console.log('OnChanges - ' + this.projectedContent);
  }
  ngDoCheck() {
    console.log('Child Do Check is called');
    console.log('DoCheck - ' + this.projectedContent);
  }
  ngAfterContentInit(): void {
    console.log('Child NgAfterContentInit is Called');
    console.log('AfterContentInit - ' + this.projectedContent);
  }
  ngAfterContentChecked(): void {
    console.log('Child NgAfterContentChecked is Called');
  }
  ngAfterViewInit(): void {
    console.log('Child NgAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('Child NgAfterViewChecked called');
  }
}
