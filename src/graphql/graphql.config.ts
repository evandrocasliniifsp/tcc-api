import path from 'node:path';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';

import {
  LaureateResolver,
  PrizeResolver,
  InstitutionResolver,
  LaureatePrizeResolver,
} from '../resolvers';

export const makeGraphQLSchema = async () => {
  const schemaFilePath = path.join(
    'src',
    'graphql',
    'schemas',
    'schema.graphql'
  );

  return buildSchema({
    resolvers: [
      LaureateResolver,
      PrizeResolver,
      InstitutionResolver,
      LaureatePrizeResolver,
    ],
    emitSchemaFile: schemaFilePath,
    validate: false,
    container: Container,
  });
}