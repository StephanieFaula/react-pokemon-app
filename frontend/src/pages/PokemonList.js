import React, { useState, useEffect } from 'react';
import Pokemons from '../models/mock-pokemon';
import PokemonCard from '../components/PokemonCard';
import Search from '../components/Search';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        setPokemons(Pokemons);
    }, []);

    return(
        <div className="container">
            <Search />
            <div className="row">
                {pokemons.map(pokemon => {
                    return(
                        <div key={pokemon.name}>
                            <PokemonCard pokemon={pokemon} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PokemonList;