import { ObjectType, Field, ID } from 'type-graphql';

import { LaureatePrizeDto } from '../../../dtos/laureatePrize';
import { InstitutionSchema } from '../institution/institution.schema';
import { LaureateSchema } from '../laureate/laureate.schema';
import { PrizeSchema } from '../prize/prize.schema';

@ObjectType()
export class LaureatePrizeSchema implements LaureatePrizeDto {
  @Field(() => ID)
  public readonly id!: string;

  @Field(() => PrizeSchema)
  public readonly prize!: PrizeSchema;

  @Field(() => LaureateSchema)
  public readonly laureate!: LaureateSchema;

  @Field(() => InstitutionSchema)
  public readonly institution!: InstitutionSchema;

  @Field()
  public readonly createdAt!: Date;

  @Field()
  public readonly updatedAt!: Date;

  @Field({ nullable: true })
  public readonly deletedAt?: Date;
}