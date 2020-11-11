import { ProcessId } from './process.types';

export interface IProcess {
  id: ProcessId,
  key: string,
  category: string,
  description: null | string,
  name: null | string,
  version: number,
  resource: string,
  deploymentId: string,
  diagram: null | string,
  suspended: boolean,
  tenantId: string,
  versionTag: null | string,
  historyTimeToLive: null | string,
  startableInTasklist: boolean,
}
