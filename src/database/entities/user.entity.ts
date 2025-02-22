import { ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ProfileEntity } from './profile.entity';

@ObjectType()
@Entity({
  name: 'users',
})
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @OneToOne(() => ProfileEntity, (profile) => profile.user, {
    eager: true,
    cascade: true,
  })
  profile: ProfileEntity;
}
