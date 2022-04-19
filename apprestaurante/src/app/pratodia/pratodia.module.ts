import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratodiaPageRoutingModule } from './pratodia-routing.module';

import { PratodiaPage } from './pratodia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratodiaPageRoutingModule
  ],
  declarations: [PratodiaPage]
})
export class PratodiaPageModule {}
