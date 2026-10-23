import type { WizardRepository } from "../repositories";

export function demoAddWizard(wizards: WizardRepository): void {
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
}

export function demoFindByHouse(wizards: WizardRepository): void {
  console.log("\n--- Ex 2 : findByHouse (repository) ---");
  console.log(wizards.findByHouse("Gryffindor")); // Harry et Hermione
  console.log(wizards.findByHouse("Slytherin"));  // Draco
}