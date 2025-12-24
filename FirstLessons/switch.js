/*let p = document.getElementById("cor");
p.innerHTML = "O NOME DO TOY É HTML";

expressao = "g";

switch (expressao) {

    case "r": 
        p.style.color = "red";
        break;
    case "y":
        p.style.color = "yellow";
        break;
    case "g":
        p.style.color = "green";
        break;
    default:
        p.style.color = "black";
        break; 
}
        */

console.log("---------------------------------------");
var hora, minutos, seg, dia;
dia = new Date().getDay();
hora = new Date().getHours();
minutos = new Date().getMinutes();
seg = new Date().getSeconds();

console.log (dia+ ":" + hora + ":" + minutos + ":" + seg);

switch (hora){

    case 13: 
        console.log("São uma da tarde");
        break;

    case 14:

        switch (minutos){
             case 53:
                console.log("isso foi um rojão?");
                break;

            case 54:
                console.log("sao 54 minutos");
                break;
            
            case 55:
                console.log("e viva, os estados, unidos, da, america");
                break;
            
        }

        console.log("são duas da tarde");
        break;

    case 15:
        console.log("são tres da tarde");
        break;

    case 16:
        console.log("sao SPAWN DA MANHA 4 DA MANHA");
        break;
    
    default: 
        console.log("ALGURM TA SAMBANDO???");
        break;


}

function verificarcor(){

let cor = document.getElementById("cor").value;
cor = cor.toLowerCase(); //ddeixa tudo minusculo, usuario pode digitar qua;quer coisa

    switch (cor) {
        case "verde":
            document.body.style.backgroundColor = "green";
            break;

        case "azul": 
            document.body.style.backgroundColor = "blue";
            break;
        
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;

        case "preto":
            document.body.style.backgroundColor = "black";
            break;
    }
}