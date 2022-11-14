import { CreateUserDto } from "../../infrastructure/dto/create-user.dto";
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { User } from "../../entities/user.entity";

export class UserEntity {

  private id: string;
  private firstName: string;
  private lastName : string;
  private email: string;
  private username: string;
  private status: "active" | "inactive";

  private constructor(firstName: string, lastName: string, email: string, username: string, status: "active" | "inactive"){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.status = status;
  }

  public static create(firstName: string, lastName: string, email: string, username: string): UserEntity {
    return new UserEntity(firstName, lastName, email, username, "active");
  }

  public toPersistence(){
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      name: `${this.firstName} ${this.lastName}`,
      email: this.email,
      username: this.username,
      statusUser: this.status == "active" ? 1 : 0,
    }
  }
}

export interface UserRepository {
  save(newUser: UserEntity): Promise<void>
}

@Injectable()
export class UserCreateService {

  constructor(
  @Inject('IUserRepository') private readonly userRepository: UserRepository
  ){}
    // public execute(createUser){
    //   return createUser;
    // }
	public async execute(createUserDto: CreateUserDto): Promise<UserEntity> {
    const newUser: UserEntity = UserEntity.create(createUserDto.firstName, createUserDto.lastName, createUserDto.email, createUserDto.username)
    await this.userRepository.save(newUser);
    return newUser
  }
}