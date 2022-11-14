import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from 'typeorm';
import { User } from "../../entities/user.entity";


export class UserFindOneService {

	constructor(
		@InjectRepository(User) private readonly userRepository : MongoRepository <User>
	){}

	public  async execute(id ) {
		return await this.userRepository.findOne(id);
		// console.log(allUsers);
		// const userSpecific = allUsers.find( users.User => users.id === id );

	}
}