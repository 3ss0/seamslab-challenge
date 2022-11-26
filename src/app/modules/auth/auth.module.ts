import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {SharedModule} from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fromPages from './pages';

@NgModule({
  declarations: [AuthComponent, ...fromPages.pages],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
