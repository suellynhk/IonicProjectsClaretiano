import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanchesPageRoutingModule } from './lanches-routing.module';

import { LanchesPage } from './lanches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanchesPageRoutingModule
  ],
  declarations: [LanchesPage]
})
export class LanchesPageModule {}
