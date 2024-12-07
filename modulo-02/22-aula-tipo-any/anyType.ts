// Tipo any
const a: any = 'folklore';
const b: any = ['this is me trying'];

const resultado = a + b;
console.log(resultado); // folklorethis is me trying

// Quando usar o tipo any?
const formulario: { [campoFormulario: string]: any } = {
    nome: 'Camila Harumi',
    email: 'camilaharumi@email.com',
}

console.log(formulario);