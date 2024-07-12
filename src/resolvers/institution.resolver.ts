import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Resolver, Query } from 'type-graphql';
import { Service } from 'typedi';

import { InstitutionListSchema } from '../graphql';
import { InstitutionService } from '../services';

@Service()
@Resolver()
export class InstitutionResolver {
  constructor(
    private readonly institutionService: InstitutionService,
  ) {}

  @Query(() => InstitutionListSchema)
  public async findInstitution() {
    const [institutions, total] = await this.institutionService.find();
    return plainToInstance(InstitutionListSchema, {
      institutions: instanceToPlain(institutions),
      total
    });
  }
}