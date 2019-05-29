import { Negociacao } from "./Negociacao";
import { Objeto } from "./Objeto";

export class Negociacoes implements Objeto<Negociacoes>
{
    private _negociacoes: Array<Negociacao> = [];

    adiciona (negociacao: Negociacao)
    {
        this._negociacoes.push(negociacao);
    }

    paraArray() : Array<Negociacao>
    {
        return new Array<Negociacao>().concat(this._negociacoes);
    }

    paraTexto() : void
    {
        console.log('-- paraTexto --');
        console.log(JSON.stringify(this._negociacoes));
    }

    ehIgual(t: Negociacoes): boolean 
    {
        return JSON.stringify(this._negociacoes) == JSON.stringify(t.paraArray());
    }
    
}