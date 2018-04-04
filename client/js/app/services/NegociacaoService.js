class NegociacaoService
{

    constructor()
    {
        this._http = new HttpService();
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
}