import { countItems } from '.';
import {
  MongoDbTestEnvironment,
  connectMongoose,
  disconnectMongoose,
  resetDb,
} from '../../../../utils/mockDb';
import { createSeedItems } from '../../../../utils/test/seedData';

describe('Count items resolver', () => {
  let testEnv: MongoDbTestEnvironment;

  beforeAll(async () => {
    testEnv = await connectMongoose();
  });

  beforeEach(async () => {
    await resetDb();
  });

  afterAll(async () => {
    await disconnectMongoose(testEnv);
  });

  it(`returns the amount of items available in the database`, async () => {
    const amount = 50;
    await createSeedItems(amount);

    const result = await countItems();

    expect(result).toBe(amount);
  });
});
