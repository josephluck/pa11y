export const pairs = <T>(arr: T[]): T[][] =>
  arr.map((v) => arr.map((w) => [v, w])).flat();

export const matrix = <T>(arr: T[], arr2: T[]): T[][] =>
  arr.map((_, i1) => arr2.map((_, i2) => [arr[i1], arr2[i2]])).flat();

export const split = <T>(arr: T[], arr2: T[]): T[][][] => {
  const length = arr.length;
  const result = matrix(arr, arr2);
  return Array.from({ length: arr.length }).map((_, i) =>
    result.slice(length * i, length * i + length)
  );
};
