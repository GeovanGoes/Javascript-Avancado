import { Injectable } from '@angular/core';
import { Agendamento } from '../../modelos/agendamento';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

@Injectable()
export class AgendamentoDaoProvider {

  constructor(private storage: Storage) 
  {
    
  }

  private geraChave(agendamento: Agendamento) : string
  {
    return agendamento.emailCliente + agendamento.data.substr(0,10);
  }

  salva (agendamento: Agendamento)
  {
    let chave = this.geraChave(agendamento);
    let promisse = this.storage.set(chave, agendamento);
    
    return Observable.fromPromise(promisse);
  }

  ehDuplicado(agendamento: Agendamento) 
  {
    return Observable
              .fromPromise(
                this.storage
                  .get(this.geraChave(agendamento))
                  .then(dado => dado ? true : false))
  }

  listaTodos()
  {
    let agendamentos: Agendamento [] = [];
    
    let promisse = this.storage.forEach((agendamento: Agendamento) => {
      agendamentos.push(agendamento);
    })
    .then(() => agendamentos);

    return Observable.fromPromise(promisse);
  }
}
