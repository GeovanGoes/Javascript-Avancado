import {handleStatus, log} from '../utils/PromiseHelpers.js';
import {partialize} from '../utils/operators.js'


const API = 'http://localhost:3000/notas';

const getItensFromNotas = notas => notas.$flatMap(nota => nota.itens);
const filterItensByCode = (code, itens) => itens.filter(item => item.codigo == code);
const sumItensValue = itens => itens.reduce((total, item) => total + item.valor, 0 );

const sumItens = code => 
                    getItensFromNotas =>
                    filterItensByCode =>
                    sumItensValue;

                    /*
const sumItens = code => 
                notas => 
                    notas
                        .$flatMap(nota => nota.itens)
                        .filter(item => item.codigo == code)
                        .reduce((total, item) => total + item.valor, 0 );
*/
export const notasService =
{
    listAll()
    {
        return fetch(API).then(handleStatus);
    },

    sumItens(code)
    {
        partialize
        return this.listAll().then(sumItens(code));
    }
};