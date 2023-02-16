import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _countRanger = 0;
  private _energyType:EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.createRanger();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._countRanger;
  }

  static createRanger(): void {
    Ranger._countRanger += 1;
  }
}

export default Ranger;