// enum faz mapeamento bidirecional, ou seja,
// Idioma.Japones acessa o valor numérico, nessa caso 2
// Idioma[3] acessa o valor, nesse caso Alemao
enum Idioma {
    Ingles,
    Frances,
    Japones,
    Alemao,
    Coreano,
}

console.log(Idioma);
console.log(Idioma.Japones); // 2
console.log(Idioma[3]); // Alemao

// String enum
enum Day {
    Sunday = 'SUN',
    Monday = 'MON',
    Tuesday = 'TUE',
    Wednesday = 'WED',
    Thursday = 'THU',
    Friday = 'FRI',
    Saturday = 'SAT',
  }

console.log(Day);
console.log(Day.Sunday); // SUN

// const enum
// O const enum não cria um objeto
const enum Comida {
    Salpicao = 'Salpicão',
    Panetone = 'Panetone',
    Pave = 'Pavê',
    Pernil = 'Pernil',
    Farofa = 'Farofa',
}

function comida(c: Comida) {
    return `Você gosta de ${c}?`;
}

console.log(comida(Comida.Salpicao));

// Quando usar enum?
enum Tarefa {
    Todo,
    Progress,
    Done,
}

const ConcluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso',
}

if (ConcluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa concluída!');
}