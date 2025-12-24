const axios = require('axios');

//usando them e catch
/*
const getPokemonNomes = () => {
        outra maneira de fazer funcao.
    
    }

*/

function getPokemonNomes(){

    let url = 'https://pokeapi.co/api/v2/pokemon';

    axios.get(url)
    .then(res => {
        //metodo de array ts para pegar o nome.
        console.log(res.data.results.map(pokemon => pokemon.name));
    })
    .catch(err => {
        console.error(err);
    })
}

const getPokemonNamesTwo = async () => {

    let url = 'https://pokeapi.co/api/v2/pokemon';

    try{
        const res = await axios.get(url);
        //essa "=>" é a parte em que pega algo, nesse exemplo,
        //da aba pokemons, ele irá requerer o nome deles
        console.log(res.data.results.map(pokemon => pokemon.name))
    } catch (err) {
        console.error(err);
    }
}

//getPokemonNomes();
getPokemonNamesTwo();
