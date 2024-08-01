import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
}
