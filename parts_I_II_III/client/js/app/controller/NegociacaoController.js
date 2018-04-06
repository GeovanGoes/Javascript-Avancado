'use strict';

System.register(['../models/ListaNegociacoes', '../models/Mensagem', '../models/Negociacao', '../views/MensagemView', '../views/NegociacoesView', '../services/NegociacaoService', '../helpers/DateHelper', '../helpers/Bind'], function (_export, _context) {
    "use strict";

    var ListaNegociacoes, Mensagem, Negociacao, MensagemView, NegociacoesView, NegociacaoService, DateHelper, Bind, _createClass, NegociacaoController, negociacaoController;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_modelsListaNegociacoes) {
            ListaNegociacoes = _modelsListaNegociacoes.ListaNegociacoes;
        }, function (_modelsMensagem) {
            Mensagem = _modelsMensagem.Mensagem;
        }, function (_modelsNegociacao) {
            Negociacao = _modelsNegociacao.Negociacao;
        }, function (_viewsMensagemView) {
            MensagemView = _viewsMensagemView.MensagemView;
        }, function (_viewsNegociacoesView) {
            NegociacoesView = _viewsNegociacoesView.NegociacoesView;
        }, function (_servicesNegociacaoService) {
            NegociacaoService = _servicesNegociacaoService.NegociacaoService;
        }, function (_helpersDateHelper) {
            DateHelper = _helpersDateHelper.DateHelper;
        }, function (_helpersBind) {
            Bind = _helpersBind.Bind;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            NegociacaoController = function () {
                function NegociacaoController() {
                    _classCallCheck(this, NegociacaoController);

                    var $ = document.querySelector.bind(document);

                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');

                    /**Arrow function tem escopo léxico, o this fica amarrado a seu objeto de origem */

                    this._listaNegociacoes = new Bind(new ListaNegociacoes(), new NegociacoesView($('#negociacoes-view')), 'adiciona', 'esvazia', 'sort', 'reverse');
                    this._mensagem = new Bind(new Mensagem(), new MensagemView($('#mensagem-view')), 'texto');

                    this._ordemAtual = '';

                    this._service = new NegociacaoService();

                    this._init();
                }

                _createClass(NegociacaoController, [{
                    key: '_init',
                    value: function _init() {
                        var _this = this;

                        this._listaTodos();

                        setInterval(function () {
                            _this.importarNegociacoes();
                        }, 3000);
                    }
                }, {
                    key: 'apagaTodos',
                    value: function apagaTodos() {
                        var _this2 = this;

                        this._service.apagaTodos().then(function (mensagem) {
                            _this2._listaNegociacoes.esvazia();
                            _this2._mensagem.texto = mensagem;
                        }).catch(function (erro) {
                            return _this2._mensagem.texto = erro;
                        });
                    }
                }, {
                    key: '_listaTodos',
                    value: function _listaTodos() {
                        var _this3 = this;

                        this._service.listaTodos().then(function (negociacoes) {
                            return negociacoes.forEach(function (negociacao) {
                                return _this3._listaNegociacoes.adiciona(negociacao);
                            });
                        }).catch(function (erro) {
                            return _this3._mensagem.texto = erro;
                        });
                    }
                }, {
                    key: 'adiciona',
                    value: function adiciona(event) {
                        var _this4 = this;

                        event.preventDefault();

                        var negociacao = this._criaNegociacao();
                        this._service.cadastra(negociacao).then(function (mensagem) {
                            _this4._listaNegociacoes.adiciona(negociacao);
                            _this4._mensagem.texto = mensagem;
                            _this4._limpaFormulario();
                        }).catch(function (erro) {
                            return _this4._mensagem.texto = erro;
                        });
                    }
                }, {
                    key: '_criaNegociacao',
                    value: function _criaNegociacao() {
                        return new Negociacao(DateHelper.textoParaData(this._inputData.value), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
                    }
                }, {
                    key: '_limpaFormulario',
                    value: function _limpaFormulario() {
                        this._inputData.value = '';
                        this._inputQuantidade.value = 1;
                        this._inputValor.value = 0.0;
                        this._inputData.focus();
                    }
                }, {
                    key: 'importarNegociacoes',
                    value: function importarNegociacoes() {
                        var _this5 = this;

                        this._service.importa(this._listaNegociacoes.negociacoes).then(function (negociacoes) {
                            negociacoes.forEach(function (negociacao) {
                                return _this5._listaNegociacoes.adiciona(negociacao);
                            });
                            _this5._mensagem.texto = "Negociacoes importadas com sucesso.";
                        }).catch(function (erro) {
                            return _this5._mensagem.texto = erro;
                        });
                    }
                }, {
                    key: 'ordena',
                    value: function ordena(criterio) {
                        console.log("criterio");
                        console.log(criterio);

                        if (criterio == this._ordemAtual) {
                            this._listaNegociacoes.reverse();
                        } else {
                            this._listaNegociacoes.sort(function (itemOne, itemTwo) {
                                return itemOne[criterio] - itemTwo[criterio];
                            });
                        }
                        this._ordemAtual = criterio;
                    }
                }]);

                return NegociacaoController;
            }();

            negociacaoController = new NegociacaoController();
            function currentInstance() {
                return negociacaoController;
            }

            _export('currentInstance', currentInstance);
        }
    };
});
//# sourceMappingURL=NegociacaoController.js.map