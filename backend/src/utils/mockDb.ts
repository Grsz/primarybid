import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export type MongoDbTestEnvironment = {
  mongoServer: MongoMemoryServer;
};

/**
 * Initialise in-memory MongoDB and connect to the DB with Mongoose.
 * Each test file should have its own dedicated MongoDB instance. The DB will
 * be reset before each test.
 *
 * You use Mongoose Models or the MongoDB driver to ingest your test data to the
 * test DB.
 *
 * @example
 * describe('My Mongoose Model test.', () => {
 *    let testEnv: MongoDbTestEnvironment;
 *
 *    beforeAll(async () => { testEnv = await connectMongoose(); });
 *    beforeEach(async () => { await resetDb(); });
 *    afterAll(async () => { await disconnectMongoose(testEnv); });
 * });
 */
export const connectMongoose = async (): Promise<MongoDbTestEnvironment> => {
  // May require additional time for downloading MongoDB binaries
  jest.setTimeout(600000);

  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);

  return { mongoServer };
};

/**
 * Drop the database that Mongoose is currently using.
 */
export const resetDb = async () => {
  await mongoose.connection.db.dropDatabase();
};

/**
 * Mongoose disconnect to the in-memory MongoDB instance and
 * stop the MongoDB instance.
 * @param testEnvironment
 */
export const disconnectMongoose = async (
  testEnvironment: MongoDbTestEnvironment,
) => {
  await mongoose.disconnect();
  await testEnvironment.mongoServer.stop();
};
