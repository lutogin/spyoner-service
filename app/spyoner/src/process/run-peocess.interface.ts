interface IProcessRunLinks {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH';
  href: string;
  rel: string;
}

export interface IRunProcess {
  id: string;
  definitionId: string;
  businessKey: string | null;
  caseInstanceId: string | null;
  ended: boolean;
  suspended: boolean;
  tenantId: string;
  links?: IProcessRunLinks[];
}
