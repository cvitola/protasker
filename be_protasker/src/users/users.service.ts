import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}

    // private usersDB: User[] = [{
    //     id: 1,
    //     user: "cvitola",
    //     mail: "cvitola@cvitola.ar",
    //     password: "abc123+-"
    // },
    // {
    //     id: 2,
    //     user: "cdvoca",
    //     mail: "dvoca@dvoca.ar",
    //     password: "123aaa+-"
    // }]

    getAllUsers(): Promise<User[]> {
        return this.userRepository.find();
    }
    
    // createUser(user: string, mail: string, password: string) {
    //     const newUser = {
    //         id: Math.random(),
    //         user,
    //         mail,
    //         password
    //     }
    //     this.usersDB.push(newUser);

    //     return newUser;
    // }
    // updateUser(id: number, updateFields: UpdateUserDto) {
    //     let updateUser = this.usersDB.find( u => u.id === id);
    //     updateUser ? Object.assign(updateUser, updateFields) : console.log("no existe ese id");
    //     this.usersDB = this.usersDB.map( u => u.id === id ? updateUser:u)
    //     return updateUser;
    // }
    
    // deleteUser(id: number) {
    //     console.log("Soy el nro: ", id)
    //     this.usersDB = this.usersDB.filter( t => t.id !== id);

    // }
}
