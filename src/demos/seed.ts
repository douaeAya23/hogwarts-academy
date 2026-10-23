import type { SpellRepository } from "../repositories";

export function seedSpells(spells: SpellRepository): void {
  spells.add({ id: 101, name: "Expelliarmus", category: "attack", power: 80 });
  spells.add({ id: 102, name: "Protego", category: "defense", power: 60 });
}