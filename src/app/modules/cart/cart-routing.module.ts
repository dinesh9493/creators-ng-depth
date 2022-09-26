import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';

const routes: Routes = [
  {
    path: '',
    component: CartContainerComponent,
    children: [
      {
        path: '',
        component: CartItemsComponent,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
