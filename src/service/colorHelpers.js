import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const generatePalette = ({ id, emoji, paletteName, colors }) => {
  const newPalette = {
    paletteName,
    id,
    emoji,
    colors: {},
  };

  for (const level of levels) {
    newPalette.colors[level] = [];
  }

  for (const color of colors) {
    const scale = generateScale(color.color, 10).reverse();

    for (const i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: scale[i],
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)'),
      });
    }
  }

  return newPalette;
};

const getRange = hexColor => {
  const end = '#fff';

  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
};

function generateScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
}

export { generatePalette };
