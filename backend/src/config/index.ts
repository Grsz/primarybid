import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import getenv from 'getenv';

dotenv.config();

export const getConfig = () => ({
  DB_CONNECTION_STRING: getenv.string('DB_CONNECTION_STRING'),
  SHORTENER_URL: getenv.string('SHORTENER_URL'),
  DEFAULT_PORT: getenv.string('DEFAULT_PORT'),
});
