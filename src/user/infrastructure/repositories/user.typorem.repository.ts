import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { UserEntity } from 'src/user/application/create/user.create.service';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/application/create/user.create.service';

@Injectable()
export class UserTypeormRepository implements UserRepository {

  constructor( 
    @InjectRepository(User) private userRepository : MongoRepository <User>
  ){}

	public async save(newUser: UserEntity): Promise<void> {
    await this.userRepository.save(newUser.toPersistence());
  }
}