import { ResourceWithOptions } from 'admin-bro';
import { ProcessService } from '../../process/process.service';
import { EventEntity } from '../../events/event.entity';

const processService = new ProcessService();

const EventResource: ResourceWithOptions = {
  resource: EventEntity,
  options: {
    properties: {
      id: {
        isVisible: false,
      },
      processId: {
        isDisabled: true,
      },
    },
    actions: {
      new: {
        before: async (request) => {
          if (request.payload.processName) {
            request.payload = {
              ...request.payload,
              processId: (await processService.getProcessIdByName(request.payload.processName)).id,
            };
          }
          return request;
        },
      },
    },
  },
};

export default EventResource;
