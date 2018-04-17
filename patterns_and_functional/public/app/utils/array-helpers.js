if(!Array.prototype.$flatMap)
{
    Array.prototype.$flatMap = function (cb)
    {
        this.map(cb).reduce((array, nota) => array.concat(nota.itens), []);
    }
}