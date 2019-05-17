import { NegociacaoPacial, Negociacao } from "../models/index";

export class NegociacaoService
{
    obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]>
    {
        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(response => response.json())
            .then((dados: NegociacaoPacial[] ) => dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.vezes)))
            .catch(err => 
                {
                    console.error(err.message);
                    throw new Error("A API ta bugada...");
                });
    }
}

export interface HandlerFunction
{
    (res: Response): Response
}