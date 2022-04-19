import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage {

  constructor(public modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss()
  }
}