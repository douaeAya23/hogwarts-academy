import type { WizardRepository } from "../repositories";
import { isWizard } from "../guards";

export function demoTypeGuards(wizards: WizardRepository): void {
  console.log("\n--- Type guard ---");
  const unknownWizard: unknown = wizards.findById(1);
  if (isWizard(unknownWizard)) {
    console.log(`${unknownWizard.name} belongs to ${unknownWizard.house}`);
  }

  console.log("\n--- Ex 6 : type guard strict ---");
  const validData: unknown = {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor",
    level: 5,
    active: true
  };

  const invalidData: unknown = {
    id: 2,
    name: "Viktor",
    house: "Durmstrang",
    level: 5,
    active: true
  };

  console.log(isWizard(validData));   // true
  console.log(isWizard(invalidData)); // false
}