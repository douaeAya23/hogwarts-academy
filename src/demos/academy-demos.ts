import type { AcademyEvent } from "../types";
import type { WizardRepository } from "../repositories";
import type { AcademyService } from "../services/academy-service";

export function demoAcademy(
  academy: AcademyService,
  wizards: WizardRepository
): void {
  console.log("\n--- Cast a spell ---");
  console.log(academy.castSpell(1, 101));

  console.log("\n--- Find wizards by house ---");
  console.log(academy.findByHouse("Gryffindor"));

  console.log("\n--- Update a wizard ---");
  academy.updateWizard(1, { level: 6 });
  console.log(wizards.findById(1));

  console.log("\n--- Extract spell-cast events ---");
  const events: AcademyEvent[] = [
    { type: "spell-cast", wizardId: 1, spellName: "Lumos" },
    { type: "level-up", wizardId: 2, newLevel: 9 },
    { type: "wizard-expelled", wizardId: 3 }
  ];
  console.log(academy.getSpellEvents(events));
}