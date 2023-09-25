import { create } from "zustand";

const accentColors = {
  orange: "#FB923C",
  pink: "#F472B6",
  red: "#F87171",
  blue: "#818CF8",
  green: "#4ADE80",
  purple: "#A78BFA",
  grey: "#9CA3AF",
};

const accentColorNames = Object.keys(
  accentColors
) as (keyof typeof accentColors)[];

type AccentColor = keyof typeof accentColors;

type AccentColorState = {
  accentColorNames: AccentColor[];
  accentColor: AccentColor;
  setAccentColor: (accentColor: AccentColor) => void;
};

const DEFAULT_ACCENT_COLOR: AccentColor = "grey";

export const useAccentColor = create<AccentColorState>((set) => ({
  accentColorNames,
  accentColor: DEFAULT_ACCENT_COLOR,
  setAccentColor: (accentColor) => set({ accentColor }),
}));
