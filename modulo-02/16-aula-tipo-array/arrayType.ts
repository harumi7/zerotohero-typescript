// Array com colchetes
let frutas: string[] = ['Morango', 'Kiwi', 'Pitaya', 'Carambola'];
console.log(frutas[3]); // Carambola

// Array Object
let musicasTaylorSwift: Array<string> = ['Hits Different', 'The Very First Night', 'Sweeter than Fiction', 'Daylight'];
console.log(musicasTaylorSwift[2]); // Sweeter than Fiction

// Adicionando string: método 'push'
let idiomas: Array<string> = ['Inglês', 'Japonês', 'Espanhol', 'Holandês'];
console.log(idiomas.push('Francês'));
console.log(idiomas);

// Tamanho do array: método 'length'
let jogos: Array<string> = ['Minecraft', 'Stardew Valley', 'Osu!', 'Genshin Impact', 'Honkai: Star Rail'];
console.log(jogos.length);

// Spread operator
let numerosPares: Array<number> = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
numerosPares = [...numerosPares, 22, 24, 26, 28, 30];
console.log(numerosPares);

// Array com laço de repetição
let linguagens: string[] = new Array('Python', 'JavaScript', 'PHP', 'C++', 'Swift');
function mostrarLinguagens(linguagensArray: string[]) {
    for (let i = 0; i < linguagensArray.length; i++) {
        console.log(linguagensArray[i]);
    }
}
mostrarLinguagens(linguagens);