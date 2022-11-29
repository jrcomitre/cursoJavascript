/* 
    JSON - Javascript Object Notation
*/

const curso = {
    nome: 'Programação em Javascript',
    horas: 27,
    preco(){
        return this.horas * 0.67
    }
}

console.log(curso); // Objeto Javascript
// console.log(curso.preco());
console.log(typeof(curso));

// Convertendo o objeto Javascript para JSON
const json = JSON.stringify(curso);
console.log(json) // JSON
console.log(typeof(json));

//Convertendo de JSON para objeto Javascript
const obj = JSON.parse(json);
console.log(obj);
console.log(typeof(obj));


// const json_errado = "{'nome': 'Programação em Javascript', 'preço':, 27.99 }";

const json_corrigido = '{"nome": "Programação em Javascript", "preço": 27.99}';

console.log(json_corrigido);
console.log(typeof(json_corrigido));

const novo_obj = JSON.parse(json_corrigido);
console.log(novo_obj);
console.log(typeof(novo_obj));

