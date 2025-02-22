import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateProfileInput } from './create-profile.input';

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty()
  email: string;

  @Field(() => CreateProfileInput)
  @ValidateNested()
  @IsNotEmpty()
  @Type(() => CreateProfileInput)
  profile: CreateProfileInput;
}
