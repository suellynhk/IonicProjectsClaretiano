import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
})

export class BadgePage{
  comentario:string;
  likeValue:number = 35;
  comentValue:number= 14;

  constructor(public alertController: AlertController, public toastController: ToastController) { 
  }

  handleLike(){
    this.likeValue++;
  }

  async coment() {
    const alert = await this.alertController.create({
      header: 'Deixe seu comentário: ',
      inputs: [
        {
          name: 'comentario',
          type: 'textarea', 
          placeholder: 'digite aqui seu comentário...',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Enviar',
          handler: (dados) => {
            if(dados.comentario == ""){
              this.errorToast();
            }else{
              this.comentario = dados.comentario;
              this.comentValue++;
            }
           
          }
        }
      ]
    });
    await alert.present();
  }

  async errorToast(){
    const toast = await this.toastController.create({
      message: 'Você precisa digitar algo, para poder enviar!',
      duration: 2000,
      position: 'top',
      color: "orange"
    });
    toast.present();
  }
}
