import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoInput } from './dto/inputs/create.inputs';
import { UpdateInputTodo } from './dto/inputs/update.input';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {

    private todos : Todo[] = [
        {id:1,description:'Halo 1', done:false},
        {id:2,description:'Halo 2', done:true},
        {id:3,description:'Halo 3', done:false},
        {id:4,description:'Halo 4', done:false},
        {id:5,description:'Halo 5', done:true},
    ]

    findAll(done?: boolean,description?:string): Todo[]
    {
        if (done !== undefined ) return  this.todos.filter(todos => todos.done === done);
        // if (description !== null) this.todos = this.todos.filter(todos => todos.description === description);
        // return this.todos;

    }

    findOne(id:number): Todo
    {
        const todoById = this.todos.find( allTodos => allTodos.id === id)
        if (!todoById) throw new NotFoundException(`Todo with id ${id} no exist`);
        return todoById; 
    }

    createTodo(bodyTodo: CreateTodoInput) : Todo 
    {

        const todoId = Math.max(...this.todos.map((todo) => todo.id) ,0) + 1;
        const newTodo = new Todo();
        newTodo.id = todoId,
        newTodo.description = bodyTodo.description,
        this.todos.push(newTodo);
        return newTodo;

    }

    updateTodo(updateTodo:UpdateInputTodo): Todo[]
    {

        const todoToUpdate =  this.findOne(updateTodo.id);
        todoToUpdate.description = updateTodo.description;
        todoToUpdate.done = updateTodo.done;
        this.todos = this.todos.map( (todo) => {
            return (todo.id === todoToUpdate.id ) ? todoToUpdate : todo;
        });

        return this.todos;
    }

}
