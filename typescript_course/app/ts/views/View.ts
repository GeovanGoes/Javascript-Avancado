import { logarTempoDeExecucao } from "../helpers/decorators/index";

export abstract class View <T>
{
    protected _elemento: JQuery;

    constructor(seletor: string, private escapar: boolean = false)
    {
        this._elemento = $(seletor);
    }

    @logarTempoDeExecucao(true)
    update (model: T) : void
    {

        let template = this.template(model);

        if (this.escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        this._elemento.html(template);
    }

    protected abstract template(model: T) : string;
}