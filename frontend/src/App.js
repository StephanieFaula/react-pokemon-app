import React from 'react';
import PokemonList from './pages/PokemonList';
import Header from './components/Header';
import Search from './components/Search';
const App = () => {


  return (
    <div>
      <Header />
      <div className="container">
        <Search />
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
