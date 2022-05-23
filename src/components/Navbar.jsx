import { useState } from 'react';
// components
import Slider from 'rc-slider';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// styles
import 'rc-slider/assets/index.css';
import '../styles/Navbar.css';

export default function Navbar({ level, changeLevel, handleChange }) {
  const [format, setFormat] = useState('hex');
  const [open, setOpen] = useState(false);

  const handleFormatChange = e => {
    setFormat(e.target.value);
    handleChange(e.target.value);
    setOpen(true);
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
      <div className="select-container">
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX - (#AA1923)</MenuItem>
          <MenuItem value="rgb">RGB - (1,2,3)</MenuItem>
          <MenuItem value="rgba">RGBA - (1,2,3,0.4)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={3000}
        message={<span id="message-id">Format changed to {format.toUpperCase()}</span>}
        ContentProps={{ 'aria-describedby': 'message-id' }}
        onClose={() => {
          setOpen(false);
        }}
        action={[
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </header>
  );
}
