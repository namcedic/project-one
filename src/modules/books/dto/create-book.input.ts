import { IsNotEmpty, IsNumber } from 'class-validator';
import { Field } from '@nestjs/graphql';

export class CreateBookInput {
  @Field()
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @Field()
  @IsNotEmpty({ message: 'Author is required' })
  name: string;

  @Field()
  @IsNumber({}, { message: 'userId must be a number' })
  @IsNotEmpty({ message: 'userId is required' })
  userId: number;
}
