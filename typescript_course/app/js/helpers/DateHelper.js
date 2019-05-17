System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DateHelper, DiaDaSemana;
    return {
        setters: [],
        execute: function () {
            DateHelper = class DateHelper {
                constructor() {
                    throw new Error('DateHelper não pode ser instanciado.');
                }
                static dataParaTexto(data) {
                    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
                }
                static textoParaData(texto) {
                    if (!/\d{4}-\d{2}-\d{2}/.test(texto))
                        throw new Error('Deve estar no formato aaaa-mm-dia');
                    return new Date(parseInt(texto.split("-")[0]), parseInt(texto.split("-")[1]) - 1, parseInt(texto.split("-")[2]));
                }
                static ehDiaUtil(date) {
                    return date.getDay() != DiaDaSemana.Domingo && date.getDay() != DiaDaSemana.Sabado;
                }
                static ehIgual(dateOne, dateTwo) {
                    return dateOne.getDate() == dateTwo.getDate()
                        && dateOne.getMonth() == dateTwo.getMonth()
                        && dateOne.getFullYear() == dateTwo.getFullYear();
                }
            };
            exports_1("DateHelper", DateHelper);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
            })(DiaDaSemana || (DiaDaSemana = {}));
            exports_1("DiaDaSemana", DiaDaSemana);
        }
    };
});
