export type SpellCategory = "attack" | "defense" | "healing";

export interface Spell {
  id: number;
  name: string;
  category: SpellCategory;
  power: number;
}

// Conditional type: choose an output type based on the spell category.
export type SpellOutput<T extends SpellCategory> =
  T extends "attack" ? number :
  T extends "defense" ? boolean :
  T extends "healing" ? string :
  never;

export type AttackSpell = Extract<Spell, { category: "attack" }>;
export type NonHealingCategory = Exclude<SpellCategory, "healing">;