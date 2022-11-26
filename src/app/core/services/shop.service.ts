import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {RequestService} from '@core/utils';
@Injectable({
  providedIn: 'root',
})
export class ShopService {
  public productCategories: BehaviorSubject<string[]>;
  public productSearchValue: BehaviorSubject<string> = new BehaviorSubject('');
  public cartCount: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor(
    private requestService: RequestService,
  ) {
  }

  getProducts(search: string , categories: string[]) {
    const url = `products?q=${search}`;
    return this.requestService.get(url);
  }

  getProduct(id: string) {
    const url = `products?id=${id}`;
    return this.requestService.get(url);
  }
}
