//necesaria para indicar el tipo de dato que llega al BE.
import {IsNotEmpty, IsString} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    user: string
    mail: string
    password: string
}

export class UpdateUserDto {
    user?: string
    mail?: string
    password?: string
}
