let data = new Date();
console.log(data);

let ano = data.getFullYear();
console.log(ano);

//numero de 0 a 11
let mes = data.getMonth();
console.log(mes + 1);

//mostrar mes 
const mesesAno = ["janeiro", "fevereiro", "marco", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
let mesEscrito = mesesAno[mes]
console.log(mesEscrito);

//mostra dia
let daymes = data.getDate();
console.log(daymes);

//parte numerica do dia da semana 0 - 6
let diaSemana = data.getDay();
console.log(diaSemana);

const Semana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
let diaSemanaVerbal = Semana[diaSemana];
console.log(diaSemanaVerbal);

//mostrar a hora de 0 até 23
let hora = data.getHours();
console.log(hora);

//mostrar minutos
let minutos = data.getMinutes();
console.log(minutos);

//mostrar segundos
let segundos = data.getSeconds();
console.log(segundos);

//pegar milisegundos
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

//pegar a data no padrao brasileiro 
let dataBR = data.toLocaleString('pt-BR', { dateStyle: 'short' });
console.log(dataBR);

//funcao para adicionar zero
function addZero(x) { return x < 10 ? "0" + x : "" + x};

//pegar os valores separados
let d = new Date();
diadoMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

let DatapadraoBR = addZero(diadoMes) + "/" + addZero(mes) + "/" + ano;
console.log(DatapadraoBR);

//comparar datas 
//dentro de new Date (ano, mes, dia), voce pode adicionar o dia
var hoje = new Date();
var vencimento = new Date(ano, mes, diadoMes);

if (hoje > vencimento){
    console.log("sua conta está vencida!!!!!");
} else {
    console.log("ainda não venceu!!!!");
}

//diferenca entre datas em dias
var dataInicial = new Date();
var dataFinal = new Date(2025, 11, 31);

//o getTime() pega o tempo em milisegundos
var diferencaTIME = dataFinal.getTime() - dataInicial.getTime();

//converte o tempo para dias
diferencaDAYS = Math.ceil(diferencaTIME / (24 * 60 * 60 * 1000));

console.log(diferencaDAYS + " Dias");