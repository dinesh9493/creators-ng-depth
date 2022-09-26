import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterContainerComponent } from './components/starter-container/starter-container.component';
import { StarterComponent } from './components/starter/starter.component';

const routes: Routes = [
  {
    path: '',
    component: StarterContainerComponent,
    children: [
      {
        path: '',
        component: StarterComponent,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
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
export class StartersRoutingModule {}
