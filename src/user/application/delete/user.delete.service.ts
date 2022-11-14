import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { User } from '../../entities/user.entity';


@Injectable()
export class UserDeleteService {

	constructor (@InjectRepository(User)
		private userRepository: MongoRepository <User>
	) {}

	public async execute(id) {
		await this.userRepository.delete(id);
	}
}