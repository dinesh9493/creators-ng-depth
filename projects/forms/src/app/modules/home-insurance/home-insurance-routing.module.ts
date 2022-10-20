import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeHostComponent } from './components/home-host/home-host.component';
import { OwnerInfoComponent } from './components/owner-info/owner-info.component';
import { PropertyInfoComponent } from './components/property-info/property-info.component';
import { ReviewComponent } from './components/review/review.component';

const routes: Routes = [
  {
    path: '',
    component: HomeHostComponent,
    children: [
      { path: 'owner', component: OwnerInfoComponent },
      { path: 'property', component: PropertyInfoComponent },
      { path: 'review', component: ReviewComponent },
      { path: '', redirectTo: 'owner', pathMatch: 'full' },
      { path: '**', redirectTo: 'owner', pathMatch: 'full' },
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
export class HomeInsuranceRoutingModule {}
