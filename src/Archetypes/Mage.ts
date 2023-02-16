import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _countMage = 0;
  private _energyType:EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.createMage();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._countMage;
  }

  static createMage(): void {
    Mage._countMage += 1;
  }
}

export default Mage;