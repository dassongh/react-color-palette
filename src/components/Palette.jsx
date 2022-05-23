import { useState } from 'react';
// components
import ColorBox from './ColorBox';
import Navbar from './Navbar';
// styles
import '../styles/Palette.css';

export default function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const changeFormat = value => {
    setFormat(value);
  };

  const colorBoxes = palette.colors[level].map(color => <ColorBox background={color[format]} name={color.name} key={color.id} />);

  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={setLevel} handleChange={changeFormat} />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
    </div>
  );
}
