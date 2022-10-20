import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeInsuranceRoutingModule } from './home-insurance-routing.module';
import { HomeHostComponent } from './components/home-host/home-host.component';
import { OwnerInfoComponent } from './components/owner-info/owner-info.component';
import { PropertyInfoComponent } from './components/property-info/property-info.component';
import { ReviewComponent } from './components/review/review.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeHostComponent,
    OwnerInfoComponent,
    PropertyInfoComponent,
    ReviewComponent,
  ],
  imports: [CommonModule, HomeInsuranceRoutingModule, SharedModule],
})
export class HomeInsuranceModule {}
