const ler = require('readline-sync')

 let valor = ler.question(" digite o valor da sua compra ");

console.clear();

console.log("---------------MENU OPÇÕES DE CLIENTE --------");
console.log(" 1.CLINTE COMUM  \n 2.FUNCIONARIO  \n 3.VIP \n ");
console.log("-------------------------------------------------");
let  opt = ler.questionInt("=>");
let result;

switch (opt ) {
    case 1:
         result=valor 
         console.log("o valor da compra pra cliente comum é:  "+ result);
        break;

    case 2:
        result= valor - valor *0.05;
        console.log("o valor da compra  para cliente vip é:  "+ result)
        
        break;

    case 3:
        result= valor - valor *0.10;
        console.log("o valor da compra  para funcionario é:  "+ result)
        
        break;

  
    default:
        console.log( "opção invalida !!");
        break;
}