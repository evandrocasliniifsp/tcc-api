import { ObjectType, Field, Int } from 'type-graphql';

import { InstitutionSchema } from './institution.schema';

@ObjectType()
export class InstitutionListSchema {
  @Field(() => [InstitutionSchema], { nullable: 'items' })
  public readonly institutions!: InstitutionSchema[];

  @Field(() => Int)
  public readonly total!: number;
}