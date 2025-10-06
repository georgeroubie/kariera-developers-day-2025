import { FinalProject } from './final-project/final-project';
import { StarterProject } from './starter-project/starter-project';

const SHOW_STARTER = true;

function App() {
  if (SHOW_STARTER) {
    return <StarterProject />;
  }

  return <FinalProject />;
}

export default App;
