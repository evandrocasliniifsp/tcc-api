import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { makeGraphQLSchema } from './graphql';
import { SERVER_PORT } from './infra/config/';
import routes from './infra/config/router.config';
import { AppDataSource } from './infra/config/';

export const app = express();
app.use(express.json());
routes(app);

const main = async () => {
  try {
    await AppDataSource.initialize();
    console.info('Connected to PostreSQL');

    const schema = await makeGraphQLSchema();
    const apolloServer = new ApolloServer({ schema });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    app.listen(SERVER_PORT, () => {
      console.info(`Server is running on http://localhost:${SERVER_PORT}`);
    });
  } catch (error) {
    console.info(`Unknown error while starting the server: ${error}`);
  }
};

main();