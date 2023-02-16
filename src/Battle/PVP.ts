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
    let battle = true;
    while (battle) {
      this.player.attack(this._playerTwo);
      if (this.player.lifePoints === -1) battle = false;
      this._playerTwo.attack(this.player);
      if (this._playerTwo.lifePoints === -1) battle = false;
    }
    return super.fight(); 
  }
}

export default PVP;