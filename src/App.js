import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={ItemDetailContainer} />
      </Switch>
    </Router>
  );
}

export default App;
