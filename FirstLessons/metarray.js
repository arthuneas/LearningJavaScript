var lista = [
    "arroz",
    "feijao", 
    "leite", 
    "miojo"
];

console.log("posicao 0 é " + lista[0]);
console.log("posicao 1 é " + lista[1]);

//outro metodo de criar array, porém é desnecessário
var lista = new Array("arroz", "feijao", "leite", "miojo");

//metodo para criar uma variavel para uma posicao da lista
let x = lista[3];
console.log(x);

//alterar parametor de uma array
lista[0] = "café";
console.log(lista[0]);

//como mostrar toda a array
console.log(lista);
console.log("------------------------------------------------");

let pessoa = ["dimitri", "teixeira", 30, "professor"]; //array
let pessoal = {nome: "dimitri",sobrenome: "teixeira",idade: 30}; //objeto

console.log("o nome dentro de uma array: " + pessoa[0]);
console.log("o nome dentro de um objeto: " + pessoal.nome);
console.log("------------------------------------------------");

//para saber o tanto de elementos dentro de uma matriz e por 
//nome_da_array.length
pessoa.length;
console.log(pessoa.length); //saida = 3

//pegar o ultimo elemento da matriz
//saber a posicao pode ser por (nome_da_array.length - 1)
console.log("a posicao do ultimo elemento: " + (pessoa.length - 1));

//para saber de maneira efetiva o elemento de dentro da array
//nome_da_array[pessoa.length - 1]
console.log(pessoa[pessoa.length - 1]);

console.log("------------------------------------------------");
//acrescentar um elemento da array sem mexer diretamente na array
//nome_da_array.push(elemento que deseja colocar);
//obs acrescenta no final 
console.log("array antes do push: " + pessoa);

pessoa.push("brasileiro");
console.log("array apos o push: " + pessoa);  

//tambem pode se adicionar por
//colocar a quantidade de elementos como uma posicao, ja que a array é menos que 1
pessoa[pessoa.length] = "casado";
console.log(pessoa);
console.log("------------------------------------------------");

//metodo para conferir se estamos trabalhando com array
Array.isArray(pessoa);
Array.isArray(pessoal);
console.log(Array.isArray(pessoa)); //true
console.log(Array.isArray(pessoal)); //false, pois é objeto
console.log("------------------------------------------------");

//***** Metodos de array ******
//colocar algo entre os elementos da array, substitui as virgulas
pessoa.join(" :: ");
console.log(pessoa);

//para remover o ultimo elemento da array
//nome_da_array.pop();
console.log("------------------------------------------------");
pessoa.pop();
console.log(pessoa);

//remover o primeiro elemento da array
//nome_da_array.shift();
console.log("------------------------------------------------");
pessoa.shift();
console.log(pessoa);

//para passar um valor para a primeira posicao do vetor
//nome_da_array.unshift(o que deseja colocar);
console.log("------------------------------------------------");
pessoa.unshift("DELTARUNE");
console.log(pessoa);

//aqui voce seleciona nome_array.splice(qual posicao vai ser adicionado, quantos serao removidos a partir da posicao escolhida, q"o que ira ser substituido")
console.log("------------------------------------------------");
pessoa.splice(1, 0, "item adicionado 1", "item adicionado 2");
console.log(pessoa);

pessoa.splice(2, 1, "Zapata lesbico");
console.log(pessoa);

// ********************** 
//deletar uma elemento da matriz
//"delete nome_array[posicao que deseja remover]"
//a parte deleytada fica 'unsigned'


console.log("------------------------------------------------");
//concatenar listas
//as listas continuam existindo, elas apenas juntam entre si
//precisam ser colocadas em uma nova variavel, pois essa juncao é um novo vetor
const lista1 = [0, 1, 2, 3];
const lista2 = [4, 5, 6, 7];
const lista3 = [8, 9, 10];
let superlista;
superlista = lista1.concat(lista2);


//tirar uma parte da matriz e deixar a partir de uma posicao valida como matriz
//noem_array.slice(a partir de qual posicao ela sera validada)
console.log("------------------------------------------------");
const jogadores = [
    "Biro",
    "Ribamar",
    "Maradona", 
    "Neymar",
    "Cristiano Ronaldo",
    "Hetero",
    "HEHEHHEHEH HE HE HEH HE EHE ",
];
const craques = jogadores.slice(2);
console.log(craques);

//cortar um intervalo da array é Nome_Array.slice(intervalo_inicio, Intervalo_fim);
//posicao do intervalo de fim nao conta.
let unit = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log("array unit sem slice: " + unit);
//essa array unit2 é a unit a partir da posicao 4, posicao 4 conta ate 7 - 1
let unit2 = unit.slice(4, 7);
console.log("array unit com slice em 4 ate 6: " + unit2);


//deixar elementos em ordem alfabetica
//
console.log("------------------------------------------------");
let jog;
jog = jogadores.sort();
console.log(jog);

//deixar os elementos em ordem alfabetica ao contrario
//Nome_Array.sort();
//Nome_Array.reverse();
jogadores.sort();
jogadores.reverse();
console.log(jog);

//caso queira apenas deixar um array em modo reverse
//Nome_Array.reverse();
console.log(unit);
unit.reverse();
console.log(unit);

//se tentarmos fazer o mesmo com numeros, o sort analizará o primeiro elemento de inicio
//imput: [12, 50, 100, 13, 434]
//output: [100, 12, 13, 434, 50]

//para ficar em ordem crescente: 
console.log(" ");
let numeros = [7, 5, 3, 56, 765, 23, 1, 54, 9, 76];
console.log("conteudo da array: " + numeros);

numeros.sort(function (a, b) { return a - b });
console.log("conteudo da array crescente: " + numeros);
//ordem decrescente
numeros.sort(function (a, b) { return b - a});
console.log("conteudo da array decrescente: " + numeros);

//ler maior numero de uma array
function Maior(array){
    return Math.max.apply(null, array);
};
console.log("o maior numero do vetor numeros é " + Maior(numeros));

//ler menor numero de uma array
function Menor(array){
    return Math.min.apply(null, array);
};
console.log("o menor numero do vetor numeros é " + Menor(numeros));


//filtragem de numeros a partir de alguma condicao
//dento de filter usamos uma funcao
console.log("------------------------------------------------");
const maior20 = numeros.filter(filtragem);

function filtragem(value, index, array){
    return value > 20;
};
console.log(maior20);


console.log("------------------------------------------------");
