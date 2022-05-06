import { useState } from 'react';
// components
import { CopyToClipboard } from 'react-copy-to-clipboard';
// styles
import '../styles/ColorBox.css';

export default function ColorBox({ background, name }) {
  const [copied, setCopied] = useState(false);

  const copiedParagraphs = ['Copied!', 'You got that!', 'Nice one!', 'Good choice!', 'Elegant!', 'I like that one!'];

  const returnParagraph = () => {
    const randomParagraph = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const random = randomParagraph(0, copiedParagraphs.length - 1);

    return copiedParagraphs[random];
  };

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className="ColorBox">
        <div style={{ background }} className={`copy-overlay ${copied && 'show'}`} />
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>{returnParagraph()}</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  );
}
