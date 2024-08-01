import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UsePipes, ValidationPipe, HttpStatus, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Auth } from '../utils/authjwt';  

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async createUser(@Body() createUserDto: CreateUserDto, @Res() res):Promise<void> {
    try {
      const user = await this.usersService.findOneUser(createUserDto.mail);
      if(!user){
        const newUser =  await this.usersService.createUser(createUserDto);
        res.status(200).json({newUser});
      }else{
        res.status(404).json({msg: `email ${createUserDto.mail} existente.`})
      }
    } catch (error) {
      if (error instanceof NotFoundException) {
        return res.status(HttpStatus.NOT_FOUND).json({
          statusCode: HttpStatus.NOT_FOUND,
        
        });
      } else {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Internal server error',
        });
      }
    }

  }

  @Get()
  async getAllUsers(@Res() res): Promise<void> {
    try {
      const allUsers = await this.usersService.getAllUsers();
      return res.status(200).json({allUsers});
    } catch (error) {
      if (error instanceof NotFoundException) {
        return res.status(HttpStatus.NOT_FOUND).json({
          statusCode: HttpStatus.NOT_FOUND,
        
        });
      } else {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Internal server error',
        });
      }
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post('login')
  async loginUser(@Body() updateUserDto: UpdateUserDto, @Res() res):Promise<void>{
    try {
      const user = await this.usersService.findOneUser(updateUserDto.mail);
      if(user){
        if(user.password !== updateUserDto.password){
          res.status(401).json({msg: "Contraseña erronea"});
        } else{
          console.log("Antes")
          const accessToken = Auth.generateAccessToken(user.mail);
          res.header('authorization', accessToken).json({
            message: 'Usuario autenticado',
            token: accessToken
          })
        }
      }else{
        res.status(404).json({msg: `Usuario: ${updateUserDto.mail} inexistente`});
      }
      
    } catch (error) {
      if (error instanceof NotFoundException) {
        return res.status(HttpStatus.NOT_FOUND).json({
          statusCode: HttpStatus.NOT_FOUND,
        
        });
      } else {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Internal server error',
          error: error
        });
      }
    }
    
  }
}
