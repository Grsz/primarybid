import ShortUniqueId from 'short-unique-id';
import { getConfig } from '../../config';
/* 
  The description says:
  The same 8-characters cannot be used twice i.e. each shortened URL needs to be unique.
  I understood it as shortening the same URL would generate different shortened URLs,
  which makes originalUrl redundant
*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const shortenUrl = (originalUrl: string) => {
  const uid = new ShortUniqueId({ length: 8 });

  return `${getConfig().SHORTENER_URL}/${uid.randomUUID()}`;
};
