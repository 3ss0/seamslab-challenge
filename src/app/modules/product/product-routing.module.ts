import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './pages';
import {ProductComponent} from './product.component';
const routes: Routes = [{
  path: '',
  component: ProductComponent,
  children: [
    {
      path: '',
      component: ViewComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
