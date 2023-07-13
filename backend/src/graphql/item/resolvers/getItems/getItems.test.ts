import { getItems } from '.';
import { DEFAULT_LIMIT } from '../../../../constants/DefaultLimit';
import {
  MongoDbTestEnvironment,
  connectMongoose,
  disconnectMongoose,
  resetDb,
} from '../../../../utils/mockDb';
import { createSeedItems } from '../../../../utils/test/seedData';

describe('Get items resolver', () => {
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

  it(`returns limit, offset, and the first ${DEFAULT_LIMIT} items if limit, and offset are not specified`, async () => {
    await createSeedItems();

    const result = await getItems(null, {});

    expect(result.limit).toBe(DEFAULT_LIMIT);
    expect(result.offset).toBe(0);
    // check if it limits the number of items, not returning all
    expect(result.data).toMatchObject(
      expect.arrayContaining(
        [...Array(DEFAULT_LIMIT)].map((_, i) =>
          expect.objectContaining({
            _id: `${i}`,
          }),
        ),
      ),
    );
  });

  it(`returns the specified limit, offset, and limit amount of items starting from index offset`, async () => {
    await createSeedItems();

    const limit = 10;
    const offset = 20;

    const result = await getItems(null, {
      limit,
      offset,
    });

    expect(result.limit).toBe(limit);
    expect(result.offset).toBe(offset);
    // check if it limits the number of items, not returning all
    expect(result.data).toMatchObject(
      expect.arrayContaining(
        [...Array(limit)].map((_, i) =>
          expect.objectContaining({
            _id: `${i + offset}`,
          }),
        ),
      ),
    );
  });
});
