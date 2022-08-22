var numero = 42;
//console.log(numero);

numero = numero + 18;

//console.log(numero);

// Let
let outro_numero = 42;
//console.log(outro_numero);

outro_numero = outro_numero + 18;
//console.log(outro_numero);

let nome = 'Geek';
//console.log(nome);

nome = 'University';
//console.log(nome);

for(let i = 0; i < 5; i++){
    let valor = i * 3;
    //console.log(valor);
}

//console.log(valor);
//console.log(i);

//Const (constante)

const taxa = 1.44;
//console.log(taxa);


let res = 45 * taxa;
//console.log(res);

//Constante vs Mutação

const curso = {nome: 'Programação em JavaScript'};
//console.log(curso.nome);

//Não posso alterar o valor de uma constante
// curso = 43; // Erro;

//Podemos realizar a mutação em dados contidos na constante
curso.nome = 'Programação em Python'; //Mutação

// console.log(curso);

/*
Dicas de como declarar uma variável em JavaScript

- A variável poderia ser alterada? Vai variar? Se sim, use let
- A variável será constante? Não vai variar? Se sim, use const
*/

const valor = 5;

for (let i = 0; i < valor; i++){
    console.log(valor - i);
}