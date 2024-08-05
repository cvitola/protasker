import { Board } from '../../board/entities/board.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'Users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    mail: string;

    @Column({nullable: false})
    password: string;

    @Column({type: 'boolean', default: true})
    active: boolean;

    @OneToMany( ()=> Board, board => board.user)
    boards: Board[];

}
