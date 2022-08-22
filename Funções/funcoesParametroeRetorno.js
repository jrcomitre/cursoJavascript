function calcular_idade(ano_nascimento) {
    const data = new Date(); // gera a data atual

    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}

function calcular_idade2(ano_nascimento){
    const data = new Date();

    const idade = data.getFullYear() - ano_nascimento;

    console.log(idade);
}

console.log(calcular_idade(1982));
//console.log(calcular_idade2(1982));

//calcular_idade2(1982)

const data = new Date();

console.log(`Data Completa: ${data}`);
console.log(`Ano: ${data.getFullYear()}`);
console.log(`Mês: ${data.getMonth()}`); // 0 para janeiro, 1 para fevereiro...

function somar(num1, num2){
    return num1 + num2
}

console.log(somar(4, 6))


