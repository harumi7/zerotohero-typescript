"use strict";
// enum faz mapeamento bidirecional, ou seja,
// Idioma.Japones acessa o valor numérico, nessa caso 2
// Idioma[3] acessa o valor, nesse caso Alemao
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Ingles"] = 0] = "Ingles";
    Idioma[Idioma["Frances"] = 1] = "Frances";
    Idioma[Idioma["Japones"] = 2] = "Japones";
    Idioma[Idioma["Alemao"] = 3] = "Alemao";
    Idioma[Idioma["Coreano"] = 4] = "Coreano";
})(Idioma || (Idioma = {}));
console.log(Idioma);
console.log(Idioma.Japones); // 2
console.log(Idioma[3]); // Alemao
// String enum
var Day;
(function (Day) {
    Day["Sunday"] = "SUN";
    Day["Monday"] = "MON";
    Day["Tuesday"] = "TUE";
    Day["Wednesday"] = "WED";
    Day["Thursday"] = "THU";
    Day["Friday"] = "FRI";
    Day["Saturday"] = "SAT";
})(Day || (Day = {}));
console.log(Day);
console.log(Day.Sunday); // SUN
function comida(c) {
    return `Você gosta de ${c}?`;
}
console.log(comida("Salpic\u00E3o" /* Comida.Salpicao */));
// Quando usar enum?
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const ConcluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso',
};
if (ConcluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa concluída!');
}
