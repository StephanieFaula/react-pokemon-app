import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonList from './pages/PokemonList';
import Header from './components/Header';
import PokemonDetail from './pages/PokemonDetail';
const App = () => {

  

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={PokemonList}/>
          <Route exact path="/pokemon/:id" component={PokemonDetail}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
