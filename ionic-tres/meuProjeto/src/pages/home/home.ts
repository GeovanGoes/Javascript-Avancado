import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Carro } from '../../modelos/carro';
import { HttpErrorResponse } from '@angular/common/http';
import { CarrosServiceProvider } from '../../providers/carros-service/carros-service';
import { NavLifecycles } from '../../utils/ionic/nav/nav-lifecycles';
import { EscolhaPage } from '../escolha/escolha';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecycles
{

  public carros: Carro[];

  constructor(
    public navCtrl: NavController, 
    private loadingController: LoadingController,
    private alertController: AlertController,
    private carrosService: CarrosServiceProvider) 
  {

  }

  ionViewDidLoad()
  {
    let loading = this.loadingController.create({
      content: 'Carregando carros...'
    })

    loading.present();

    this.carrosService
      .lista()
      .subscribe(res => 
      {
        this.carros = res
        loading.dismiss();
      }, (error: HttpErrorResponse) => {
        console.log(error);
        loading.dismiss();
        this.alertController.create({
          title: 'Falha na conexão',
          subTitle: 'Não foi possível carregar a lista de carros.',
          buttons: [{text: 'Ok'}]
        }).present();
      });
  }
  

  selecionaCarro(carro: Carro)
  {
    console.log(carro);
    this.navCtrl.push(EscolhaPage.name, {
      carroSelecionado: carro
    });
  }
}
