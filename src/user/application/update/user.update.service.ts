import { Injectable } from '@nestjs/common';
import { User }  from '../../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, ObjectID } from 'typeorm';
import { UpdateUserDto } from '../../infrastructure/dto/update-user.dto';

@Injectable()
export class UserUpdateService {
	constructor(
		@InjectRepository(User)
		private readonly userUpdateService: MongoRepository<User>
	){}

	public async execute(id, updateUserDto: UpdateUserDto  ):Promise<void>{ 

		await this.userUpdateService.update(id,updateUserDto);
		
	}
}


