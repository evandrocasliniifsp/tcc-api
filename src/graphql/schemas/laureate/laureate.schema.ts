import { ObjectType, Field, ID } from 'type-graphql';
import { LaureateDto } from '../../../dtos/laureate';
import { LaureatePrizeSchema } from '../laureatePrize/laureatePrize.schema';

@ObjectType()
export class LaureateSchema implements LaureateDto {
  @Field(() => ID)
  public readonly id!: string;

  @Field()
  public readonly firstname!: string;

  @Field({ nullable: true })
  public readonly surname?: string;

  @Field({ nullable: true })
  public readonly birthDate?: Date;

  @Field({ nullable: true })
  public readonly deathDate?: Date;

  @Field({ nullable: true })
  public readonly birthLocation?: string;

  @Field({ nullable: true })
  public readonly deathLocation?: string;

  @Field()
  public readonly gender!: string;

  @Field(() => [LaureatePrizeSchema])
  public readonly laureatePrizes!: LaureatePrizeSchema[];

  @Field()
  public readonly createdAt!: Date;

  @Field()
  public readonly updatedAt!: Date;

  @Field({ nullable: true })
  public readonly deletedAt?: Date;
}