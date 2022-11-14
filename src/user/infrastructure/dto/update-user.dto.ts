import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail,IsNumber, IsString } from 'class-validator';


export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsEmail()
    email?: string;
    @IsString()
    firstName?: string;
    username?: string;
    @IsNumber()
    statusUser?: number;
    @IsString()
    lastName?:string;

}
