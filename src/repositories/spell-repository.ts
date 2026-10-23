import type { Spell } from "../types";
import { ValidateSpellPower } from "../decorators";
import { Repository } from "./repository";

export class SpellRepository extends Repository<Spell> {
  @ValidateSpellPower
  override add(spell: Spell): void {
    super.add(spell);
  }
}