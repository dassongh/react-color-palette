import { generatePalette } from './service/colorHelpers';
// components
import Palette from './components/Palette';
import seedColors from './service/seedColors';

export default function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}
