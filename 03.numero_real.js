const ler = require('readline-sync')

 let num = ler.questionInt(" digite um numero ");

console.clear();

console.log("---------------ESCOLHA UMA OPÇÃO --------------");
console.log(" 101.RAIZ QUADRADA  \n 102.METADE  \n 103.PORCETAGEM \n  104.DOBRO \n");
console.log("-----------------------------------------------");
let  opt = ler.questionInt("=>");
let result;

switch (opt ) {
    case 101:
         result=Math.sqrt(num);
         console.log("o  resultado da raiz quadrada e :  "+ result);
        break;

    case 102:
        result= num /2;
        console.log("a metade do valor e :  "+ result)
        
        break;

    case 103:
        result= num - num *0.10;
        console.log("o numero mais 10%  e :  "+ result)
        
        break;

    case 104:
        result= num + num ;
        console.log("o dobro do numero é:  "+ result)
            
            break;
    

  
    default:
        console.log( "opção invalida !!");
        break;
}