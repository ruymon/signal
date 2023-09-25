const themeModes = ["light", "dark"];
const themeColors = ["zinc", "red", "orange", "green", "blue", "yellow", "violet"];

const availableThemes = themeModes.reduce((acc, mode) => {
  themeColors.forEach((color) => {
    acc.push(`${mode}-${color}`);
  });
  return acc;
}, [] as string[]);

export { availableThemes, themeColors, themeModes };
