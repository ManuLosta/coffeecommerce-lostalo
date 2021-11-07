import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import SearchList from './components/Search/SearchList';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Router>
      <CartProvider>
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
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;
