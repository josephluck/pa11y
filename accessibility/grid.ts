import { ContrastResult, contrast } from "./contrast";
import { split } from "../utils/pairs";

type Grid = GridRow[];

type GridRow = GridItem[];

type GridItem = ContrastResult & {
  fg: string;
  bg: string;
};

export const grid = <T extends string>(colors: T[]): Grid =>
  split(colors, colors).map((row) =>
    row.map((cell) => ({
      fg: cell[0],
      bg: cell[1],
      ...contrast(cell[0], cell[1]),
    }))
  );
