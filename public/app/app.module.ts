import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TodosComponent} from './components/todos/todos.component';
import {TodoService} from './services/todo.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  declarations: [
    AppComponent, NavbarComponent, TodosComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [TodoService]
})
export class AppModule { }
