class Pessoa {
    
    nome;
    idade;
    nascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.nascimento = 2023  - idade;
    }

    descrever(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

}

function  comparaPessoa(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velha que ${p2.nome}`);
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velha que ${p1.nome}`);
    }else{
        console.log(`eles tem a mesma idade`);
    }
}


function main(){

    const alex = new Pessoa('Alex', 21);
    const maria = new Pessoa('Maria', 22);
    comparaPessoa(alex, maria);
    alex.descrever();
}

main();