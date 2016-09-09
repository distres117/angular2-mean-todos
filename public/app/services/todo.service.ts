import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Todo} from '../models/todos';

@Injectable()
export class TodoService{
    todos:any[] = [];
    options: RequestOptions;
    constructor(public http:Http){
        this.options = new RequestOptions({
            headers: new Headers({'Content-Type': 'application/json'})
        });
    }
    getTodos(){
        return this.todos;
    }

    fetchTodos() {
        return this.http.get('/api/v1/todos')
            .map(res=>res.json())
            .subscribe(todos=>this.todos = todos);
    }
    addTodo(todo:Todo){
        return this.http.post('/api/v1/todos', JSON.stringify(todo), this.options)
            .map(res=>res.json())
            .subscribe(todo=>this.todos.push(todo));
    }
    removeTodo(idx:number){
        let id = this.todos[idx]._id;
        return this.http.delete('/api/v1/todos/' + id)
            .subscribe(()=>this.todos.splice(idx,1));
    }
    updateTodo(todo:any){
        return this.http.put('/api/v1/todos/' + todo._id, JSON.stringify(todo), this.options)
            .map(res=>res.json())
            .subscribe((newTodo)=>{});
    }

}
