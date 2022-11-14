import { Controller,Post, Body } from '@nestjs/common';
import { UserCreateService } from 'src/user/application/create/user.create.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../../entities/user.entity';

@Controller('user')
export class UserPostsController {
    constructor(private readonly userCreateService: UserCreateService){}

    @Post('create')
    createUser(@Body() createuser:CreateUserDto ) : Promise<any> {
        return this.userCreateService.execute(createuser);
    }
}
