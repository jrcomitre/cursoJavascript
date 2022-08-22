function calcular_idade1(ano_nascimento) {
    const data = new Date(); //Recebe a data atual

    const idade = data.getFullYear() - ano_nascimento;

    return idade; // Valor pode ser recuoerado   
}

function calcular_idade2(ano_nascimento) {
    const data = new Date();

    const idade = data.getFullYear() - ano_nascimento; 
    
    console.log(idade); // Valor não pode ser recuperado
}

let retorno = (calcular_idade1(1982));
//console.log(retorno + 3);

//calcular_idade2(1982);

const data = new Date();

console.log(`Data Completa: ${data}`);
console.log(`Ano: ${data.getFullYear()}`);
console.log(`Mês: ${data.getMonth()}`);



/*
let d = new Date();

console.log(d);
console.log(d.getFullYear());
let retorno = calcular_idade1(1982, "Junior");

console.log(retorno);
*/







