import React from 'react'
async function getData(url){
    const response = await fetch(url)
    const data = await response.json();
    return data;

}

async function CardPokemon ({url}) {
    const dataPokemon = await getData(url)

    return(
        <div className='CardPokemon'>
            <h1>{dataPokemon.name}</h1>
            <h1>{dataPokemon.id}</h1>

        </div>
    )
}

export default CardPokemon;
