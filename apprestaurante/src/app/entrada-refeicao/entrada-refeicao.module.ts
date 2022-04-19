import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradaRefeicaoPageRoutingModule } from './entrada-refeicao-routing.module';

import { EntradaRefeicaoPage } from './entrada-refeicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradaRefeicaoPageRoutingModule
  ],
  declarations: [EntradaRefeicaoPage]
})
export class EntradaRefeicaoPageModule {}
