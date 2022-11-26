import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import { ShopComponent } from './pages';
const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: '',
      component: ShopComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
