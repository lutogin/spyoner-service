import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { first } from 'lodash';
import { Logger } from 'winston';
import * as winston from 'winston';
import { comundaClientConfig } from '../../config/comunda-client.config';
import { winstonConfig } from '../../config/winston.config';
import { ProcessPresenter } from './process.presenter';
import { ProcessId, ProcessName } from './process.types';
import { IRunProcess } from './run-peocess.interface';
import { RunProcessPresenter } from './run-process.presenter';

@Injectable()
export class ProcessService {
  private readonly PROCESS_DEFINITION_URL = 'process-definition';
  private logger: Logger;
  private client: AxiosInstance;

  constructor() {
    this.logger = winston.createLogger(winstonConfig).child({ context: 'event.service' });
    this.client = axios.create(comundaClientConfig);
  }

  async runProcessById(processId: ProcessId): Promise<IRunProcess> {
    try {
      this.logger.info(`Try to run process: ${processId}`);
      const { data } = await this.client.post(`/${this.PROCESS_DEFINITION_URL}/${processId}/start`, {});
      this.logger.info('Run process data', RunProcessPresenter.presentRunProcess(data));
      return data;
    } catch (err) {
      this.logger.error('Error on run process.', {
        originalMessage: err.message,
        err,
      });
      throw new Error(err);
    }
  }

  async getProcessIdByName(processName: ProcessName): Promise<{ id: ProcessId }> {
    try {
      this.logger.info(`Get process id NAME: ${processName}`);
      const { data } = await this.client.get(`/${this.PROCESS_DEFINITION_URL}?key=${processName}`);
      if (!data.length) {
        this.logger.error(`No process was found with the name "${processName}"`);
        throw new Error();
      }
      return ProcessPresenter.presentId(first(data));
    } catch (err) {
      this.logger.error('Error on create new event.', {
        originalMessage: err.message,
        err,
      });
      throw new Error(err);
    }
  }
}
