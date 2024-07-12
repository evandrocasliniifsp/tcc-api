import { ObjectType, Field, ID } from 'type-graphql';
import { LaureateDto } from '../../../dtos/laureate';
import { PrizeDto } from '../../../dtos/prize';
import { LaureatePrizeSchema } from '../laureatePrize/laureatePrize.schema';

@ObjectType()
export class PrizeSchema implements PrizeDto {
  @Field(() => ID)
  public readonly id!: string;

  @Field()
  public readonly year!: number;

  @Field()
  public readonly category!: string;

  @Field()
  public readonly share!: number;

  @Field()
  public readonly motivation!: string;

  @Field(() => [LaureatePrizeSchema])
  public readonly laureatePrizes!: LaureatePrizeSchema[];

  @Field()
  public readonly createdAt!: Date;

  @Field()
  public readonly updatedAt!: Date;

  @Field({ nullable: true })
  public readonly deletedAt?: Date;
}