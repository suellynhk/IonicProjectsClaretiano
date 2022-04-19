import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobremesasPageRoutingModule } from './sobremesas-routing.module';

import { SobremesasPage } from './sobremesas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobremesasPageRoutingModule
  ],
  declarations: [SobremesasPage]
})
export class SobremesasPageModule {}
