class MensagemView extends View
{
    constructor(elemento){super(elemento);}

    template(model)
    {
        return model.texto.length == 0 ? "" : `<p class="alert alert-info">${model.texto}</p>`;
    }
}