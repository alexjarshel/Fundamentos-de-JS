/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/

let valorDoProduto = 150.00;
let tipoDePagamento = 'parcela';
let juros;
let parcela = 3;

if(tipoDePagamento === 'debito'){
    juros = 10;
    const valorDebitado = (juros/100)*valorDoProduto;
    valorDoProduto = valorDoProduto-valorDebitado;
}else  if(tipoDePagamento === 'PIX' || tipoDePagamento == "dinheiro"){
    juros = 15;
    const valorDebitado = (juros/100)*valorDoProduto;
    valorDoProduto = valorDoProduto-valorDebitado;
}else if(tipoDePagamento === 'parcela'){
    if(parcela > 2){
    juros = 10;
    const valorDebitado = (juros/100)*valorDoProduto;
    valorDoProduto = valorDoProduto+valorDebitado;
    }
    
}

console.log(valorDoProduto);