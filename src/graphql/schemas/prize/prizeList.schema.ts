import { ObjectType, Field, Int } from 'type-graphql';
import { PrizeSchema } from './prize.schema';

@ObjectType()
export class PrizeListSchema {
  @Field(() => [PrizeSchema], { nullable: 'items' })
  public readonly prizes!: PrizeSchema[];

  @Field(() => Int)
  public readonly total!: number;
}