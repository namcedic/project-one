import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Profiles {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  address: string;

  @Field()
  userId: number;
}
