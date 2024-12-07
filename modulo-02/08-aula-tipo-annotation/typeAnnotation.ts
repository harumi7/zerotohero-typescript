// Type Annotation

// Variáveis
let nome: string = "Camila Harumi";
console.log(nome);

// Arrays
let listaFrutas: string[] = ["Pitaya", "Kiwi", "Pêssego", "Caqui"];
console.log(listaFrutas);

// Objetos
let estudante: {
    nome: string;
    idade: number;
    curso: string;
    matriculaAtiva: boolean
};

estudante = { nome: "Camila", idade: 999, curso: "Análise e Desenvolvimento de Sistemas", matriculaAtiva: true };
console.log(estudante);

// Funções
function multiplicar(num1: number, num2: number) {
    return num1 * num2;
}
console.log(multiplicar(7, 2));