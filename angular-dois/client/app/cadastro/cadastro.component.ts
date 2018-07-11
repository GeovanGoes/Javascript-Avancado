import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent 
{
    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    service: FotoService;
    activatedRoute: ActivatedRoute;
    router: Router;
    mensagem: string = '';

    constructor(formBuilder: FormBuilder, service: FotoService, activetedRoute: ActivatedRoute, router: Router)
    {

        this.service = service;
        this.activatedRoute = activetedRoute;
        this.router = router;

        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            if (id)
            {
                this.service.buscaPorId(id)
                .subscribe(
                    foto => this.foto = foto, 
                    error => console.log(error)
                );
            }
        });

        
        this.meuForm = formBuilder.group({
            titulo: [ '', Validators.compose([ Validators.required, Validators.minLength(4) ]) ],
            url: [ '', Validators.required ],
            descricao:[ '' ]
        });
    }
    cadastrar(event)
    {
        event.preventDefault();
        this.service.cadastra(this.foto)
        .subscribe(res => {
            console.log('foto salva com sucesso');
            this.mensagem = res.obterMensagem();
            this.foto = new FotoComponent();
            if (!res.ehInclusao())
                this.router.navigate(['']); 
        }, erro => console.log(erro))
    }
}