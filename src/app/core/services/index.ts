import { ShopService } from './shop.service';
import { AuthService } from './auth.service';

export const services: any[] = [
  ShopService,
  AuthService
];

export * from './shop.service';
export * from './auth.service';
