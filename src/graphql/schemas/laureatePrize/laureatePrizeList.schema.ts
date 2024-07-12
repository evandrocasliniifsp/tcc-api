import { ObjectType, Field, Int } from 'type-graphql';
import { LaureatePrizeSchema } from './laureatePrize.schema';

@ObjectType()
export class LaureatePrizeListSchema {
  @Field(() => [LaureatePrizeSchema], { nullable: 'items' })
  public readonly laureatePrizes!: LaureatePrizeSchema[];

  @Field(() => Int)
  public readonly total!: number;
}