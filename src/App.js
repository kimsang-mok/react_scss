import './App.scss';
import Navigation from './components/Navigation';
import FreeItems from './components/Rewards/FreeItems';
import EarnStars from './components/Rewards/EarnStars';
import LinkDelta from './components/bootstrap_components/LinkDelta';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <FreeItems />
      <EarnStars />
      <LinkDelta />
    </div>
  );
}

export default App;
