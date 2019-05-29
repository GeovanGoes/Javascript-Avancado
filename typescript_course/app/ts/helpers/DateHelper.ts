export class DateHelper
{
    constructor()
    {
        throw new Error('DateHelper não pode ser instanciado.');
    }

    static dataParaTexto(data: Date) : string
    {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static textoParaData(texto: string) : Date
    {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no formato aaaa-mm-dia');

        return new Date(parseInt(texto.split("-")[0]), parseInt(texto.split("-")[1])-1, parseInt(texto.split("-")[2]));
    }

    static ehDiaUtil(date: Date)
    {
        return date.getDay() != DiaDaSemana.Domingo && date.getDay() != DiaDaSemana.Sabado;
    }

    static ehIgual(dateOne: Date, dateTwo: Date): boolean
    {
        return dateOne.getDate() == dateTwo.getDate()
            && dateOne.getMonth() == dateTwo.getMonth()
            && dateOne.getFullYear() == dateTwo.getFullYear();
    }

}

export enum DiaDaSemana
{
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}