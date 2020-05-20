import { grid } from "./grid";

describe("Grid", () => {
  it.each([
    { colors: ["#FFFFFF", "#000000"] },
    { colors: ["#FFFFFF", "#111111", "#000000"] },
    { colors: ["#FFFFFF", "#AAAAAA", "#444444", "#000000"] },
    { colors: ["#FFFFFF", "#AAAAAA", "#777777", "#444444", "#000000"] },
  ])("generates a grid of accessibility results", (row) => {
    expect(grid(row.colors)).toMatchSnapshot();
  });
});
