import type { SpellRepository } from "../repositories";
import { handleSpellCast } from "../handlers/spell-cast-handler";
import { SpellCalculator } from "../services/spell-calculator";

export function demoSpellPower(spells: SpellRepository): void {
  console.log("\n--- Ex 4 : ValidateSpellPower ---");
  spells.add({ id: 103, name: "Protego Maxima", category: "defense", power: 50 });

  try {
    spells.add({ id: 104, name: "Invalid Spell", category: "attack", power: -10 });
  } catch (error: unknown) {
    console.error("Refusé :", error instanceof Error ? error.message : error);
  }
}

export function demoSpellCastHandler(): void {
  console.log("\n--- Ex 3 : handleSpellCast ---");
  handleSpellCast({ type: "spell-cast", wizardId: 1, spellName: "Expelliarmus" });
}

export function demoCache(): void {
  console.log("\n--- Ex 5 : Cache ---");
  const calculator = new SpellCalculator();
  console.log(calculator.calculatePower(10, 3)); // MISS
  console.log(calculator.calculatePower(10, 3)); // HIT
  console.log(calculator.calculatePower(5, 2));  // MISS
}