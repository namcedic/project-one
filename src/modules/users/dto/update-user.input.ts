import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
