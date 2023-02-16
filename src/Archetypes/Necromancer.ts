import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _countNecromancer = 0;
  private _energyType:EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.createNecromancer();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._countNecromancer;
  }

  static createNecromancer(): void {
    Necromancer._countNecromancer += 1;
  }
}

export default Necromancer;