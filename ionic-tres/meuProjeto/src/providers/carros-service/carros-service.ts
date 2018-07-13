import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carro } from '../../modelos/carro';

/*
  Generated class for the CarrosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarrosServiceProvider {

  constructor(public http: HttpClient) 
  {

  }

  lista()
  {
    return this.http
    .get<Carro[]>('http://192.168.1.135:8080/api/carro/listaTodos');
  }

}
