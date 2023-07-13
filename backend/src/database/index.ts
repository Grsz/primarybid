import mongoose, { Mongoose, ConnectionStates, ConnectOptions } from 'mongoose';

import { getConfig } from '../config';

const defaultMongoDbConfigs: ConnectOptions = {
  connectTimeoutMS: 5000,
  socketTimeoutMS: 5000,
  maxPoolSize: 10,
  autoIndex: false,
};

export const db = (() => {
  let mongooseClient: Mongoose;

  const connect = async (): Promise<Mongoose> => {
    if (
      !mongooseClient ||
      mongooseClient.connection.readyState === ConnectionStates.disconnected
    ) {
      mongooseClient = await mongoose.connect(
        getConfig().DB_CONNECTION_STRING,
        defaultMongoDbConfigs,
      );

      // eslint-disable-next-line no-console
      console.info(
        `Successfully connected to MongoDB. ` +
          `DB name: ${mongooseClient.connection.db.databaseName}. ` +
          `DB version: ${mongooseClient.version}`,
      );
    }

    return mongooseClient;
  };

  return { connect };
})();
