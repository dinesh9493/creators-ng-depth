import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home-insurance/home-insurance.module').then(
        (m) => m.HomeInsuranceModule
      ),
  },
  {
    path: 'vehicle',
    loadChildren: () =>
      import('./modules/vehicle-insurance/vehicle-insurance.module').then(
        (m) => m.VehicleInsuranceModule
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
