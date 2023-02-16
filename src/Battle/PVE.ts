import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    player: Fighter,
    private _enviroment: (Fighter | SimpleFighter)[],
  ) {
    super(player);
  }

  static verifyIsAlive(enemy: (Fighter | SimpleFighter)) {
    return enemy.lifePoints !== -1;
  }
  
  private attackMonsters(enviroment: (Fighter | SimpleFighter)[]) {
    enviroment.forEach((enemy) => {
      if (enemy.lifePoints !== -1) { this.player.attack(enemy); }
    });
  }

  private attackPlayer(enviroment: (Fighter | SimpleFighter)[]) {
    enviroment.forEach((enemy) => {
      enemy.attack(this.player);
    });
  }

  fight(): number {    
    let battle = true;
    const verificationEnemies = this._enviroment.every(PVE.verifyIsAlive);
    const verificationPlayer = PVE.verifyIsAlive(this.player); 
    while (battle) {
      this.attackMonsters(this._enviroment);
      if (verificationPlayer) battle = false;
      this.attackPlayer(this._enviroment);
      if (verificationEnemies) battle = false;
    }
    return super.fight(); 
  }
}

export default PVE;