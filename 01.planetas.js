const ler = require('readline-sync')

 let terra  = ler.question(" digite o seu peso");

console.clear();

console.log("---------------MENU OPÇÕES DE PLANETAS --------");
console.log(" 1.MERCÚRIO \n 2.VÊNUS  \n 3.MARTE \n 4.JÚPITER \n 5.SATURNO \n 6.URANO \n ");
console.log("-------------------------------------------------");
let  opt = ler.questionInt("=>");
let pesoplaneta;

switch (opt ) {
    case 1:
         pesoplaneta=(terra/10)*0.37;
         console.log("seu peso no planeta MERCÚRIO é:  "+ pesoplaneta);
        break;

    case 2:
        pesoplaneta=(terra/10)*0.88;
        console.log("seu peso no planeta VÊNUS  é:  "+ pesoplaneta);
        
        break;

    case 3:
        pesoplaneta=(terra/10)*0.38;
        console.log("seu peso no planeta MARTE  é:  "+ pesoplaneta);
        
        
        break;

    case 4:
        pesoplaneta=(terra/10)*2.64;
        console.log("seu peso no planeta JPITER é:  "+ pesoplaneta);
        
        
        break;

    case 5:
        pesoplaneta=(terra/10)* 1.15;
        console.log("seu peso no planeta SATURNO é:  "+ pesoplaneta);
        
        
        break;

    case 6:
        pesoplaneta=(terra/10)*1.17;
        console.log("seu peso no planeta VÊNUS  é:  "+ pesoplaneta);
        
        
        break;
 
    default:
        console.log( "opção invalida !!");
        break;
}