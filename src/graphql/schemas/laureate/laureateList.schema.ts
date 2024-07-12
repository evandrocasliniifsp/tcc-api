import { ObjectType, Field, Int } from 'type-graphql';
import { LaureateSchema } from './laureate.schema';

@ObjectType()
export class LaureateListSchema {
  @Field(() => [LaureateSchema], { nullable: 'items' })
  public readonly laureates!: LaureateSchema[];

  @Field(() => Int)
  public readonly total!: number;
}