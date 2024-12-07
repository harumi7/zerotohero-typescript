// Labeled tuple
let elementoQuimico: [abreviacao: string, nome: string, numeroAtomico: number];
elementoQuimico = ['K', 'Potássio', 19];
console.log(elementoQuimico);
console.log(elementoQuimico[1]); // Potássio

// Tupla homogênea com spread operator
let englishWords: [string, ...string[]] = ['beneath', 'breadth', 'redneck', 'pouring'];
console.log(...englishWords);

// Tupla heterogênea com spread operator
let englishPhrasalVerbs: [string, boolean, ...string[]] = ['turn down', true, 'put up', 'wait up', 'put to shame'];
console.log(englishPhrasalVerbs);

// Função com tuplas
function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades];
}
console.log(listarPessoas(['Peter', 'Tarik'], [34, 29]));

// Labeled tuples com spread operator em uma função
type Nome =
        | [primeiroNome: string, nomeMeio: string, sobrenome: string]
        | [primeiroNome: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return [...nome];
}
console.log('Taylor', 'Alison', 'Swift');
console.log('Taylor', 'Swift');