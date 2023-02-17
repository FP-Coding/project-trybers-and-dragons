import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    player: Fighter,
    private _enviroment: (Fighter | SimpleFighter)[],
  ) {
    super(player);
  }

  static turnFight(enviroment: (Fighter | SimpleFighter)[]) {
    enviroment.forEach((enemy) => {
    if (enemy.lifePoints !== -1) this.player.attack(enemy);
    if (enemy.lifePoints !== -1) enemy.attack(this.player);
    });
  }

  fight(): number {
    while (this._enviroment.some(Battle.isAlive) 
    && Battle.isAlive(this.player)) {
      this.turnFight(this._enviroment);
    }
    return super.fight(); 
  }
}

export default PVE;