import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../database/entities/user.entity';
import { ProfileEntity } from '../../database/entities/profile.entity';
import { UserRepository } from '../../database/repositories/user.repository';
import { ProfileRepository } from '../../database/repositories/profile.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ProfileEntity])],
  providers: [UsersResolver, UsersService, UserRepository, ProfileRepository],
  exports: [UsersService],
})
export class UsersModule {}
