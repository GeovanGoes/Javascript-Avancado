import {handleStatus} from './utils/PromiseHelpers.js';
import {log} from './utils/PromiseHelpers.js';

document.querySelector('#myButton').onclick = () => 
{
    fetch("notas")
    .then(handleStatus)
    .then(notas => notas.$flatMap(nota => nota.itens))
    .then(itens => itens.filter(item => item.codigo == '2143'))
    .then(itens => itens.reduce((total, item) => total + item.valor, 0 ))
    .then(console.log)
    .catch(console.log);
};