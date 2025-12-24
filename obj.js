//objeto é uma variavel com muitos valores dentro, um metodo é
//uma funcao colocadas dentro de um a propriedade.
//ex: const carro = {marca: "ford", modelo: "ka"}

let carro = {
    marca: "ford", 
    modelo: "ka", 
    ano: 2015, 
    placa: "xxx1111",
    buzina: function(){console.log("biibibibiiii"); },
    completo: function(){
        return "a marca é " + this.marca + " e o modelo é " + this.modelo;
    }
};

console.log(carro.completo());
//carro é um objeto, marca, modelo, etc sao propriedades

carro.buzina();

//omo exibir cada coisa (objeto.variavel)
console.log(carro.placa);

