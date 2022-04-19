import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratodiaPage } from './pratodia.page';

const routes: Routes = [
  {
    path: '',
    component: PratodiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratodiaPageRoutingModule {}
