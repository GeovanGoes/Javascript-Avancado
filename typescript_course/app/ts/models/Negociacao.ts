import { DateHelper } from "../helpers/index";
import { Objeto } from "./Objeto";

export class Negociacao implements Objeto<Negociacao>
{
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number)
    {
    }

    get volume()
    {
        return this.quantidade * this.valor;
    }

    paraTexto(): void 
    {
        console.log('--paraTexto--');
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        )
    }

    ehIgual(t: Negociacao): boolean 
    {
        console.log(DateHelper.ehIgual(t.data, this.data));
        return DateHelper.ehIgual(t.data, this.data);
    }
    
}