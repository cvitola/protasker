import { IsEmail, IsNotEmpty } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    mail: string
    @IsNotEmpty()
    password: string
    activo: boolean
}
