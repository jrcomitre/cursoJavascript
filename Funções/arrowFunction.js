// Forma 1

function somar1(num1, num2){
    return num1 + num2;
}

console.log(somar1(4, 6));

// Forma 2

let somar2 = function(num1, num2){
    return num1 + num2;
}

console.log(somar2(4, 6));

// Forma 3

let somar3 = somar1

console.log(somar3(4, 6));

// Arrow Function

let somar4 = (num1, num2) => {
    return num1 + num2;
}

console.log(somar4(4, 6));

/*
 Atenção: Caso a função tenha apenas um parâmetro de entrada e executa apenas uma linha,
 pode ser simplificada utilizando a Arrow function
*/

let dobrar = valor => valor * 2;

console.log(dobrar(5));


function mensagem1(){
    console.log('Esta é uma mensagem 1');
}

mensagem1()

const msg = () => console.log('Esta é uma mensagem 2');

msg();
