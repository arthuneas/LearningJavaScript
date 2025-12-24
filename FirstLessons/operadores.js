document.getElementById("sla").innerHTML = 
"agora em JS, eu preciso controlar isso";

var valor1, valor2, total;
valor1 =  78;
valor2 = 8;

total = ++valor1 //soma 1 ao total ++ é incremento
alert('o valor é ' + total);

total = --valor1; //subtrai 1 ao total
console.log("o valor1 ficou: " + total);

//equivale a  valor1 = valor1 + valor2
valor1 += valor2;

alert(valor1);

//equivale a valor1 = valor 1 / valor2
valor1 /= valor2;
alert(valor1);
