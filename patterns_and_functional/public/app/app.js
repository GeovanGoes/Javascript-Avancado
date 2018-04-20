import {log} from './utils/PromiseHelpers.js';
import './utils/array-helpers.js';
import {notasService as service} from './nota/service.js';


const ehDivisivel = (divisor, numero) => 
{
    console.log(divisor);
    console.log(numero);
    return !(numero % divisor)
};

/** bind(escopo, parametros do metros a ser bindado) */
const ehDivisivelPorDois = ehDivisivel.bind(null, 2);

console.log(ehDivisivelPorDois(10));
console.log(ehDivisivelPorDois(5));
console.log(ehDivisivelPorDois(12));


document.querySelector('#myButton').onclick = () => 
{
    service
    .sumItens('2143')
    .then(console.log)
    .catch(console.log);
};