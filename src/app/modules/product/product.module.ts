import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import {SharedModule} from '@shared/shared.module';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import * as fromPages from './pages';

@NgModule({
  declarations: [ProductComponent , ...fromPages.pages],
  imports: [
    CommonModule,
    SharedModule,
    NgbRatingModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
