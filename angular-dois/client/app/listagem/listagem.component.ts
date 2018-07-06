import { Component } from "@angular/core";
import { FotoService } from "../foto/foto.service";
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'lista',
    templateUrl: 'listagem.component.html'
})
export class ListagemComponent 
{
    fotos : FotoComponent[] = [];
    /**Injeção de dependencia por tipo de variável */
    constructor (service: FotoService)
    {
        service.lista()
        .subscribe(
            fotos => this.fotos = fotos,
            error => console.log(error)
        );
    }
 }