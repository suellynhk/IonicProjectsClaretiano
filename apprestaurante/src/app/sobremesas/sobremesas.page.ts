import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sobremesas',
  templateUrl: './sobremesas.page.html',
  styleUrls: ['./sobremesas.page.scss'],
})
export class SobremesasPage {

  constructor(public modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss()
  }
}
 
