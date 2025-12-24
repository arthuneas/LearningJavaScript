class Carro {

    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }

    buzina(){
        return this.modelo + " buzinou: beabaadoobee"
    }
}

const uno = new Carro("fiat", "uno", 2001);
console.log(uno, uno.buzina());

const gol = new Carro("wolks", "gol", 2013);
console.log(gol, gol.buzina());

gol.ano = 2014;

console.log(gol);

/*const carro = {

    marca: "flat",
    modelo: "uno",
    ano: 2001

} //objeto
*/