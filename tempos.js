/*
Eventos de tempo com javascript

os eventos de tempo permitem a execução do código em intervalos de tempo especificados. 
esses intervalos de tempos sao chamados de eventos de cronometragem.

os dois métodos para usar com javascript são:

settimeout(Function, tempo em milisegundos)
-> executa uma funcao apos esperar um número especificado de milisegundos

setInterval(function, milisegundos)
-> mesmo que o setTimeout(), mas repete a execucao da funcao continuamente.
*/

function ativarcont(){
/*    document.getElementById('tempo').innerHTML = "começou a contagem";
    
    //executa aoenas uma vez apos o inicio da funcao
    let tempo = setTimeout(function (){
        document.getElementById('tempo').innerHTML = "executou o settime";
        document.body.style.backgroundColor = "purple";
    }, 5000);
*/
}

//limpar o time set out
function pararcont() {
    /*
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "parou centrao";
    */
}

function ativarcont(){

    tempo = setInterval(function () {
                var cronometro = document.getElementById('tempo').innerHTML;
                var soma = parseInt(cronometro) - 1;

                if (soma == 0){
                     document.getElementById('tempo').innerHTML = "tempo esgotado";
                     pararcont();                   
                } else {
                    document.getElementById('tempo').innerHTML = soma;
                }

            }, 1000);
        }

function pararcont(){
    clearInterval(tempo);


    

}
