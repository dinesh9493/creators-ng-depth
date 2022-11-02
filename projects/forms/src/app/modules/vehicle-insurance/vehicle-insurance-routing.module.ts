import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { VehicleContainerComponent } from './components/vehicle-container/vehicle-container.component';

const routes: Routes = [
  {
    path: '',
    component: VehicleContainerComponent,
    children: [
      { path: 'personal', component: PersonalDetailsComponent },
      { path: '', redirectTo: 'personal', pathMatch: 'full' },
      { path: '**', redirectTo: 'personal', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleInsuranceRoutingModule {}
