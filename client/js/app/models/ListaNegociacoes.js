class ListaNegociacoes
{
    constructor()
    {
        this._negociacoes = [];

    }


    adiciona(negociacao)
    {
        this._negociacoes.push(negociacao);
    }

    get negociacoes()
    {
        let copia = this._negociacoes;
        return copia;

    }
}