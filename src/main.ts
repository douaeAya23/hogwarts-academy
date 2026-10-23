import { WizardRepository, SpellRepository } from "./repositories";
import { AcademyService } from "./services/academy-service";
import { seedSpells } from "./demos/seed";
import { demoAddWizard, demoFindByHouse } from "./demos/wizard-demos";
import { demoSpellPower, demoSpellCastHandler, demoCache } from "./demos/spell-demos";
import { demoAcademy } from "./demos/academy-demos";
import { demoTypeGuards } from "./demos/guard-demos";
import { demoRecordType } from "./demos/type-demos";

// Composition root: build the objects, then run the demos.
const wizards = new WizardRepository();
const spells = new SpellRepository();
const academy = new AcademyService(wizards, spells);

demoAddWizard(wizards);
demoFindByHouse(wizards);

seedSpells(spells);
demoSpellPower(spells);

demoAcademy(academy, wizards);
demoSpellCastHandler();
demoCache();

demoTypeGuards(wizards);
demoRecordType();