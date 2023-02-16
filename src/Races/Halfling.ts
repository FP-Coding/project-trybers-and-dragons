import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _countHalfling = 0;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.incrementHalflingCount();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._countHalfling;
  }

  static incrementHalflingCount(): void {
    Halfling._countHalfling += 1;
  }
}

export default Halfling;