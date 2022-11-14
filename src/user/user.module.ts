import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserCreateService } from './application/create/user.create.service';
import { UserFindAllService } from './application/findAll/user.findAll.service';
import { UserFindOneService } from './application/findOne/user.findOne.service';
import { UserDeleteService } from './application/delete/user.delete.service';
import { UserUpdateService } from './application/update/user.update.service';

import { UserGetController } from './infrastructure/controllers/user.get.controller';
import { UserPatchUpdateController } from './infrastructure/controllers/user.patch.controller';
import { UserPostsController } from './infrastructure/controllers/user.post.controller';


import { User } from './entities/user.entity';
import { UserDeleteController } from './infrastructure/controllers/user.delete.controller';
import { UserTypeormRepository } from './infrastructure/repositories/user.typorem.repository';


@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserGetController, UserPatchUpdateController, UserPostsController, UserDeleteController],
  providers: [
    {
      provide: 'IUserRepository',
      useClass: UserTypeormRepository,
    },
    UserCreateService,
    UserDeleteService,
    UserFindAllService,
    UserFindOneService,
    UserUpdateService
  ]
})
export class UserModule {}
