import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateProfileInput {
  @Field()
  @IsNotEmpty({ message: 'First name is required' })
  firstName: string;

  @Field()
  @IsNotEmpty({ message: 'Last name is required' })
  lastName: string;

  @Field()
  @IsNotEmpty({ message: 'Address is required' })
  address: string;
}
