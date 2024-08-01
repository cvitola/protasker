import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>){}
  
  createUser(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);    
  }

  getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOneUser(mail: string): Promise<User> {
    return this.userRepository.findOneBy({mail});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
