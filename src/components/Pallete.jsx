import { useState } from 'react';
// components
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
// styles
import '../styles/Pallete.css';
import 'rc-slider/assets/index.css';

export default function Pallete({ palette }) {
  const [level, setLevel] = useState(500);

  const colorBoxes = palette.colors[level].map(color => <ColorBox background={color.hex} name={color.name} />);

  return (
    <div className="Pallete">
      <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={setLevel} />
      <div className="Pallete-colors">{colorBoxes}</div>
    </div>
  );
}
