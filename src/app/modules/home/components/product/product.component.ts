import { Component, OnInit, Output, EventEmitter , Input} from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '@core/models';

@Component({
  selector: 'app-shop-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() data: IProduct;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate([`product/${this.data.id}`]);
  }


}
