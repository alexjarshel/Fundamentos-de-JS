const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


function lerConsole(){
    num = readline.question(`Insira o primeiro numero \n`, num => {
        readline.close()
    })
    return num;  
}

num1 = lerConsole();

console.log(num1)