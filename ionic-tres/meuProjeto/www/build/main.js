webpackJsonp([3],{

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		297,
		8
	],
	"../pages/escolha/escolha.module": [
		298,
		7
	],
	"../pages/lista-agendamentos/lista-agendamentos.module": [
		299,
		6
	],
	"../pages/login/login.module": [
		300,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CarrosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CarrosServiceProvider = /** @class */ (function () {
    function CarrosServiceProvider(http) {
        this.http = http;
    }
    CarrosServiceProvider.prototype.lista = function () {
        return this.http
            .get('http://192.168.1.135:8080/api/carro/listaTodos');
    };
    CarrosServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CarrosServiceProvider);
    return CarrosServiceProvider;
}());

//# sourceMappingURL=carros-service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_agendamentos_service_agendamentos_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_agendamento_dao_agendamento_dao__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams, agendamentosService, alertController, agendamentoDAO) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.agendamentosService = agendamentosService;
        this.alertController = alertController;
        this.agendamentoDAO = agendamentoDAO;
        this.nome = '';
        this.endereco = '';
        this.email = '';
        this.data = new Date().toISOString();
        this.carro = this.navParams.get('carroSelecionado');
        this.precoTotal = this.navParams.get('precoTotal');
    }
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage.prototype.agenda = function () {
        var _this = this;
        if (!this.nome || !this.endereco || !this.email) {
            this.alertController.create({
                title: 'Preenchimento obrigatório',
                subTitle: 'Preencha todos os campos',
                buttons: [{ text: 'OK' }]
            }).present();
            return;
        }
        var mensagem = '';
        this.alerta = this.alertController.create({
            title: 'Aviso',
            buttons: [
                { text: 'OK', handler: function () { _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); } }
            ]
        });
        var agendamento = {
            nomeCliente: this.nome,
            enderecoCliente: this.endereco,
            emailCliente: this.email,
            modeloCarro: this.carro.nome,
            precoTotal: this.precoTotal,
            data: this.data,
            confirmado: false,
            enviado: false,
        };
        this.agendamentoDAO.ehDuplicado(agendamento)
            .mergeMap(function (ehDuplicado) {
            if (ehDuplicado)
                throw new Error('Agendamento existente');
            return _this.agendamentosService.agenda(agendamento);
        })
            .mergeMap(function (valor) {
            var observable = _this.agendamentoDAO.salva(agendamento);
            if (valor instanceof Error) {
                throw valor;
            }
            return observable;
        })
            .finally(function () {
            _this.alerta.setSubTitle(mensagem).present();
        })
            .subscribe(function () { return mensagem = 'Agendamento realizado'; }, function (erro) { return mensagem = erro.message; });
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"/Users/geovangoes/Documents/projetos_js/Javascript-Avancado/ionic-tres/meuProjeto/src/pages/cadastro/cadastro.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>{{ carro.nome }}</h2>\n  <p>R$ {{ precoTotal }}</p>\n\n  <form (ngSubmit)="agenda()" #formulario="ngForm">\n    <ion-item>\n      <ion-label stacked>Nome:</ion-label>\n      <ion-input [(ngModel)]="nome" name="nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Endereço:</ion-label>\n      <ion-input [(ngModel)]="endereco" name="endereco"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Email:</ion-label>\n      <ion-input [(ngModel)]="email" name="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Data:</ion-label>\n      <ion-datetime [(ngModel)]="data" displayFormat="DD/MM/YY" name="data"></ion-datetime>\n    </ion-item>\n  </form>\n\n  <ion-fab top right edge>\n    <button ion-fab mini (click)="formulario.ngSubmit.emit()">\n      <ion-icon name="send"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/geovangoes/Documents/projetos_js/Javascript-Avancado/ionic-tres/meuProjeto/src/pages/cadastro/cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_agendamentos_service_agendamentos_service__["a" /* AgendamentosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_agendamento_dao_agendamento_dao__["a" /* AgendamentoDaoProvider */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EscolhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EscolhaPage = /** @class */ (function () {
    function EscolhaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.acessorios = [];
        this.carro = this.navParams.get('carroSelecionado');
        this._precoTotal = this.carro.preco;
        this.acessorios = [
            { nome: 'Freio ABS', preco: 800 },
            { nome: 'Ar-condicionado', preco: 1000 },
            { nome: 'MP3 Player', preco: 500 }
        ];
    }
    Object.defineProperty(EscolhaPage.prototype, "precoTotal", {
        get: function () {
            return this._precoTotal;
        },
        enumerable: true,
        configurable: true
    });
    EscolhaPage.prototype.atualizaTotal = function (ativado, acessorio) {
        ativado ?
            this._precoTotal += acessorio.preco :
            this._precoTotal -= acessorio.preco;
    };
    EscolhaPage.prototype.avancaCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__["a" /* CadastroPage */].name, {
            carroSelecionado: this.carro,
            precoTotal: this.precoTotal
        });
    };
    EscolhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-escolha',template:/*ion-inline-start:"/Users/geovangoes/Documents/projetos_js/Javascript-Avancado/ionic-tres/meuProjeto/src/pages/escolha/escolha.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Escolha</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-slides pager="true">\n    <ion-slide *ngFor="let foto of carro.fotos">\n      <img src="{{foto}}">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-item-group>\n    <ion-item-divider color="light">\n      <ion-icon name="car"></ion-icon>\n      Veículo\n    </ion-item-divider>\n    <ion-item>{{carro.nome}}</ion-item>\n    <ion-item>R$ {{carro.preco}}</ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">\n      <ion-icon name="options"></ion-icon>\n      Acessórios\n    </ion-item-divider>\n    <ion-item *ngFor="let acessorio of acessorios">\n      <ion-label>\n        <h2>{{ acessorio.nome }}</h2>\n        <h4>R$ {{ acessorio.preco }}</h4>\n      </ion-label>\n      <ion-toggle #acessorioToggle\n        (ionChange)="atualizaTotal(acessorioToggle.checked, acessorio)" \n        color="secondary">\n      </ion-toggle>\n    </ion-item>\n    \n  </ion-item-group>\n  <ion-item-divider color="light">\n      <span item-right>Total: R$ {{ precoTotal }}</span>\n  </ion-item-divider>\n\n  \n\n  <ion-fab top right edge>\n      <button ion-fab mini (click)="avancaCadastro()">\n        <ion-icon name="arrow-dropright"></ion-icon>\n      </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/geovangoes/Documents/projetos_js/Javascript-Avancado/ionic-tres/meuProjeto/src/pages/escolha/escolha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EscolhaPage);
    return EscolhaPage;
}());

//# sourceMappingURL=escolha.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaAgendamentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_agendamento_dao_agendamento_dao__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_agendamentos_service_agendamentos_service__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListaAgendamentosPage = /** @class */ (function () {
    function ListaAgendamentosPage(navCtrl, navParams, agendamentoDAO, agendamentoService, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.agendamentoDAO = agendamentoDAO;
        this.agendamentoService = agendamentoService;
        this.alertController = alertController;
        this.agendamentos = [];
    }
    ListaAgendamentosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.agendamentoDAO
            .listaTodos()
            .subscribe(function (agendamentos) {
            _this.agendamentos = agendamentos;
        });
    };
    ListaAgendamentosPage.prototype.reenvia = function (agendamento) {
        var _this = this;
        var mensagem = '';
        this.alerta = this.alertController.create({
            title: 'Aviso',
            buttons: [
                { text: 'OK' }
            ]
        });
        this.agendamentoService.agenda(agendamento)
            .mergeMap(function (valor) {
            var observable = _this.agendamentoDAO.salva(agendamento);
            if (valor instanceof Error) {
                throw valor;
            }
            return observable;
        })
            .finally(function () {
            _this.alerta.setSubTitle(mensagem).present();
        })
            .subscribe(function () { return mensagem = 'Agendamento reenviado'; }, function (erro) { return mensagem = erro.message; });
    };
    ListaAgendamentosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-agendamentos',template:/*ion-inline-start:"/Users/geovangoes/Documents/projetos_js/Javascript-Avancado/ionic-tres/meuProjeto/src/pages/lista-agendamentos/lista-agendamentos.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agendamentos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let agendamento of agendamentos" [class.falha]="!agendamento.enviado">\n      {{agendamento.nomeCliente}} - {{agendamento.modeloCarro}}\n\n      <button ion-button item-end icon-only clear *ngIf="!agendamento.enviado" (click)="reenvia(agendamento)">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/geovangoes/Documents/projetos_js/Javascript-Avancado/ionic-tres/meuProjeto/src/pages/lista-agendamentos/lista-agendamentos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_agendamento_dao_agendamento_dao__["a" /* AgendamentoDaoProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_agendamentos_service_agendamentos_service__["a" /* AgendamentosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ListaAgendamentosPage);
    return ListaAgendamentosPage;
}());

//# sourceMappingURL=lista-agendamentos.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_carros_service_carros_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_agendamentos_service_agendamentos_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_finally__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_do__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_mergeMap__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_catch__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_fromPromise__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_of__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_agendamento_dao_agendamento_dao__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/escolha/escolha.module#EscolhaPageModule', name: 'EscolhaPage', segment: 'escolha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-agendamentos/lista-agendamentos.module#ListaAgendamentosPageModule', name: 'ListaAgendamentosPage', segment: 'lista-agendamentos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: 'ascar',
                    storeName: 'agendamentos',
                    driverOrder: ['indexeddb'],
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_carros_service_carros_service__["a" /* CarrosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_agendamentos_service_agendamentos_service__["a" /* AgendamentosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_agendamento_dao_agendamento_dao__["a" /* AgendamentoDaoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_lista_agendamentos_lista_agendamentos__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.paginas = [
            {
                titulo: 'Agendamentos',
                component: __WEBPACK_IMPORTED_MODULE_4__pages_lista_agendamentos_lista_agendamentos__["a" /* ListaAgendamentosPage */].name,
                icone: 'calendar'
            }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.irParaPagina = function (component) {
        this.nav.push(component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/geovangoes/Documents/projetos_js/Javascript-Avancado/ionic-tres/meuProjeto/src/app/app.html"*/'<ion-split-pane>\n    <ion-menu [content]="conteudo">\n\n        <ion-content>\n\n                <ion-item id="cabecalho-menu" class="cabecalho-menu">\n                    <div>\n                        <ion-avatar item-start>\n                            <img src="assets/img/avatar-profile.jpg">\n                        </ion-avatar>\n                    </div>\n                    <h2>Geovan Goes</h2>\n                    <p>geovansilvagoes@gmail.com</p>\n                </ion-item>\n        \n            <ion-list>\n                <button ion-item menuClose *ngFor="let pagina of paginas" (click)="irParaPagina(pagina.component)">\n                    <ion-icon [name]="pagina.icone" item-left></ion-icon>\n                    {{pagina.titulo}}\n                </button>\n            </ion-list>\n        </ion-content>\n        </ion-menu>\n    <ion-nav swipeBackEnable="false" [root]="rootPage" #conteudo main></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"/Users/geovangoes/Documents/projetos_js/Javascript-Avancado/ionic-tres/meuProjeto/src/app/app.html"*/,
            selector: 'myapp'
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/geovangoes/Documents/projetos_js/Javascript-Avancado/ionic-tres/meuProjeto/src/pages/login/login.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form action=""></form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/geovangoes/Documents/projetos_js/Javascript-Avancado/ionic-tres/meuProjeto/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AgendamentosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AgendamentosServiceProvider = /** @class */ (function () {
    function AgendamentosServiceProvider(http) {
        this.http = http;
        this.url = 'http://192.168.1.135:8080/api';
    }
    AgendamentosServiceProvider.prototype.agenda = function (agendamento) {
        return this.http
            .post(this.url + '/agendamento/agenda', agendamento)
            .do(function () {
            agendamento.enviado = true;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_Observable__["Observable"].of(new Error('Falha no agendamento, tente novamente mais tarde')); });
    };
    AgendamentosServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AgendamentosServiceProvider);
    return AgendamentosServiceProvider;
}());

//# sourceMappingURL=agendamentos-service.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carros_service_carros_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__escolha_escolha__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadingController, alertController, carrosService) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.carrosService = carrosService;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Carregando carros...'
        });
        loading.present();
        this.carrosService
            .lista()
            .subscribe(function (res) {
            _this.carros = res;
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
            _this.alertController.create({
                title: 'Falha na conexão',
                subTitle: 'Não foi possível carregar a lista de carros.',
                buttons: [{ text: 'Ok' }]
            }).present();
        });
    };
    HomePage.prototype.selecionaCarro = function (carro) {
        console.log(carro);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__escolha_escolha__["a" /* EscolhaPage */].name, {
            carroSelecionado: carro
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/geovangoes/Documents/projetos_js/Javascript-Avancado/ionic-tres/meuProjeto/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      A\'s CAr\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let carro of carros " (click)="selecionaCarro(carro)">\n      <h2>{{carro.nome}}</h2>\n      <p>R$ {{carro.preco}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/geovangoes/Documents/projetos_js/Javascript-Avancado/ionic-tres/meuProjeto/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_carros_service_carros_service__["a" /* CarrosServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentoDaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgendamentoDaoProvider = /** @class */ (function () {
    function AgendamentoDaoProvider(storage) {
        this.storage = storage;
    }
    AgendamentoDaoProvider.prototype.geraChave = function (agendamento) {
        return agendamento.emailCliente + agendamento.data.substr(0, 10);
    };
    AgendamentoDaoProvider.prototype.salva = function (agendamento) {
        var chave = this.geraChave(agendamento);
        var promisse = this.storage.set(chave, agendamento);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(promisse);
    };
    AgendamentoDaoProvider.prototype.ehDuplicado = function (agendamento) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]
            .fromPromise(this.storage
            .get(this.geraChave(agendamento))
            .then(function (dado) { return dado ? true : false; }));
    };
    AgendamentoDaoProvider.prototype.listaTodos = function () {
        var agendamentos = [];
        var promisse = this.storage.forEach(function (agendamento) {
            agendamentos.push(agendamento);
        })
            .then(function () { return agendamentos; });
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(promisse);
    };
    AgendamentoDaoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AgendamentoDaoProvider);
    return AgendamentoDaoProvider;
}());

//# sourceMappingURL=agendamento-dao.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map