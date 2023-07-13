import { getConfig } from './config';
import { db } from './database';
import { startServer } from './graphql/server';

const port = process.env.PORT || getConfig().DEFAULT_PORT;

// eslint-disable-next-line no-console
console.info(`Connecting to the database.`);

const fatalErrorHandler = (error: Error) => {
  // eslint-disable-next-line no-console
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
};

process.on('uncaughtException', fatalErrorHandler);
process.on('unhandledRejection', fatalErrorHandler);

export const dbConnection = db.connect();

dbConnection.then(async () => {
  // eslint-disable-next-line no-console
  console.info(`Database connected.`);
  (await startServer()).listen({ port: port }, () => {
    // eslint-disable-next-line no-console
    console.info(`Server started as port ${port} Path:/graphql`);
  });
});
