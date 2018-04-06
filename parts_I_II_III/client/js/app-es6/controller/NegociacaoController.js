import {ListaNegociacoes} from '../models/ListaNegociacoes';
import {Mensagem} from '../models/Mensagem';
import {Negociacao} from '../models/Negociacao';

import {MensagemView} from '../views/MensagemView';
import {NegociacoesView} from '../views/NegociacoesView';

import {NegociacaoService} from '../services/NegociacaoService';

import {DateHelper} from '../helpers/DateHelper';
import {Bind} from '../helpers/Bind';

class NegociacaoController
{

    constructor()
    {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        /**Arrow function tem escopo léxico, o this fica amarrado a seu objeto de origem */
        
        this._listaNegociacoes = new Bind(new ListaNegociacoes(), new NegociacoesView($('#negociacoes-view')), 'adiciona', 'esvazia', 'sort', 'reverse');
        this._mensagem = new Bind(new Mensagem(), new MensagemView($('#mensagem-view')), 'texto');

        this._ordemAtual = '';

        this._service = new NegociacaoService();

        this._init();
        
    }

    _init()
    {
        this._listaTodos();

        setInterval(() =>
        {
            this.importarNegociacoes();    
        }, 3000);
    }

    apagaTodos()
    {
        this._service
            .apagaTodos()
            .then(mensagem => 
            {
                this._listaNegociacoes.esvazia();
                this._mensagem.texto = mensagem;
            })
            .catch(erro => this._mensagem.texto = erro);
    }

    _listaTodos()
    {
        this._service
            .listaTodos()
            .then(negociacoes => 
                negociacoes.forEach(negociacao => 
                    this._listaNegociacoes.adiciona(negociacao)))
            .catch(erro => this._mensagem.texto = erro);  
    }   

    adiciona(event)
    {
        event.preventDefault();

        let negociacao = this._criaNegociacao();
        this._service
            .cadastra(negociacao)
            .then(mensagem =>
            {
                this._listaNegociacoes.adiciona(negociacao);
                this._mensagem.texto = mensagem;
                this._limpaFormulario();
            })
            .catch(erro => this._mensagem.texto = erro);
    }

    _criaNegociacao()
    {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }

    _limpaFormulario()
    {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

    importarNegociacoes()
    {
        this._service
        .importa(this._listaNegociacoes.negociacoes)
        .then(negociacoes => 
        {
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = "Negociacoes importadas com sucesso.";
        })
        .catch(erro => this._mensagem.texto = erro);        
    }

    ordena(criterio)
    {
        console.log("criterio");
        console.log(criterio);

        if(criterio == this._ordemAtual)
        {
            this._listaNegociacoes.reverse();
        }
        else
        {
            this._listaNegociacoes.sort((itemOne, itemTwo) => itemOne[criterio] - itemTwo[criterio]);
        }
        this._ordemAtual = criterio;
    }
}

let negociacaoController = new NegociacaoController();
export function currentInstance()
{
    return negociacaoController;
}