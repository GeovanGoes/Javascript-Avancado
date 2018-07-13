import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Carro } from '../../modelos/carro';
import { AgendamentosServiceProvider } from '../../providers/agendamentos-service/agendamentos-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public carro: Carro;
  public precoTotal: number;

  public nome: string = '';
  public endereco: string = '';
  public email: string = '';
  public data: string = new Date().toISOString();

  private alerta: Alert;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private agendamentosService: AgendamentosServiceProvider,
    private alertController: AlertController) {
    this.carro = this.navParams.get('carroSelecionado');
    this.precoTotal = this.navParams.get('precoTotal');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  agenda()
  {
    if (!this.nome || !this.endereco || !this.email)
    {
      this.alertController.create({
        title: 'Preenchimento obrigatório',
        subTitle: 'Preencha todos os campos',
        buttons: [ { text: 'OK' }]
      }).present();
      return;
    }

    let mensagem: string = '';

    this.alerta = this.alertController.create({
      title: 'Aviso',
      buttons: [
        { text: 'OK', handler: () => { this.navCtrl.setRoot(HomePage) } }
      ]
    });

    this.agendamentosService.agenda({
      nomeCliente: this.nome,
      enderecoCliente: this.endereco,
      emailCliente: this.email,
      modeloCarro: this.carro.nome,
      precoTotal: this.precoTotal,
      data: this.data,
    })
    .finally
    (
      () => 
      {
        this.alerta.setSubTitle(mensagem).present();
      }
    )
    .subscribe(
      () => {
        mensagem = 'Agendamento realizado';
      }, erro => {
        mensagem = 'Falha no agendamento, tente novamente mais tarde';
      });
  }
}
