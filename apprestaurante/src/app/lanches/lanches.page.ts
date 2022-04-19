import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
})
export class LanchesPage{

  constructor(public modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss()
  }
}
 
