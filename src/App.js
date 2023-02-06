import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header'
import Card from './components/Card';

function App() {
  // score state
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // pokemon state
  const [pokemon, setPokemon] = useState([])
  // make api call to fetch card data
  
  useEffect(() => {
    async function getPokemon() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await res.json();
      console.log(data);
      setPokemon(data.results);
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

  // useEffect(() => {
  //   setPokemon((prev) => shuffle(prev))
  // }, [pokemon]);

  return (
    <div className="App">
      <Header 
        score={score}
        highScore={highScore}
      />
      <div className='card-wrapper'>
        {/* map over pokemon and create Card components */}
        {
        pokemon.map((poke, index) => {
          return (
            <Card
              key={poke.name}
              name={poke.name}
              url={poke.url}
              index={index}
              setPokemon={setPokemon}
              pokemon={pokemon}
              shuffle={shuffle}
            />
          )
        })
        }
      </div>
    </div>
  );
}

export default App;
