import { Entity } from 'typeorm';

@Entity('users')
export class UserEntity {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
