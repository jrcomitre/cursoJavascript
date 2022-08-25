// let xuxa = 'global'; //pode ser acessada globalmente no projeto

// function imprimir(){
//     console.log(xuxa);
// }

// function outra(){
//     let xuxa = 'local'; // pode ser acessada localmente no projeto
//     imprimir();
//     console.log(xuxa); // local
// }

// outra();

//Novo exemplo

let variavel = 'global';

function externa(){
    let variavel = 'local';

    function interna(){
        return variavel;
    }

    return interna;
}

let executa = externa();

console.log(externa()); // local

/*Estudo de Clousures (contexto léxico de uma função)

Linguagem de Programação chamada Clojure

*/

