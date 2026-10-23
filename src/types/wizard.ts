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

// Wizard has an index signature, so Omit<Wizard, "id"> would lose the known
// properties. We first keep only the known keys, then omit "id".
type KnownKeys<T> = {
  [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
};

export type NewWizard = Omit<KnownKeys<Wizard>, "id"> & {
  [key: string]: string | number | boolean;
};
export type WizardSummary = Pick<Wizard, "id" | "name" | "house">;
export type WizardUpdate = Partial<Wizard>;
export type HousePoints = Record<House, number>;