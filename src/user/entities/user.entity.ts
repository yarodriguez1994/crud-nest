import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    id:ObjectID;

    @Column()
    firstName: string;

    @Column()
    lastName : string;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column({default:1})
    statusUser: number;

}
