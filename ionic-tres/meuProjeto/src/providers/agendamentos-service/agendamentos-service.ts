import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agendamento } from '../../modelos/agendamento';
import { Observable } from '../../../node_modules/rxjs/Observable';

/*
  Generated class for the AgendamentosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AgendamentosServiceProvider 
{

  private url: string = 'http://192.168.1.135:8080/api';
  constructor(private http: HttpClient) 
  {
    
  }

  agenda(agendamento: Agendamento)
  {
    return this.http
      .post(this.url + '/agendamento/agenda', agendamento)
      .do(() => {
        agendamento.enviado = true;
      })
      .catch(error => Observable.of(new Error('Falha no agendamento, tente novamente mais tarde')));
  }
}
