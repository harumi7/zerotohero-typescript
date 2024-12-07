// Tipo unknown
let valorVariavel: unknown;

valorVariavel = 'queijo';
valorVariavel = [2, 4, 6, 8];
valorVariavel = 1989;
valorVariavel = false;

// Diferença entre any e unknown
// Não é possível fazer operações diretamente em uma variável unknown sem antes verificar o seu tipo
// Já com o any, isso é completamente possível
// Ou seja, unknown evita erros
let algumaCoisaAny: any = 1;
let algumaCoisaUnknown: unknown = 2;

console.log(algumaCoisaAny.toFixed());

if (typeof algumaCoisaUnknown === 'number') {
  console.log(algumaCoisaUnknown.toFixed());
}