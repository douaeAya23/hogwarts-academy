import type { NewWizard, Wizard } from "../types";
import { Repository } from "./repository";

export class WizardRepository extends Repository<Wizard> {
  addWizard(data: NewWizard): Wizard {
    const wizard: Wizard = { ...data, id: this.nextId() };
    this.add(wizard);
    return wizard;
  }

  findByHouse(house: Wizard["house"]): Wizard[] {
    return this.getAll().filter(wizard => wizard.house === house);
  }
}