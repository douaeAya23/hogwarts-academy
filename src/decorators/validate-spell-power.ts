function hasNegativePower(candidate: unknown): boolean {
  return (
    typeof candidate === "object" &&
    candidate !== null &&
    "power" in candidate &&
    typeof candidate.power === "number" &&
    candidate.power < 0
  );
}

export function ValidateSpellPower(
  target: object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
): void {
  const originalMethod = descriptor.value as (...args: unknown[]) => unknown;

  descriptor.value = function (this: unknown, ...args: unknown[]): unknown {
    if (hasNegativePower(args[0])) {
      throw new Error("Spell power cannot be negative");
    }

    return originalMethod.apply(this, args);
  };
}