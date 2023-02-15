import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header'
import Card from './components/Card';

function App() {
  let id = 0;

  // score state
  let [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // pokemon state
  const [pokemon, setPokemon] = useState([])

  // state to hold clicked pokemon
  const [clickedPokemon, setClickedPokemon] = useState([]);

  // make api call to fetch card data
  useEffect(() => {
    async function getPokemon() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await res.json();
      const pokemons = data.results

      pokemons.map(async pokemon => {
        pokemon.data = await fetch(pokemon.url);
        const url = await pokemon.data.json()
        setPokemon((prev) => [...prev, {name: url.name, sprite: url.sprites.front_default}])
      }) 
    }

    getPokemon()
  }, []);

  // shuffle pokemon function
  const shuffle = (arr) => {
    let currentIndex = arr.length, randomIndex;

    // while there remain elements to shuffle.
    while (currentIndex !== 0) {
      // pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }

    return arr;
  }

  return (
    <div className="App">
      <Header 
        score={score}
        highScore={highScore}
      />
      <div className='card-wrapper'>
        {/* map over pokemon and create Card components */}
        {
        pokemon.map((poke) => {
          id++
          return (
            <Card
              key={id}
              name={poke.name}
              url={poke.sprite}
              id={id}
              setPokemon={setPokemon}
              pokemon={pokemon}
              shuffle={shuffle}
              score={score}
              setScore={setScore}
              highScore={highScore}
              setHighScore={setHighScore}
              handleScore={handleScore}
              clickedPokemon={clickedPokemon}
              setClickedPokemon={setClickedPokemon}
            />
          )
        })
        }
      </div>
    </div>
  );
}

export default App;
