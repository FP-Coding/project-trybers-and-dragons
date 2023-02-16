import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _countDwarf = 0;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.incrementDwarfCount();
  }
    
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
    
  static incrementDwarfCount(): void {
    Dwarf._countDwarf += 1;
  }
    
  static createdRacesInstances(): number {
    return Dwarf._countDwarf;
  }
}

export default Dwarf;