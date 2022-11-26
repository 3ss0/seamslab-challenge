import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {ToastService} from '@core/utils';
import { ShopService } from '@core/services';
import { IProduct } from '@core/models';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit , OnDestroy {
  subscriptions = new Subscription();
  categoriesFilter: {label: string ; value: string}[]= [];
  pricesFilter: {label: string ; value: string}[]= [];
  products: IProduct[] = [];
  selectedCategories: string[] = [];
  selectedPrices: {to: number ; from : number}[] = [];
  constructor(
    private toaster: ToastService,
    private Shop: ShopService,
  ) { }

  getProducts(searchValue){
    this.Shop.getProducts(searchValue,[]).subscribe((response) => {
      this.extractFilters(response);
      this.products = response;
    })
  }
  ngOnInit() {
    const sub = this.Shop.productSearchValue.subscribe((res) => {
      this.getProducts(res);
    });
    this.subscriptions.add(sub);
  }

  extractFilters(products: IProduct[]) {
    const categories = [];
    const prices = [];
    const pricesFilters = [];
    products.forEach(({category , price}) => {
      if(!categories.includes(category)) categories.push(category);
      prices.push(price);
    });
    const minimumPrice = Math.floor(Math.min(...prices)/100)*100;
    const maximuPrice = Math.ceil(Math.max(...prices)/100)*100;
    for(let i = minimumPrice ; i < maximuPrice ; i+=100) {
      pricesFilters.push({
        label: `Price ${i} -> ${i+100}`,
        value: `${i}-${i+100}`
      });
    }
    this.pricesFilter = pricesFilters;
    this.categoriesFilter = categories.map((val) => ({label: val , value: val}));
  }

  onSelectCategoriesHandler(selectedItems: string[]) {
    this.selectedCategories = selectedItems;
  }

  onSelectPricesHandler(selectedItems: string[]) {
    this.selectedPrices = selectedItems.map((val) => {
      const [from , to] = val.split('-');
      return {to : Number(to) , from: Number(from)};
    });
  }


  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
