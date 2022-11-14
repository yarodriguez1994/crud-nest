import { Field, InputType, Int } from "@nestjs/graphql";
import { IsBoolean, IsNumber, IsString, MaxLength } from "class-validator";

@InputType()
export class UpdateInputTodo{

    @Field( () => String,{nullable:true} )
    @IsString()
    @MaxLength(10)
    description?: string;

    @Field( () => Boolean, {nullable:true})
    @IsBoolean()
    done?:boolean;

    @Field( () => Int)
    @IsNumber()
    id:number

}