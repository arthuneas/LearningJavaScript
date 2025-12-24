//for (var i = 0; i < 10001; i = i + 5){
//    document.getElementById("texxte").innerHTML += i + ", ";
//}
var ano = new Date().getFullYear();

for (let i = ano; i > 1949; i-- ){
    document.getElementById("ano").innerHTML += "<option value = '"+ i + "'>" + i + "</option>";
}

const carros = ["a", "b", "c", "d", "e"];


let tamanhos;
tamanhos = carros.length;

for(var i = 0; i < tamanhos; i++){
    document.getElementById('carros').innerHTML += carros[i] + " - ";

}