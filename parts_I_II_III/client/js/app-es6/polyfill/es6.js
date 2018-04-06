if (!Array.prototype.includes)
{
    console.info("Polyfill para Attay.includes aplicado.");
    Array.prototype.includes = function(elemento)
    {
        return this.indexOf(elemento) != -1;
    }
}