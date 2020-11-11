import * as winston from 'winston';
import { ENVIRONMENT_SLUG } from './app.config';

export const winstonConfig = {
  format: ENVIRONMENT_SLUG === 'local'
    ? winston.format.combine(winston.format.colorize(), winston.format.simple())
    : winston.format.json(),
  transports: [
    new winston.transports.Console(),
  ],
};
