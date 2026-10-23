// infer extracts an array element type.
export type ArrayElement<T> =
  T extends (infer Item)[] ? Item : never;