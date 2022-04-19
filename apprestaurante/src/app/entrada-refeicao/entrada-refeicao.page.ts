import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-entrada-refeicao',
  templateUrl: './entrada-refeicao.page.html',
  styleUrls: ['./entrada-refeicao.page.scss'],
})
export class EntradaRefeicaoPage{

  
  constructor(public modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss()
  }
}