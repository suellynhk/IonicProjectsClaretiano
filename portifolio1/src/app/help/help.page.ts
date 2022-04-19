import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})

export class HelpPage implements OnInit {
  email: string;
  telefone: string;

  constructor(public alertController: AlertController, public toastController: ToastController) { 
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Digite seus dados, por favor:',
      inputs: [
        {
          name: 'email',
          type: 'email', 
          placeholder: 'e-mail',
        },
        {
          name: 'telefone',
          type: 'tel',
          placeholder: 'telefone'
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
            if( dados.email == "" || dados.telefone == ""){
              this.presentToast();
            }else{
              this.email = dados.email;
              this.telefone = dados.telefone;
            }
            
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Por favor, preencha todos os campos!',
      duration: 2000,
      position: 'top',
      color: "orange"
    });
    toast.present();
  }

  ngOnInit() {
  }

}
