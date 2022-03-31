import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoa-app';
  location = 'Madurai';

  onBoxValuechange(paramData: any) {
    console.log("app component: " + paramData.value);
  }
}
// @Component({
//   selector: 'app-root',
//   template: '<h1> Inline Html Content </h1>',
//   styleUrls: ['./app.component.css']
//   })