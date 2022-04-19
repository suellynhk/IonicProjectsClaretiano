import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobremesasPage } from './sobremesas.page';

const routes: Routes = [
  {
    path: '',
    component: SobremesasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobremesasPageRoutingModule {}
