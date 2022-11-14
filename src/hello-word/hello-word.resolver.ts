import { Query, Float, Int, Args } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWordResolver {
    @Query( ()=> String, {description:'Return string', name:'firstquery' }) 
    helloWord() : string {
        return 'mi first hello word in graphql';
    }

    @Query( () => Float, {description:'number random', name:'randomnumber'})
    numberRandom() : number {
        return Math.random() * 100 ;
    }

    @Query( () => Int, {name:'number'})
    numberRandomParam( @Args('to', {nullable:true, type: () => Int} ) to : number = 10 ){
        
        return Math.floor(Math.random() * to);
    }

}
