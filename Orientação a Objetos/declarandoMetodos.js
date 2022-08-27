class Pessoa {
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;        
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    falar(msg){
        console.log(`${this.nome} esta falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} esta comendo...`)
    }

    beber(){
        console.log(`${this.nome} ${this.sobrenome} esta bebendo...`)
    }
}

class Carro {
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }
    
    imprimir(){
        console.log(`$(this.marca) ${this.modelo}`);
    }

    get marca(){
        return this.marca = this.marca;
    }

    // set marca(marca){
    //     this._marca = marca;
    // }

    get modelo(){
        return this.modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }
}

