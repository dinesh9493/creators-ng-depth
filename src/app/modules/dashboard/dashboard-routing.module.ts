import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { DishComponent } from './components/dish/dish.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent,
    children: [
      {
        path: '',
        component: DishComponent,
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
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
