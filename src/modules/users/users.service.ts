import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserRepository } from '../../database/repositories/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileRepository } from '../../database/repositories/profile.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    @InjectRepository(ProfileRepository)
    private readonly profileRepository: ProfileRepository,
  ) {}

  async create(createUserInput: CreateUserInput) {
    const exitUser = await this.userRepository.findOneBy({
      email: createUserInput.email,
    });

    if (exitUser) {
      throw new BadRequestException('User email already exists');
    }

    return await this.userRepository.save(createUserInput);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return user;
  }

  async update(updateUserInput: UpdateUserInput) {
    // Load the user and its profile.
    const user = await this.userRepository.findOne({
      where: { id: updateUserInput.id },
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }

    // Update the user's email if provided.
    user.email = updateUserInput.email || user.email;

    // Update the profile if provided.
    if (updateUserInput.profile) {
      user.profile.firstName = updateUserInput.profile.firstName;
      user.profile.lastName = updateUserInput.profile.lastName;
      user.profile.address = updateUserInput.profile.address;
    }

    // Save and return the updated user.
    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.softDelete({ id });
  }
}
