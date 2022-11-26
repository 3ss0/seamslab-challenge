import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {ToastService} from '@core/utils';
import { ShopService } from '@core/services';
import { IProduct } from '@core/models';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit , OnDestroy {
  subscriptions = new Subscription();
  productData: IProduct;
  cartCount: number;
  constructor(
    private Shop: ShopService,
    private router: ActivatedRoute
  ) { }

  getProduct(){
    const id = this.router.snapshot.paramMap.get('id');
    const sub = this.Shop.getProduct(id).subscribe((response) => {
      this.productData = response[0];
    });
    this.subscriptions.add(sub);
  }
  ngOnInit() {
    const sub = this.Shop.cartCount.subscribe((count) => this.cartCount = count);
    this.subscriptions.add(sub);
    this.getProduct();
  }

  addToCart() {
    this.Shop.cartCount.next(this.cartCount + 1);
  }



  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
