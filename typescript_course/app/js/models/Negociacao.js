System.register(["../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, Negociacao;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                get volume() {
                    return this.quantidade * this.valor;
                }
                paraTexto() {
                    console.log('--paraTexto--');
                    console.log(`Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`);
                }
                ehIgual(t) {
                    console.log(index_1.DateHelper.ehIgual(t.data, this.data));
                    return index_1.DateHelper.ehIgual(t.data, this.data);
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
