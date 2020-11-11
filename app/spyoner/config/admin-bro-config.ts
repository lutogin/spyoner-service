import { AdminModuleOptions } from '@admin-bro/nestjs/src/interfaces/admin-module-options.interface';
import { AuthService } from '../src/admin-panel/auth/auth.service';
import EventResource from '../src/admin-panel/resource/events.resource';
import UserResource from '../src/admin-panel/resource/users.resource';
import { COOKIE_PWD } from './app.config';

const authService = new AuthService();

export const adminBroConfig: AdminModuleOptions = {
  adminBroOptions: {
    rootPath: '/admin',
    loginPath: '/admin/login',
    resources: [
      UserResource,
      EventResource,
    ],
    branding: {
      companyName: 'RIA spy action service',
      softwareBrothers: false,
    },
  },
  auth: {
    authenticate: async (email, password) => authService.auth({ email, password }),
    cookieName: 'adminBroAuthCookie',
    cookiePassword: COOKIE_PWD,
  },
  sessionOptions: {
    secret: COOKIE_PWD,
    resave: true,
    saveUninitialized: true,
  },
};
