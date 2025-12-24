function soma(v1, v2){
     return v1 + v2;  
}

function realtodolar(real, dolar){
    return real * dolar;
}

var x = realtodolar(5, 9);

//alert("valor em dolar:" + x);

//document.getElementById("add").innerHTML = soma(10,20);

//outra forma de fazer funcao

let mensagemtest = "meu nome é cromossomo jborbjor";
let nomebliss = "obelisco";

const ola = (mensagem) => {
    console.log(mensagem);
}

const Olapessoa = (nome) => {
    console.log("ola, " + nome + ". Bom Dia!")
}

ola(mensagemtest);
Olapessoa(nomebliss);