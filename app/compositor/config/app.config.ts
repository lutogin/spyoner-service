import * as dotenv from 'dotenv-safe';

dotenv.config();

const {
  KAFKA_HOST,
  CLIENT_ID,
} = process.env;

export {
  KAFKA_HOST,
  CLIENT_ID,
};
