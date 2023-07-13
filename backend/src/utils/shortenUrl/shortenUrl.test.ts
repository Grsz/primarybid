import { shortenUrl } from '.';
import * as ConfigModule from '../../config';

const mockConfig = {
  DB_CONNECTION_STRING: '',
  SHORTENER_URL: 'shortener.url',
  DEFAULT_PORT: '',
};

jest.mock('../../config', () => ({
  getConfig: jest.fn(),
}));

const mockRandomUUID = jest.fn();
jest.mock('short-unique-id', () =>
  jest.fn().mockImplementation(() => ({
    randomUUID: mockRandomUUID,
  })),
);

describe('Shorten URL', () => {
  it('shortens an URL', () => {
    const mockId = '12345678';
    mockRandomUUID.mockReturnValue(mockId);

    const mockGetConfig = jest.spyOn(ConfigModule, 'getConfig');
    mockGetConfig.mockReturnValue(mockConfig);

    const mockOriginalUrl = `original.url`;

    expect(shortenUrl(mockOriginalUrl)).toBe(
      `${mockConfig.SHORTENER_URL}/${mockId}`,
    );
  });
});
