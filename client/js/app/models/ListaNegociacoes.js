class ListaNegociacoes
{
    constructor()
    {
        this._negociacoes = [];
    }

    adiciona(negociacao)
    {
        this._negociacoes.push(negociacao);
        /**Using Reflection ;)
        Reflect.apply(this._callback, this._contexto,[this]);
         */
    }

    get negociacoes()
    {
        return [].concat(this._negociacoes);
    }

    esvazia()
    {
        this._negociacoes = [];
        /**Using Reflection ;) 
        Reflect.apply(this._callback, this._contexto,[this]);
        */
    }

    sort(criterio)
    {
        this._negociacoes.sort(criterio);
    }

    reverse()
    {
        this._negociacoes.reverse();
    }
}