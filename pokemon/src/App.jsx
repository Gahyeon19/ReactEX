import { useState, useEffect } from 'react'
import './App.css'
// import { json } from 'express';

function App() {
  const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon?limit=1280"
  let [isLoading, setIsLoading] = useState(true);
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch(POKEMON_URL)
    .then((response) => response.json())
    .then(json => {
      setData(json.results);
      setIsLoading(false);
    });}, []);

  return (
    <>
      <div>
        <h1>Poketmons !</h1>
        <p>{isLoading ? <span>Loading ...</span> : 
            <select>{data.map(pokemon => <option value={pokemon.url}>{pokemon.name}</option>)}</select>}</p>
      </div>
    </>
  )
}

export default App