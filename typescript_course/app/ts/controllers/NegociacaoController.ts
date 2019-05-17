import { Negociacoes, Negociacao, NegociacaoPacial } from "../models/index";
import { NegociacoesView, MensagemView } from "../views/index";
import { logarTempoDeExecucao, domInject, throttle } from "../helpers/decorators/index";
import { DateHelper, imprime } from "../helpers/index";
import { NegociacaoService } from "../service/index";

//type alias
type MeuToken = string | number;


function processaToken(token: MeuToken)
{
    if (typeof(token) === 'string')
    {
        // recebido eh uma string
    }
    else
    {
        // eh um numero
    }
}

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
    private _negociacaoService = new NegociacaoService();

    constructor()
    {
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle(500)
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
            
            imprime(negociacao);
            this._negociacoes.adiciona(negociacao);
            this._negociacoesView.update(this._negociacoes);
            this._mensagemView.update("Negociação adidiconada com sucesso!");
        }
        
    }

    @throttle(500)
    async importadados()
    {
        try 
        {
            const negociacoesParaImportar = await this._negociacaoService.obterNegociacoes((res: Response) => {
                if (res.ok)
                    return res;
                else
                    throw new Error(res.statusText)
            });            
            const negociacoesJaImportadas = this._negociacoes.paraArray();
    
            negociacoesParaImportar.filter(negociacao => !negociacoesJaImportadas.some(jaImportada => negociacao.ehIgual(jaImportada)))
            .forEach(negociacao => this._negociacoes.adiciona(negociacao));
            this._negociacoesView.update(this._negociacoes);
            imprime(this._negociacoes);
        } 
        catch (error) 
        {
            this._mensagemView.update(error.message)
        }
    }
}