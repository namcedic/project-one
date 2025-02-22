import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Profiles } from './profiles';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  email: string;

  @Field(() => Profiles)
  profile: Profiles;
}
