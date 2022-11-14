import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { StatusArgs } from './dto/args/status.args';
import { CreateTodoInput } from './dto/inputs/create.inputs';
import { UpdateInputTodo } from './dto/inputs/update.input';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Resolver()
export class TodoResolver {

    constructor(private readonly todoService:TodoService){}

    @Query( () => [Todo], {name:'all'} ) 
    findAll(
        @Args() {done,description}: StatusArgs 
    ):Todo[]{    
        return this.todoService.findAll(done,description);
    }

    @Query( () => Todo, {name:'todo'} )
    findOne( @Args('id', { type: () => Int}) id: number){
        return this.todoService.findOne(id);
    }

    @Mutation(() => Todo , {name:'createTodo'})
    createTodo(
        @Args('bodyTodo') createTodoInput:CreateTodoInput
    ){
        return this.todoService.createTodo(createTodoInput);
    }

    @Mutation( () => Todo, {name:'update'} )
    updateTodo(
        @Args('updateTodo') updateTodo:UpdateInputTodo
    ){
        return this.todoService.updateTodo(updateTodo);
    }
    

}
