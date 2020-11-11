import { IProcess } from './process.interface';

export class ProcessPresenter {
  static presentId(process: IProcess) {
    return {
      id: process.id,
    };
  }
}
