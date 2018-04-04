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
    }

    adiciona(event)
    {
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Negociação adicionada com sucesso!";
        this._limpaFormulario();
    }

    apaga()
    {
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = "Negociações apagadas com sucesso.";
    }

    _criaNegociacao()
    {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
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
        let service = new NegociacaoService();


        Promise.all([service.obterNegociacoesDaSemana(), 
                    service.obterNegociacoesDaSemanaAnterior(), 
                    service.obterNegociacoesDaSemanaRetrasada()]
                    )
                    .then(negociacoes => 
                    {
                        negociacoes
                        .reduce((arrayAchatado,array) => arrayAchatado.concat(array), [])
                        .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                        this._mensagem.texto = "Negociacoes importadas com sucesso.";
                    })
                    .catch(erro => this._mensagem.texto = erro);
    }

    ordena(criterio)
    {
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