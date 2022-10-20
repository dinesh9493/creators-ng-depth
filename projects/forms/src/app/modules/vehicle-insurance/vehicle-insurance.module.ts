import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleInsuranceRoutingModule } from './vehicle-insurance-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, VehicleInsuranceRoutingModule, SharedModule],
})
export class VehicleInsuranceModule {}
