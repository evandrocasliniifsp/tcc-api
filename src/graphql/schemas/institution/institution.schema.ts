import { ObjectType, Field, ID } from 'type-graphql';

import { InstitutionDto } from '../../../dtos/institution';
import { LaureatePrizeSchema } from '../laureatePrize/laureatePrize.schema';

@ObjectType()
export class InstitutionSchema implements InstitutionDto {
  @Field(() => ID)
  public readonly id!: string;

  @Field()
  public readonly name!: string;

  @Field()
  public readonly headquarters!: string;

  @Field(() => [LaureatePrizeSchema])
  public readonly laureatePrizes!: LaureatePrizeSchema[];

  @Field()
  public readonly createdAt!: Date;

  @Field()
  public readonly updatedAt!: Date;

  @Field({ nullable: true })
  public readonly deletedAt?: Date;
}