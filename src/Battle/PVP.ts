import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    playerOne: Fighter,
    private _playerTwo: Fighter,
  ) {
    super(playerOne);
  }

  fight(): number {    
    while (Battle.isAlive(this.player) && Battle.isAlive(this._playerTwo)) {
      if (Battle.isAlive(this.player)) this.player.attack(this._playerTwo);
      if (Battle.isAlive(this._playerTwo)) this._playerTwo.attack(this.player);
    }
    return super.fight(); 
  }
}

export default PVP;