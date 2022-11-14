import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

@InputType()
export class CreateTodoInput{

    @Field( () => String ,{description:'Description of todo'} )
    @IsString()
    @IsNotEmpty()
    @MaxLength(2)
    description: string;
}