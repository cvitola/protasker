import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    user: string
    @Column()
    mail: string
    @Column()
    password: string
}