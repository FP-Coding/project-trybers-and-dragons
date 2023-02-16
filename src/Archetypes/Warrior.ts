import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _countWarrior = 0;
  private _energyType:EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.createWarrior();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._countWarrior;
  }

  static createWarrior(): void {
    Warrior._countWarrior += 1;
  }
}

export default Warrior;