import { contrast } from "./contrast";

describe("Contrast", () => {
  it.each([
    "#FFFFFF",
    "#EEEEEE",
    "#DDDDDD",
    "#CCCCCC",
    "#BBBBBB",
    "#AAAAAA",
    "#999999",
    "#888888",
    "#777777",
    "#666666",
    "#555555",
    "#444444",
    "#333333",
    "#222222",
    "#111111",
    "#000000",
  ])("#000000 text on %p background", (bg) => {
    const response = contrast("#000000", bg);
    expect(response).toMatchSnapshot();
  });
});
