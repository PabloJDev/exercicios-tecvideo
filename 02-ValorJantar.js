//Elaborar um programa que leia o valor de um jantar. calcule o valor da taxa do garçom (10%) e o valor total a ser pago.
//Exemplo:
//Valor do jantar: R$80,00
//Taxa do Garçom: R$8,00
//Total a Pagar: R$88,00

let ValorJanta = 115;
let taxa = 15;
let total = 0;

total = ValorJanta + ((taxa /  100) * 115)

console.log ("Valor do Jantar: R$", ValorJanta)
console.log (`Taxa do Garçom: R$, ${((taxa /  100) * 115)}`) //a crase e o "${}" é feito pta colocar a string(texto) e a variavel juntas
console.log ("Total a Pagar: R$", total)