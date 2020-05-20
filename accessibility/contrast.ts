import memoize from "fast-memoize";
import color from "color";

type AccessibilityLevel = "AA" | "AALarge" | "AAA" | "AAALarge";

export type ContrastResult = Record<AccessibilityLevel, boolean> & {
  contrast: number;
  accessibilityLevels: AccessibilityLevel[];
};

export const contrast = memoize(
  (fg: string, bg: string): ContrastResult => {
    const contrast = color(bg).contrast(color(fg));

    const accessibilityLevels = Object.keys(contrastRequirements).reduce(
      (acc, level) =>
        contrast >= contrastRequirements[level as AccessibilityLevel]
          ? [...acc, level as AccessibilityLevel]
          : acc,
      [] as AccessibilityLevel[]
    );

    return {
      contrast,
      accessibilityLevels,
      AALarge: accessibilityLevels.includes("AALarge"),
      AA: accessibilityLevels.includes("AA"),
      AAALarge: accessibilityLevels.includes("AAALarge"),
      AAA: accessibilityLevels.includes("AAA"),
    };
  }
);

const contrastRequirements: Record<AccessibilityLevel, number> = {
  AALarge: 3,
  AA: 4.5,
  AAALarge: 4.5,
  AAA: 7,
};
