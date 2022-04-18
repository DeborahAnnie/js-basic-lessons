import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {
    console.log('childConstructor');
  }

  ngOnInit(): void {
    console.log('child ngOnNnit');
  }
}

// import {
//   Component,
//   OnInit,
//   OnChanges,
//   OnDestroy,
//   DoCheck,
//   AfterContentInit,
//   AfterContentChecked,
//   AfterViewInit,
//   AfterViewChecked,
//   SimpleChanges,
// } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   templateUrl: './child.component.html',
//   styleUrls: ['./child.component.css'],
// })
// export class ChildComponent
//   implements
//     OnInit,
//     OnChanges,
//     OnDestroy,
//     DoCheck,
//     AfterContentChecked,
//     AfterContentInit,
//     AfterViewInit,
//     AfterViewChecked
// {
//   constructor() {
//     console.log('constructor');
//   }

//   ngOnInit(): void {
//     console.log('OnInit!!');
//   }
//   ngOnChanges(changes: SimpleChanges): void {
//     console.log('OnChanges!!');
//   }
//   ngOnDestroy(): void {
//     console.log('OnDestroy!!');
//   }
//   ngDoCheck(): void {
//     console.log('OnDoCheck!!');
//   }
//   ngAfterContentInit(): void {
//     console.log('AfterContentInit!!');
//   }
//   ngAfterContentChecked(): void {
//     console.log('AfterContentChecked!!');
//   }
//   ngAfterViewInit(): void {
//     console.log('AfterViewInit!!');
//   }
//   ngAfterViewChecked(): void {
//     console.log('AfterViewChecked!!');
//   }
// }
