import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DhabaGuard } from './router-guard/dhaba.guard';

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
    canActivate: [DhabaGuard],
  },
  {
    path: 'vehicle',
    loadChildren: () =>
      import('./modules/vehicle-insurance/vehicle-insurance.module').then(
        (m) => m.VehicleInsuranceModule
      ),
  },
  {
    path: 'test-api',
    loadChildren: () =>
      import('./modules/test-api-calls/test-api-calls.module').then(
        (m) => m.TestApiCallsModule
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
