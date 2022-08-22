var cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógica de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript',
];

//console.log(cursos);
//console.log(cursos.length);

//Definir uma Função

function imprimir(curso, indice, array){
    console.log(indice + ' - ' + curso);
    console.log(array);
}

//para cada
cursos.forEach(imprimir);

// utilização de uma função anônima (lambda/callback) e template string
cursos.forEach(function(curso, indice){
    console.log(`${indice} - ${curso}`);
});

//For convencional
for(var i = 0; i < cursos.length; i++){
    console.log(i + '- ' + cursos[i]);
};



