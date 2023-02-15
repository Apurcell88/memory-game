const Card = (props) => {
  return (
    <div className="card" onClick={(e) => {
      // updates the score
      if (props.clickedPokemon.includes(props.name)) {
        props.setScore(0);
        props.setClickedPokemon([])
        if (props.score > props.highScore) {
          props.setHighScore(props.score)
        }
      } else {
        props.setClickedPokemon(prev => [...prev, props.name])
        props.setScore(props.score + 1)
      }

      props.shuffle(props.pokemon)
      // console.log(props.name, props.url)
      props.setPokemon([...props.pokemon])
    }}>
      <img src={props.url} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}
 
export default Card;