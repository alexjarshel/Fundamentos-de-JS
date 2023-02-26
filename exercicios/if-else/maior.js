//Fácil 1- Faça um programa que peça dois números e verifique (usando if e else) e imprima o maior deles  


    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    readline.question(`Insira o primeiro numero \n`, num1 => {
        readline.close()
    })

    readline.question(`insira o segundo numero\n` , num2 => {
        readline.close()
    })

    if(num1>num2){ 
        console.log(`o numero ${num1} é maior`)
    }else if(num1===num2){
        console.log('eles são iguais')
    }else{
        console.log(`o numero ${num2} é maior`)
    }