import 'bulma/css/bulma.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Detail from './pages/Detail';
import SearchResult from './pages/SearchResult';
import Home from './pages/Home';
import Error404 from './pages/Errors/Error404';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact >
            <Home/>
          </Route>
          <Route path="/items" exact>
            <SearchResult/>
          </Route>
          <Route path="/items/:id">
            <Detail/>
          </Route>
          <Route path="*">
            <Error404/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
