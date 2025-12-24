function eventoclick(){
    document.body.style.backgroundColor = "green";
}

function eventodblclick() { 
    alert('evento de clique duplo');
}

function eventoonmouse(){
    let div = document.getElementById("teste1");
    div.style.backgroundColor ="rgb(230, 37, 101)";
}

function eventooutmouse(){
    let div = document.getElementById("teste1");
    div.style.backgroundColor ="rgb(104, 241, 19)";
}

function addtexto(){
    let p = document.getElementById("texto");
    p.append('o ');
}



//onclick -> disparado quando recebe um click
//ondblclick -> disparado quando recebe um click duplo
//onmouseover -> disparado quando o mouse sobre o elemento
//onmouseout -> disparado quando o mouse está fora do elemento 
//onmovemove -> disparado quando o mouse é movido no elemento
//onmousedown -> disparado quando o click for pressionado
//onmouseup -> disparado quando o click for liberado
//onfocus -> quando um campo do tipo imput recebe foco
//onchange -> disparado quando existe uma mudança 
//onblur -> disparado quando elemento perde o foco.
//onkeydown -> quando uma tecla é pressionada.
//onkeypress -> quando uma tecla é pressionada e solta.
//onkeyup -> disparada quando uma tecla é solta sobre um elemento
//onload -> disparada quando a pagina terminou de ser carregada. body.
//onreside -> disparada quando há redirecionamento de janela