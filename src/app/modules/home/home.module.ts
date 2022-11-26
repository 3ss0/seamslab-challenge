import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {SharedModule} from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import * as fromPages from './pages';
import * as fromComonents from './components';
import {CategoryFilterPipe , PriceFilterPipe} from './pipes';

@NgModule({
  declarations: [HomeComponent, ...fromPages.pages, ...fromComonents.components , CategoryFilterPipe , PriceFilterPipe],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
