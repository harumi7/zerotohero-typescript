"use strict";
// Labeled tuple
let elementoQuimico;
elementoQuimico = ['K', 'Potássio', 19];
console.log(elementoQuimico);
console.log(elementoQuimico[1]); // Potássio
// Tupla homogênea com spread operator
let englishWords = ['beneath', 'breadth', 'redneck', 'pouring'];
console.log(...englishWords);
// Tupla heterogênea com spread operator
let englishPhrasalVerbs = ['turn down', true, 'put up', 'wait up', 'put to shame'];
console.log(englishPhrasalVerbs);
// Função com tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
console.log(listarPessoas(['Peter', 'Tarik'], [34, 29]));
function criarPessoa(...nome) {
    return [...nome];
}
console.log('Taylor', 'Alison', 'Swift');
console.log('Taylor', 'Swift');
