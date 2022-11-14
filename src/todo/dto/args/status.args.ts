import { ArgsType, Field } from "@nestjs/graphql";
import { IsBoolean, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";


@ArgsType()
export class StatusArgs {

    @Field( type => Boolean, {nullable:true})
    @IsBoolean()
    @IsOptional()
    done?:boolean

    @Field(type => String ,{nullable:true, defaultValue:null} )
    @IsString()
    @IsOptional()
    description?:string;


}