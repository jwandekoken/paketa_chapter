import { Switch, Route, Link } from 'react-router-dom';
import DarkModeCase from './pages/theme/DarkModeCase';
import UndoCase from './pages/undo/UndoCase';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/use-dark-mode">UseDarkMode case</Link>
          </li>
          <li>
            <Link to="/undo-case">Undo Hook Case</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/use-dark-mode">
          <DarkModeCase />
        </Route>
        <Route path="/undo-case">
          <UndoCase />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
