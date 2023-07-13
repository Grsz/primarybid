import { createItem } from '.';
import { ItemModel } from '../../../../models/Item';
import {
  MongoDbTestEnvironment,
  connectMongoose,
  disconnectMongoose,
  resetDb,
} from '../../../../utils/mockDb';

import * as ShortenUrlModule from '../../../../utils/shortenUrl';

jest.mock('../../../../utils/shortenUrl', () => ({
  shortenUrl: jest.fn(),
}));

describe('Create item resolver', () => {
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

  it(`creates new item, and generates shortened url based on original url`, async () => {
    const originalUrl = `mockUrl`;
    const shortenedUrl = `mockShortenedUrl`;

    const mockShortenUrl = jest.spyOn(ShortenUrlModule, 'shortenUrl');
    mockShortenUrl.mockReturnValue(shortenedUrl);

    const itemsCountBefore = await ItemModel.count({}).exec();
    expect(itemsCountBefore).toBe(0);

    const result = await createItem(null, {
      data: {
        originalUrl,
      },
    });

    const itemsInDatabaseAfter = await ItemModel.find({}).lean().exec();
    expect(itemsInDatabaseAfter.length).toBe(1);

    expect(mockShortenUrl).toHaveBeenCalledWith(originalUrl);

    expect(itemsInDatabaseAfter[0]).toMatchObject(result);
    expect(result).toMatchObject(
      expect.objectContaining({
        originalUrl,
        shortenedUrl,
      }),
    );
  });
});
