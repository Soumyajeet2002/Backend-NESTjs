import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { User } from '../users/user.entity';
import { ManyToOne } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  completed: boolean;

  @ManyToOne(() => User, (user) => user.tasks, { eager: false })
  user: User;
  //Now tasks belong to users
}
