import { Injectable } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UserFindAllService {

    constructor(
        @InjectRepository(User)
        private userRepository : MongoRepository <User>
    ){}

	public async execute(){
        return await this.userRepository.find();
    }
}