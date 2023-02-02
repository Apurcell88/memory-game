const Card = (props) => {
  return (
    <div className="card">
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index + 1}.png`} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}
 
export default Card;