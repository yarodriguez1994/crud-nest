import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  firstName : string;
  username: string;
  id:number;
  @IsString()
  lastName:string;

}
