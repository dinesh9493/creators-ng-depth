import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleInsuranceRoutingModule } from './vehicle-insurance-routing.module';
import { SharedModule } from '../shared/shared.module';
import { VehicleContainerComponent } from './components/vehicle-container/vehicle-container.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';

@NgModule({
  declarations: [
    VehicleContainerComponent,
    PersonalDetailsComponent
  ],
  imports: [CommonModule, VehicleInsuranceRoutingModule, SharedModule],
})
export class VehicleInsuranceModule {}
