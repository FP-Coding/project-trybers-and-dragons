import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _countElf = 0;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.incrementElfCount();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._countElf;
  }

  static incrementElfCount(): void {
    Elf._countElf += 1;
  }
}

export default Elf;