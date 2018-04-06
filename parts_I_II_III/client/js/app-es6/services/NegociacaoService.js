import {HttpService} from './HttpService';
import {ConnectionFactory} from './ConnectionFactory';
import {NegociacaoDao} from '../dao/NegociacaoDao';
import {Negociacao} from '../models/Negociacao';

export class NegociacaoService
{

    constructor()
    {
        this._http = new HttpService();
    }

    obterNegociacoes()
    {
        return Promise.all([this.obterNegociacoesDaSemana(), 
                    this.obterNegociacoesDaSemanaAnterior(), 
                    this.obterNegociacoesDaSemanaRetrasada()])
                    .then(periodos => 
                    {
                        let negociacoes = periodos
                        .reduce((dados, periodo) => dados.concat(periodo), [])
                        .map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor ));
                        return negociacoes;
                    }).catch(erro => {throw new Error(erro)});
    }

    obterNegociacoesDaSemana()
    {
        return this._obterNegociacoes('negociacoes/semana',"Não foi possível obter as negociações da semana.");
    }

    obterNegociacoesDaSemanaRetrasada()
    {
        return this._obterNegociacoes('negociacoes/retrasada',"Não foi possível obter as negociações da semana retrasada.");
    }

    obterNegociacoesDaSemanaAnterior()
    {
        return this._obterNegociacoes('negociacoes/anterior',"Não foi possível obter as negociações da semana anterior.");
    }

    _obterNegociacoes(url, mensagemErro)
    {
        return new Promise((resolve, reject) => 
        {
            this._http
                .get(url)
                .then(negociacoes => resolve(negociacoes.map((objeto) => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))))
                .catch(erro => {
                    console.error(erro);
                    reject(mensagemErro);
                });     
        });
    }

    cadastra(negociacao)
    {
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.adiciona(negociacao))
            .then(() => 'Negociacao adicionada com sucesso.')
            .catch(erro => {throw new Error(erro)})
    }

    listaTodos()
    {
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.listaTodos())
            .catch(erro => 
            {
                throw new Error(erro);    
            });
    }

    apagaTodos()
    {
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.apagaTodos())
            .catch(erro =>
            {
                throw new Error(erro);
            })
    }

    importa(listaAtual)
    {
        return this.obterNegociacoes()
        .then(negociacoes => 
            negociacoes.filter(negociacao => 
                !listaAtual.some(negociacaoExistente => 
                    JSON.stringify(negociacao) == JSON.stringify(negociacaoExistente))))
        .catch(erro => 
        {
            console.error(erro);
            throw new Error(erro)
        });
    }

}