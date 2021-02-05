import 'bulma/css/bulma.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ProductDetail from './components/ProductDetails';
import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <Router>
      <div className="app">
        <SearchBox></SearchBox>
        <Switch>
          <Route path="/items" exact>
            <SearchResults />
          </Route>
          <Route path="/items/:id">
            <ProductDetail/>
          </Route>
        </Switch>
        <footer className="footer"></footer>
      </div>
    </Router>
  );
}

export default App;
