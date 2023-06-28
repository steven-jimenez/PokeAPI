'use client'
import CardPokemon from "./CardPokemon";
async function getData(url){
  const response = await fetch(url);
  const data = await response.json();
  
  return data;

}

export default async function Home() {
  const data = await getData('https://pokeapi.co/api/v2/pokemon?limit=5');
  const firstData = data.results;
  

 
  return (
   <>
   {
    firstData.map(el => (
      <CardPokemon url={el.url}/>
    ))
    
   }
   </>
  )
}
