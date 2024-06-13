const ler = require('readline-sync')


console.log("---------------ESCOLHA UMA OPÇÃO --------------");
console.log(" 1.JANEIRO  \n 2.FEVEREIRO \n 3.MARÇO  \n  4.ABRIL\n 5.MAIO \n 6.JUNHO \n  7.JULHO \n 8.AGOSTO \n 9.SETEMBRO \n  10.OUTUBRO \n 11.NOVEMBRO \n 12.DEZEMBRO \n ");
console.log("-----------------------------------------------");
let  opt = ler.questionInt("=>");
let result;

switch (opt) {
    case 1:
        console.log("a estação do mês e  verão ");
        break;

    case 2:
        console.log("a estação do mês e verão  ");
         break;
    
    case 3:
       console.log("a estação do mês e verão  ");
        break;
        
    case 4:
        console.log("a estação do mês e outono ");
        break;

    case 6:
         console.log("a estação do mês e outono ");
         break;
                        
         
    case 7:
        console.log("a estação do mês e outono ");
        break;
                                                
    case 8:
        console.log("a estação do mês e inverno ");
        break;
                   
    case 9:
        console.log("a estação do mês e inverno ");
        break;


    case 10:
        console.log("a estação do mês e inverno ");
        break;

    case 11:

        console.log("a estação do mês e primavera ");
        break;

    case 12:

        console.log("a estação do mês e primaveira ");
        break;
                                           

    default:
        break;
}