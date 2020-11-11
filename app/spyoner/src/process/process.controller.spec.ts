import { Test, TestingModule } from '@nestjs/testing';
import { ProcessController } from './process.controller';
import { ProcessPresenter } from './process.presenter';
import { ProcessService } from './process.service';

describe('ProcessController', () => {
  let processController: ProcessController;
  let processService: ProcessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProcessService,
        ProcessPresenter,
      ],
      controllers: [
        ProcessController,
      ],
    })
      .compile();

    processController = await module.get<ProcessController>(ProcessController);
    processService = await module.get<ProcessService>(ProcessService);
  });

  it('should return process id by name', async () => {
    const testProcessName = 'test process name';
    const testProcessId = { id: 'test process id' };
    jest
      .spyOn(processService, 'getProcessIdByName')
      .mockResolvedValue(testProcessId);
    expect(await processController.getProcessIdByName(testProcessName))
      .toBe(testProcessId);
  });

  it('should run process by id and return data', async () => {
    const processId = 'test process id';
    const runProcessData = {
      id: 'id',
      definitionId: 'definitionId',
      businessKey: null,
      caseInstanceId: null,
      ended: false,
      suspended: false,
      tenantId: 'tenantId',
    };
    jest
      .spyOn(processService, 'runProcessById')
      .mockResolvedValue(runProcessData);
    expect(await processController.startProcess(processId))
      .toBe(runProcessData);
  });

});
