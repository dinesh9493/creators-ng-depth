import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestApiCallsRoutingModule } from './test-api-calls-routing.module';
import { KalpitaJobListComponent } from './components/kalpita-job-list/kalpita-job-list.component';
import { SendEnquiryComponent } from './components/send-enquiry/send-enquiry.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    KalpitaJobListComponent,
    SendEnquiryComponent
  ],
  imports: [
    CommonModule,
    TestApiCallsRoutingModule,
    SharedModule
  ]
})
export class TestApiCallsModule { }
