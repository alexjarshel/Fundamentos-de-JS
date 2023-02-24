function soma ( x, y){
    return x + y
}

console.log(soma(1,2));

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade('Alex', 20));

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

resultado =multiplica(soma(2,3),soma(3,5))

console.log(resultado);
