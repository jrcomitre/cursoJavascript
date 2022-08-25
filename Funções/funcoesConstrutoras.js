// Criando função Construtora

function Pessoa(n, s, raca = 'Humano'){
    //atributos privados só conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;


    //atributo público pode ser acessado fora da função construtora
    this.raca = raca;

    //método privado só consenguimos fazer uso dentro da funcao construtora
    let imprimir_dados = function(){
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso} Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`);
    }

    //método público conseguimos acessar fora da função construtora
    this.fazer_aniversario = function(){
        idade += 1;
        imprimir_dados()
    }

    this.getIdade = function(){
        return idade;
    }
}

const angelina = new Pessoa ("Angelina", "Feminino");

console.log(angelina);

// console.log(angelina.peso); // privado

console.log(angelina.peso); //privado
console.log(angelina.raca); //público

angelina.fazer_aniversario(); //publico
angelina.fazer_aniversario(); //publico

//Instanciar um novo objeto

const felicity = new Pessoa("Felicity", "Feminino");

felicity.fazer_aniversario();
console.log(felicity.getIdade());

console.log(typeof(Pessoa)) // function
console.log(typeof(felicity)); // Object
