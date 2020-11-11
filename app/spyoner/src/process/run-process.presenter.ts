import { IRunProcess } from './run-peocess.interface';

export class RunProcessPresenter {
  static presentRunProcess(runProcess: IRunProcess) {
    return {
      id: runProcess.id,
      definitionId: runProcess.definitionId,
      ended: runProcess.ended,
      suspended: runProcess.suspended,
      tenantId: runProcess.tenantId,
    };
  }
}
