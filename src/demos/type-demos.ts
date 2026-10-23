import type {
  ArrayElement,
  AttackSpell,
  HousePoints,
  NonHealingCategory,
  Spell,
  SpellCategory,
  SpellOutput,
} from "../types";
import type { AcademyService } from "../services/academy-service";

export function demoRecordType(): void {
  console.log("\n--- Record utility type ---");
  const points: HousePoints = {
    Gryffindor: 100,
    Slytherin: 80,
    Ravenclaw: 90,
    Hufflepuff: 70
  };
  console.log(points);
}

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