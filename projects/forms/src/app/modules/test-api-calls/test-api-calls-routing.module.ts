import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KalpitaJobListComponent } from './components/kalpita-job-list/kalpita-job-list.component';
import { SendEnquiryComponent } from './components/send-enquiry/send-enquiry.component';

const routes: Routes = [
  {
    path: 'job-list',
    component: KalpitaJobListComponent,
  },
  {
    path: 'send-enquiry',
    component: SendEnquiryComponent,
  },
  {
    path: '',
    redirectTo: 'job-list',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'job-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestApiCallsRoutingModule {}
