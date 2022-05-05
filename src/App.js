import { generatePalette } from './service/colorHelpers';
// components
import Pallete from './components/Pallete';
import seedColors from './service/seedColors';

export default function App() {
  return (
    <div>
      <Pallete palette={generatePalette(seedColors[4])} />
    </div>
  );
}
