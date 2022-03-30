import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app.header.component';
import { BoxaComponent } from './boxa/boxa.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    BoxaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent, AppHeaderComponent, AppComponent] //[AppComponent]
})
export class AppModule { }
