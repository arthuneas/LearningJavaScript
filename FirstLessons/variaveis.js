var idade, eleitor;
idade = 69;

//condicional, depois do ? fica as condoncoes de verdadeiro e falso,
//antes do : é verdadeiro, depois é falso
eleitor = (idade < 18) ? "não eleitor" : "sim, eleitor";
console.log("a resposta é  " + eleitor + " a idade dele é " + idade);

var resultado = !(idade === 60 || idade === 70);
console.log(resultado);


//em let a variavel nao pode redeclarada 
// let a = "arthur"
// let a = "bin"
// o programa dará erro ou ele pegara o let do escopo geral
/*
let x = 10;
{
    let x = 2;
}
saida = 10;
a nao ser que voce sê a saida dentro do escopo local, porem fora vai para o valor geral
*/

//em var pode ser diferenciado ou seja
//let a = "arthur"
// let a = "bin"
// o programa dara a como "bin"
//let é melhor usado para complexidade

//const é constante 
//ou seja, para todos os escopos gerais ou locais terá o mesmo valor
//mais declaracao de const de uma mesma variavel da erro