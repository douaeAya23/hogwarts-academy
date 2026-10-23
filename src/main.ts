import type {
  Spell,
  AcademyEvent,
  HousePoints,
  SpellCategory,
  SpellOutput,
  ArrayElement,
  AttackSpell,
  NonHealingCategory,
} from "./types";

import { WizardRepository, SpellRepository } from "./repositories";
import { AcademyService } from "./services/academy-service";
import { isWizard } from "./guards";
import { handleSpellCast } from "./handlers/spell-cast-handler";

const wizards = new WizardRepository();
const spells = new SpellRepository();

console.log("\n--- Ex 1 : addWizard ---");
const harry = wizards.addWizard({
  name: "Harry Potter",
  house: "Gryffindor",
  level: 5,
  active: true,
  patronus: "Stag"
});

wizards.addWizard({
  name: "Hermione Granger",
  house: "Gryffindor",
  level: 8,
  active: true
});

wizards.addWizard({
  name: "Draco Malfoy",
  house: "Slytherin",
  level: 6,
  active: true
});

console.log(harry); // id attribué automatiquement

console.log("\n--- Ex 2 : findByHouse (repository) ---");
console.log(wizards.findByHouse("Gryffindor")); // Harry & Hermione
console.log(wizards.findByHouse("Slytherin"));  // Draco

spells.add({
  id: 101,
  name: "Expelliarmus",
  category: "attack",
  power: 80
});

spells.add({
  id: 102,
  name: "Protego",
  category: "defense",
  power: 60
});

console.log("\n--- Ex 4 : ValidateSpellPower ---");
spells.add({ id: 103, name: "Protego Maxima", category: "defense", power: 50 });

try {
  spells.add({ id: 104, name: "Invalid Spell", category: "attack", power: -10 });
} catch (error: unknown) {
  console.error("Refusé :", error instanceof Error ? error.message : error);
}

const academy = new AcademyService(wizards, spells);

console.log("\n--- Cast a spell ---");
console.log(academy.castSpell(1, 101));

console.log("\n--- Find wizards by house ---");
console.log(academy.findByHouse("Gryffindor"));

console.log("\n--- Update a wizard ---");
academy.updateWizard(1, { level: 6 });
console.log(wizards.findById(1));

console.log("\n--- Type guard ---");
const unknownWizard: unknown = wizards.findById(1);
if (isWizard(unknownWizard)) {
  console.log(`${unknownWizard.name} belongs to ${unknownWizard.house}`);
}

console.log("\n--- Record utility type ---");
const points: HousePoints = {
  Gryffindor: 100,
  Slytherin: 80,
  Ravenclaw: 90,
  Hufflepuff: 70
};
console.log(points);

console.log("\n--- Extract spell-cast events ---");
const events: AcademyEvent[] = [
  { type: "spell-cast", wizardId: 1, spellName: "Lumos" },
  { type: "level-up", wizardId: 2, newLevel: 9 },
  { type: "wizard-expelled", wizardId: 3 }
];
console.log(academy.getSpellEvents(events));

console.log("\n--- Ex 3 : handleSpellCast ---");
handleSpellCast({ type: "spell-cast", wizardId: 1, spellName: "Expelliarmus" });

// Compile-time demonstrations: these aliases are checked by TypeScript.
type CastArguments = Parameters<AcademyService["castSpell"]>;
type CastResult = ReturnType<AcademyService["castSpell"]>;
type AttackOutput = SpellOutput<"attack">; // number
type HealingOutput = SpellOutput<"healing">; // string
type SpellItem = ArrayElement<Spell[]>; // Spell
type AttackSpellExample = AttackSpell;
type RemainingCategories = NonHealingCategory;
type CategoryExample = SpellCategory;

const typeExamples: [
  CastArguments,
  CastResult,
  AttackOutput,
  HealingOutput,
  SpellItem,
  AttackSpellExample["category"],
  RemainingCategories,
  CategoryExample
] | null = null;

void typeExamples;
