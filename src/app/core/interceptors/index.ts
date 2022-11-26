import { ServerErrorInterceptor } from './server-error.interceptor';
import { AuthInterceptor } from './auth-interceptor';

export const interceptors: any[] = [
  ServerErrorInterceptor,
  AuthInterceptor,
];

export * from './server-error.interceptor';
export * from './auth-interceptor';
