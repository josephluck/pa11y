import { pairs, matrix, split } from "./pairs";

describe("Pairs", () => {
  it("makes pairs", () => {
    expect(pairs(["a", "b", "c"])).toEqual([
      ["a", "a"],
      ["a", "b"],
      ["a", "c"],
      ["b", "a"],
      ["b", "b"],
      ["b", "c"],
      ["c", "a"],
      ["c", "b"],
      ["c", "c"],
    ]);
  });

  it("makes a matrix", () => {
    expect(matrix(["a", "b", "c"], ["x", "y", "z"])).toEqual([
      ["a", "x"],
      ["a", "y"],
      ["a", "z"],
      ["b", "x"],
      ["b", "y"],
      ["b", "z"],
      ["c", "x"],
      ["c", "y"],
      ["c", "z"],
    ]);
    expect(matrix(["a", "b", "c"], ["a", "c", "b"])).toEqual([
      ["a", "a"],
      ["a", "c"],
      ["a", "b"],
      ["b", "a"],
      ["b", "c"],
      ["b", "b"],
      ["c", "a"],
      ["c", "c"],
      ["c", "b"],
    ]);
  });

  it("splits a matrix in to rows", () => {
    expect(split(["a", "b", "c"], ["x", "y", "z"])).toEqual([
      [
        ["a", "x"],
        ["a", "y"],
        ["a", "z"],
      ],
      [
        ["b", "x"],
        ["b", "y"],
        ["b", "z"],
      ],
      [
        ["c", "x"],
        ["c", "y"],
        ["c", "z"],
      ],
    ]);
  });
});
