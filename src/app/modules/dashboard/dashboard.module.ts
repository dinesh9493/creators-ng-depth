import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DishComponent } from './components/dish/dish.component';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';


@NgModule({
  declarations: [
    DishComponent,
    DashboardContainerComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
