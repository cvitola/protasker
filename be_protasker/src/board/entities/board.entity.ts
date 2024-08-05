import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity({ name: 'Boards'})
export class Board {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    description: string
    @ManyToOne( () => User, user => user.boards)
    user:User;
}
