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
      setPokemon(data.results)
      console.log(pokemon)
    }

    getPokemon()
  }, []);

  return (
    <div className="App">
      <Header 
        score={score}
        highScore={highScore}
      />
      <div className='card-wrapper'>
        {/* map over card data and create Card components */}
      </div>
    </div>
  );
}

export default App;
