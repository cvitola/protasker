import { Body, Controller , Get, Post, Delete, Param, ParseIntPipe, Patch,  HttpException, HttpStatus  } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto , UpdateUserDto} from './dto/user.dto';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}
    
    @Get()
    getAllUsers(): Promise<User[]>{
        return this.usersService.getAllUsers()
    }
    
    // @Post()
    // createUser(@Body() newUser: CreateUserDto){
    //     console.log(newUser);
    //     return this.usersService.createUser(newUser.user, newUser.mail, newUser.password);
    // }

    // @Delete(':id')
    // deleteUser(@Param('id',ParseIntPipe ) id: number){
    //     this.usersService.deleteUser(id)
    // }

    // @Patch(':id') //parcialmente la actualizacion.
    // updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateFields: UpdateUserDto){
    //     const updateUser =  this.usersService.updateUser(id, updateFields);
    //     if(updateUser){
    //         return updateUser;
    //     }else{
    //         throw new HttpException({ msg: 'No encontrado' }, HttpStatus.NOT_FOUND);
    //     }
    // }
    
}
