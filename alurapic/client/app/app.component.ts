import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent
{
    fotos : Object[] = [];
    /**Injeção de dependencia por tipo de variável */
    constructor (http : Http)
    {
        http.get('v1/fotos')
        .map(res => res.json())
        .subscribe(
            fotos => this.fotos = fotos,
            error => console.log(error)
        );

        
    }
}