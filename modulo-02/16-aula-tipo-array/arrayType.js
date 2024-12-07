"use strict";
// Array com colchetes
let frutas = ['Morango', 'Kiwi', 'Pitaya', 'Carambola'];
console.log(frutas[3]); // Carambola
// Array Object
let musicasTaylorSwift = ['Hits Different', 'The Very First Night', 'Sweeter than Fiction', 'Daylight'];
console.log(musicasTaylorSwift[2]); // Sweeter than Fiction
// Adicionando string: método 'push'
let idiomas = ['Inglês', 'Japonês', 'Espanhol', 'Holandês'];
console.log(idiomas.push('Francês'));
console.log(idiomas);
// Tamanho do array: método 'length'
let jogos = ['Minecraft', 'Stardew Valley', 'Osu!', 'Genshin Impact', 'Honkai: Star Rail'];
console.log(jogos.length);
// Spread operator
let numerosPares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
numerosPares = [...numerosPares, 22, 24, 26, 28, 30];
console.log(numerosPares);
// Array com laço de repetição
let linguagens = new Array('Python', 'JavaScript', 'PHP', 'C++', 'Swift');
function mostrarLinguagens(linguagensArray) {
    for (let i = 0; i < linguagensArray.length; i++) {
        console.log(linguagensArray[i]);
    }
}
mostrarLinguagens(linguagens);
