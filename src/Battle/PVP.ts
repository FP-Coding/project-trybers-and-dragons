import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    playerOne: Fighter,
    private _playerTwo: Fighter,
  ) {
    super(playerOne);
  }

  static turnFight(player1: Fighter, player2: Fighter) {
    if (player1.lifePoints !== -1) player1.attack(player2);
    if (player2.lifePoints !== -1) player2.attack(player1);
  }

  fight(): number {    
    while (Battle.isAlive(this.player) && Battle.isAlive(this._playerTwo)) {
      PVP.turnFight(this.player, this._playerTwo);
    }
    return super.fight(); 
  }
}

export default PVP;