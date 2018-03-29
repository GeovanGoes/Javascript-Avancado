class NegociacoesView
{

    constructor(elemento)
    {
        this._elemento = elemento;
    }

    _template(listaNegociacoes)
    {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${listaNegociacoes.negociacoes.map(item =>
                                `<tr>
                                    <td>${DateHelper.dataParaTexto(item.data)}</td>
                                    <td>${item.quantidade}</td>
                                    <td>${item.valor}</td>
                                    <td>${item.volume}</td>
                                </tr>`
                    ).join('')}
                </tbody>
                
                <tfoot>

                <td colspam="3"></td>
                <td>
                    ${listaNegociacoes.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
                </td>
                </tfoot>
            </table>
        `;
    }

    update(listaNegociacoes)
    {
        this._elemento.innerHTML = this._template(listaNegociacoes);
    }
}