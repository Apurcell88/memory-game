import './App.css';
import { useState } from 'react';
import Header from './components/Header'
import Card from './components/Card';

function App() {
  // score state
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // make api call to fetch card data

  return (
    <div className="App">
      <Header 
        score={score}
        highScore={highScore}
      />
      {/* map over card data and create Card components */}
    </div>
  );
}

export default App;
