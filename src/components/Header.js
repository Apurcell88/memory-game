const Header = (props) => {
  return (
    <header>
      <div className='header-container'>
        <h1 className="title-text">Memory Game</h1>
        <div className="score-container">
          <p className="score-text">Score: {props.score}</p>
          <p className="score-text">High score: {props.highScore}</p>
        </div>
      </div>
      <div className="description-container">
        <p className="description-text">Score points by clicking on an image that hasn't been clicked yet</p>
      </div>
    </header>
  );
}
 
export default Header;