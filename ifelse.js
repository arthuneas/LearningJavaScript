var interruptor, lampada;

interruptor = "on"

if (interruptor == "on"){
    console.log("lampada está ligada");
} else {
    console.log("a lampada está desligada");
}

//mostrar as horas
console.log("---------------------------------------");
var hora, minutos, seg;
hora = new Date().getHours();
minutos = new Date().getMinutes();
seg = new Date().getSeconds();

console.log("agora são: " + hora + ":" + minutos + ":" + seg);
//alert("agora são: " + hora + ":" + minutos + ":" + seg);

if (hora < 12) { 
    console.log("Good Morning");
} else if (hora < 18) {
    console.log("Boa Taarde");
} else {
    console.log("Good Night");
}


function verifica(){
    let nome = document.getElementById("nome").value;

    if (nome == "" || nome == null){
        let p = document.getElementById("teste");
        p.innerHTML = "O campo não pode ser vazio";
        p.style.color = "red";
    } else {
        let p = document.getElementById("teste");
        p.innerHTML = "Verificado!";
        p.style.color = "green";
    }
}





//console.log("---------------------------------------");
//console.log("---------------------------------------");
//console.log("---------------------------------------");
//console.log("---------------------------------------");
