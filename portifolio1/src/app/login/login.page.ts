import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: string="";
  senha: string="";


  constructor(
    public alertController: AlertController, public navCtrl: NavController, private router: Router) { 
  }

  validarLogin(){
    if(this.user == 'Teste' && this.senha == 'teste123'){
      this.navigate();
    } else {
      this.presentAlertError();
    }
  }

  public navigate(){
   this.router.navigate(['/welcome']);
  }
  
  async presentAlertError() {
    const alert = await this.alertController.create({
      header: 'Usuário e/ou senha Inválidos!',
      message:'Por favor, informe os dados corretamente.',
      buttons: [
        {
          text: 'Ok',
          role: 'confirm',
          cssClass: 'secondary',
          handler: () => {
            console.log('Ok');
          }
        }
      ]
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
