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

//exibir array no html
document.getElementById("TEXT").innerHTML = pessoa;

//colocar algo entre os elementos da array, substitui as virgulas
document.getElementById("TEXT").innerHTML = pessoa.join(" :: ");

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
pessoa.unshift("DELTARUNE");
console.log(pessoa);

document.getElementById("testo").innerHTML = pessoa;
