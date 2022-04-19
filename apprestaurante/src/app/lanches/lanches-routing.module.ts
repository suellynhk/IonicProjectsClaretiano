import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanchesPage } from './lanches.page';

const routes: Routes = [
  {
    path: '',
    component: LanchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanchesPageRoutingModule {}
