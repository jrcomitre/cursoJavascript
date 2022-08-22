function somar1(){
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

console.log(somar1()); // 0
console.log(somar1(2)); // 2
console.log(somar1(2, 5)) // 7
console.log(somar1(5, 3, 9)); // 17
console.log(somar1(2, 4, 6, 8, 12)); // 32

function imprimirValores(num1, num2){
    for (let i in arguments){
        console.log(arguments[i]);
    }
}

//imprimirValores();
//imprimirValores(4, 6);
//imprimirValores(4, 6, 8);
//imprimirValores(3, 6, 8, 12, 44, 56);

function somar2(num1 = 1, num2 = 2, num3 = 3){
   return num1 + num2 + num3;
}

console.log(somar2(4, 5, 6)); // 15
console.log(somar2()); // 6
console.log(somar2(2)); // 7
console.log(somar2(2, 2)); // 7
console.log(somar2(2, 2, 2)); // 6
console.log(somar2(2, 2, 2, 2)); // 6
console.log(somar2(0, 0, 0)); // 0

