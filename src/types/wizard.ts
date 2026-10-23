export type House =
  | "Gryffindor"
  | "Slytherin"
  | "Ravenclaw"
  | "Hufflepuff";

export interface Wizard {
  id: number;
  name: string;
  house: House;
  level: number;
  active: boolean;

  // Index signature: dynamic properties must use these value types.
  [key: string]: string | number | boolean;
}

export type NewWizard = Omit<Wizard, "id">;
export type WizardSummary = Pick<Wizard, "id" | "name" | "house">;
export type WizardUpdate = Partial<Wizard>;
export type HousePoints = Record<House, number>;