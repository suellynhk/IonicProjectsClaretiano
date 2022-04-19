import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(public toastController: ToastController) {
  } 
    async toastFeliz(){
      const toast = await this.toastController.create({
        message: 'Você clicou em Feliz! Nossos pets também estão felizes por você!',
        duration: 2000,
        position: 'top',
        color: "orange"
      });
      toast.present();
    }

    async toastTriste(){
      const toast = await this.toastController.create({
        message: 'Você clicou em Triste! Faça-nos uma visita, o carinho dos nossos pets pode te alegrar!',
        duration: 2000,
        position: 'top',
        color: "orange"
      });
      toast.present();
    }

    async toastBrava(){
      const toast = await this.toastController.create({
        message: 'Você clicou em Brava(o)! Lembre-se de respirar fundo e cãontar até 10!',
        duration: 2000,
        position: 'top',
        color: "orange"
      });
      toast.present();
    }

    async toastAnsiosa(){
      const toast = await this.toastController.create({
        message: 'Você clicou em Ansiosa(o)! Vai ficar tudo bem! A propósito, se precisar temos cães terapeutas à disposição!',
        duration: 2000,
        position: 'top',
        color: "orange"
      });
      toast.present();
    }

    async toastIncrivel(){
      const toast = await this.toastController.create({
        message: 'Você clicou em incrível! Você é mesmo incrível, obrigada pelo seu apoio!',
        duration: 2000,
        position: 'top',
        color: "orange"
      });
      toast.present();
    } 
}

/*
export class Pessoa{
  nome: string;
  constructor(nomePessoa: string){
    this.nome = nomePessoa;
  }

  mostraNome(){
    console.log(this.nome);
  }
}

export class PessoaController{
  constructor(){}
  criarPessoa(nome: string){
    return new Pessoa(nome);
  }
}

export class PessoaComponent{
  constructor(public pessoaController: PessoaController){}

  toastPessoa(){
    const fulano = this.pessoaController.criarPessoa("Fulano");
    fulano.mostraNome();
  }
}
*/
