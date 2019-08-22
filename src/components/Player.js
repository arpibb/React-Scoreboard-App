import React, {PureComponent} from 'react';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {
  render(){
    const {
      name,
      id,
      score,
      index,
      changeScore,
      removePlayer
    } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>

          <Icon isHighScore={this.props.isHighScore} />
          { name }
        </span>
  
        <Counter 
        changeScore={changeScore}
        index={index}
        score={score}/>
      </div>
    );
  } 
}

  export default Player;