import express from 'express';
import { v4 as uuid } from 'uuid';
import { createServer } from 'http';
import { ApolloServer } from '@apollo/server';

import {
  ExpressContextFunctionArgument,
  expressMiddleware,
} from '@apollo/server/express4';
import cors from 'cors';
import { json } from 'body-parser';

import { executableSchema } from './executableSchema';
import { Context } from '../@types/Context';

export const contextFunction = async ({
  req,
  res,
}: ExpressContextFunctionArgument) => {
  return {
    req,
    res,
  };
};

export const startServer = async () => {
  const app = express();

  const httpServer = createServer(app);

  const server = new ApolloServer<Context>({
    schema: executableSchema,
    formatError: (err) => {
      if (!err.extensions) {
        Object.defineProperty(err, 'extensions', { value: { id: uuid() } });
      } else {
        err.extensions.id = uuid();
      }
      return err;
    },
  });
  await server.start();

  const allowedOrigins = [/localhost/, 'https://studio.apollographql.com'];
  app.use(
    '/',
    cors({
      origin: allowedOrigins,
      credentials: true,
    }),
    json(),
    expressMiddleware(server, {
      context: contextFunction,
    }),
  );

  return httpServer;
};
