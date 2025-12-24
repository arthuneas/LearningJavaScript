/* 
o JSON é uma funcao que converte texto em objeto ou texto em objeto
transmite dados entre sistemas de forma simples, já que o formato de texto,
já que o formato de texto é lido por toda linguagem de programação

No JavaScript, usamos dois métodos principais:
JSON.parse()      -> converte uma string JSON (texto) em objeto JavaScript
JSON.stringify()  -> converte um objeto JavaScript em string JSON (texto)

*/

const { object } = require("yup");

const Carro = {
    marca: "fiat",
    modelo: "uno",
    ano: 2001,
    Motor: ["2.0", "1.6", "1.0"]
}

document.getElementById('textt').innerHTML = Carro;

//objeto para texto
let carronovo = JSON.stringify(Carro);
document.getElementById('textjson').innerHTML = carronovo;

//texto para objeto
let carroobj  = JSON.parse(carronovo);
document.getElementById('object').innerHTML = carroobj;

//texto para objeto
console.log(carronovo);
//objeto para texto
console.log(carroobj);

//pegar valor do objeto
console.log("-------------------------");
console.log(carroobj.modelo);
console.log(carroobj.ano);
console.log(carroobj.Motor);

document.getElementById('modelo').innerHTML = carroobj.modelo;
document.getElementById('ano').innerHTML = carroobj.ano;
document.getElementById('Motor').innerHTML = carroobj.Motor.join(' | ');

const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/72015575/json/');
ajax.send();

ajax.onload = function(){
    document.getElementById('area').innerHTML = this.responseText;
    let objeto = JSON.parse(this.responseText);
}

function buscarCEP(){
    let input = document.getElementById('CEP').value

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function(){
       //document.getElementById('cep').innerHTML = this.responseText;
        
        //tranforma o texto em objeto
        let obj = JSON.parse(this.responseText);

        //aqui voce pega valores desejados
        let logradouro = obj.logrdouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('cep').innerHTML = "Logradouro: " + logradouro +
        "<br> Cidade: " + cidade + 
        "<br> Estado: " + estado;
    }

}