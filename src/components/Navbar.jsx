import { useState } from 'react';
// components
import Slider from 'rc-slider';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// styles
import 'rc-slider/assets/index.css';
import '../styles/Navbar.css';

export default function Navbar({ level, changeLevel, handleChange }) {
  const [format, setFormat] = useState('hex');

  const setChange = e => {
    setFormat(e.target.value);
    handleChange(e.target.value);
  };

  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">reactcolorpicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
        </div>
      </div>
      <div clasname="select-container">
        <Select value={format} onChange={setChange}>
          <MenuItem value="hex">HEX - (#AA1923)</MenuItem>
          <MenuItem value="rgb">RGB - (1,2,3)</MenuItem>
          <MenuItem value="rgba">RGBA - (1,2,3,0.4)</MenuItem>
        </Select>
      </div>
    </header>
  );
}
