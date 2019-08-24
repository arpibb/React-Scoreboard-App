import React from 'react';
import { Consumer } from './Context';

const Stats = () => {
    return(
        <Consumer>
            { context => {

              const totalPlayers = context.length;

              const totalPoints = context.reduce( (total, player) => {
                  return total + player.score;
              },0);

              return(
                <table className="stat">
                  <tbody>
                    <tr>
                      <td>Player:</td>
                      <td>{ totalPlayers }</td>    
                    </tr>
                    <tr>
                      <td>Total Points:</td>
                      <td>{ totalPoints }</td>    
                    </tr> 
                  </tbody>
                </table>
              );
            }}
        </Consumer>
        

    );
}
export default Stats;