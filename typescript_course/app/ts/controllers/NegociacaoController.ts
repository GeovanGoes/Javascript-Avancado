import { Negociacoes, Negociacao } from "../models/index";
import { NegociacoesView, MensagemView } from "../views/index";
import { logarTempoDeExecucao, domInject } from "../helpers/decorators/index";
import { DateHelper } from "../helpers/index";


export class NegociacaoController 
{
    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView = new MensagemView("#mensagemView");

    constructor()
    {
        this._negociacoesView.update(this._negociacoes);
    }

    @logarTempoDeExecucao()
    adiciona(event: Event) 
    {
        let date = DateHelper.textoParaData(this._inputData.val());
        if(!DateHelper.ehDiaUtil(date))
        {
            this._mensagemView.update("Negociacoes apenas em dias úteis!");
        }
        else
        {
            const negociacao = new Negociacao
            (
                    date, 
                    parseInt(this._inputQuantidade.val()), 
                    parseFloat(this._inputValor.val())
            );
    
            this._negociacoes.adiciona(negociacao);
            this._negociacoesView.update(this._negociacoes);
            this._mensagemView.update("Negociação adidiconada com sucesso!");
        }
        event.preventDefault();
    }

    importadados()
    {

        function isOk(res: Response)
        {
            if (res.ok)
                return res;
            else
                throw new Error(res.statusText)
        }

        fetch('http://localhost:8080/dados')
        .then(res => isOk(res))
        .then(response => response.json())
        .then((dados: any[] ) => 
        {
            dados
            .map(dado => new Negociacao(new Date(), dado.vezes, dado.vezes))
            .forEach(negociacao => this._negociacoes.adiciona(negociacao));
            this._negociacoesView.update(this._negociacoes);
        })
        .catch(err => console.error(err.message));

        
    }
}