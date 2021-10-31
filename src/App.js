import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import SearchList from './components/Search/SearchList';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
        <Route extact path="/category/:categoryId">
          <ItemListContainer />
        </Route>
        <Route path="/search/:query">
          <SearchList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
