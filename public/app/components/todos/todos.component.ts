import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../models/todos';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {
  private editMode:number = -1;
  private newTodo:any;
  constructor(private todoService: TodoService){}

  ngOnInit(){
    this.todoService.fetchTodos();
  }

  getTodos(){
    return this.todoService.getTodos();
  }
  addTodo(todoText:any){
    let newTodo = new Todo(todoText.value);
    todoText.value = '';
    this.todoService.addTodo(newTodo);
  }
  removeTodo(idx:number){
    this.todoService.removeTodo(idx);
  }
  updateTodo(todo:any){
    this.editMode = -1;
    this.todoService.updateTodo(todo);
  }

}