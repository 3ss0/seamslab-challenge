import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth.component';
import { SignInComponent } from './pages';
const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    {
      path: 'signin',
      component: SignInComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
