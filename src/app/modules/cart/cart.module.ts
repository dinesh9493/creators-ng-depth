import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';


@NgModule({
  declarations: [
    CartContainerComponent,
    CartItemsComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
