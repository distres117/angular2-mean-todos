import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TodosComponent} from './components/todos/todos.component';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, NavbarComponent, TodosComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
