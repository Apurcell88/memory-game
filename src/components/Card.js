const Card = (props) => {
  return (
    <div className="card" onClick={() => {
      props.shuffle(props.pokemon)
      console.log(props.name, props.url)
      props.setPokemon([...props.pokemon])
    }}>
      <img src={props.url} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}
 
export default Card;