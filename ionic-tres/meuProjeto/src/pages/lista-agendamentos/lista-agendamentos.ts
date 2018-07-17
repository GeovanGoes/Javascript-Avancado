import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { AgendamentoDaoProvider } from '../../providers/agendamento-dao/agendamento-dao';
import { Agendamento } from '../../modelos/agendamento';
import { AgendamentosServiceProvider } from '../../providers/agendamentos-service/agendamentos-service';

@IonicPage()
@Component({
  selector: 'page-lista-agendamentos',
  templateUrl: 'lista-agendamentos.html',
})
export class ListaAgendamentosPage {

  agendamentos: Agendamento[] = [];
  alerta: Alert;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private agendamentoDAO: AgendamentoDaoProvider,
    private agendamentoService: AgendamentosServiceProvider,
    private alertController: AlertController) 
  {

  }

  ionViewDidLoad() 
  {
    this.agendamentoDAO
    .listaTodos()
    .subscribe(
      (agendamentos: Agendamento[]) => 
      {
        this.agendamentos = agendamentos;
      }
    )
  }


  reenvia(agendamento: Agendamento)
  {

    let mensagem: string = '';

    this.alerta = this.alertController.create({
      title: 'Aviso',
      buttons: [
        { text: 'OK' }
      ]
    });

    this.agendamentoService.agenda(agendamento)                        
    .mergeMap((valor) => {
      let observable = this.agendamentoDAO.salva(agendamento);
      if (valor instanceof Error)
      {
        throw valor;
      }
      return observable;
    })
    .finally
    (
      () => 
      {
        this.alerta.setSubTitle(mensagem).present();
      }
    )
    .subscribe(
      () => mensagem = 'Agendamento reenviado', 
      (erro: Error) => mensagem = erro.message
    );
  }
}
