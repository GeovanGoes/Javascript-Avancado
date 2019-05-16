import { NegociacaoController } from "./controllers/NegociacaoController";
const controller = new NegociacaoController();
$('.form').submit(controller.adiciona.bind(controller));
$('#importar').click(controller.importadados.bind(controller));