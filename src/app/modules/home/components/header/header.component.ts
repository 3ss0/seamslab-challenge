import { Component, OnInit , OnDestroy } from '@angular/core';
import { ShopService } from '@core/services';
import { AuthService } from '@core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , OnDestroy {
 
  currentUser: string;
  cartCount: number;
  subscriptions = new Subscription();
  constructor(
    private Shop: ShopService,
    private authService: AuthService
  ) {
   
  }

  ngOnInit() {
    const sub1 = this.authService.authenticatedUser.subscribe((user) => this.currentUser = user);
    const sub2 = this.Shop.cartCount.subscribe((count) => this.cartCount = count);
    this.subscriptions.add(sub1);
    this.subscriptions.add(sub2);
  }

  onSearchHandler(searchValue) {
    this.Shop.productSearchValue.next(searchValue);
  }

  signOut() {
    this.authService.logout();
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

 
}
