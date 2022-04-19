import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntradaRefeicaoPage } from './entrada-refeicao.page';

const routes: Routes = [
  {
    path: '',
    component: EntradaRefeicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntradaRefeicaoPageRoutingModule {}
