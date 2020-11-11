import { ResourceWithOptions } from 'admin-bro';
import { PasswordService } from '../auth/utils/password.service';
import { UserEntity } from '../users/user.entity';

const UserResource: ResourceWithOptions = {
  resource: UserEntity,
  options: {
    properties: {
      id: {
        isVisible: false,
      },
    },
    actions: {
      new: {
        before: async (request) => {
          if (request.payload.password) {
            request.payload = {
              ...request.payload,
              password: await PasswordService.hash(request.payload.password),
            };
          }

          return request;
        },
      },
    },
  },
};

export default UserResource;
