import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserCreateService } from './application/create/user.create.service';

import { CreateUserDto } from './infrastructure/dto/create-user.dto';


@Controller('user')
export class UserController {
  constructor(
    private readonly userCreateService: UserCreateService,
  ) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userCreateService.execute(createUserDto);
  }
}
