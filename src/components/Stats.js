import React from 'react';

const Stats = ({ players, score }) => {

    const totalPlayers = players.length;

    const totalPoints = players.reduce( (total, player) => {
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
}
export default Stats;