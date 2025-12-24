//isso aqui é texto, pois há aspas
console.log("5 + 5");

//isso aqui soma dois argumentos;
console.log(6 + 8);

//numero
console.log(1);

//string de numero
console.log("1");

let a = 1;
let b = 3
let c = a + b;
let d = a * b;

console.log(c);
console.log(d);

//sintaxe é inteiramente minuscula, var, let, console, etc em minusculo
var PESSOA = "eu";
var pessoa = "nos";

//case sensitive, sensivel ao maiusculo e minusculo
console.log(PESSOA);
console.log(pessoa);

//obvio que a fofura do comentárioé em "//"
/*
ou é feito assim, igual no c em
*/

let nome, sobrenome, nomecompleto, idade;

nome = "arthur";
sobrenome = "santos";
idade = 90;

nomecompleto = nome + " " + sobrenome;

/* como nome atribui valor, se a variavel ou o valor estiver na frente,
ele irá fazer a soma normalmente
 "100nome"
*/
pessoa = 10 + idade + nome;

/* nesse caso, se a string ou variavel com string estiver na frente,
apenas haverá concatenação das strings 
 "nome9010"
*/
PESSOA = nome + idade + 10;

document.getElementById("txt").innerHTML = nomecompleto;
document.getElementById("oi").innerHTML = pessoa;
document.getElementById("OI").innerHTML = PESSOA;

console.log(PESSOA);
console.log(pessoa);
console.log(nomecompleto);