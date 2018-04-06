import {View} from './View';
import {DateHelper} from '../helpers/DateHelper';
import {currentInstance} from '../controller/NegociacaoController';

export class NegociacoesView extends View
{

    constructor(elemento)
    {
        super(elemento);

        elemento.addEventListener('click', function(event)
        {
            if (event.target.nodeName == 'TH')
                currentInstance().ordena(event.target.textContent.toLowerCase());
        });
    }

    template(listaNegociacoes)
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

                <td colspan="3"></td>
                <td>
                    ${listaNegociacoes.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
                </td>
                </tfoot>
            </table>
        `;
    }
}