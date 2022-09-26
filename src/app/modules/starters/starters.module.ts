import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartersRoutingModule } from './starters-routing.module';
import { StarterComponent } from './components/starter/starter.component';
import { StarterContainerComponent } from './components/starter-container/starter-container.component';


@NgModule({
  declarations: [
    StarterComponent,
    StarterContainerComponent
  ],
  imports: [
    CommonModule,
    StartersRoutingModule
  ]
})
export class StartersModule { }
