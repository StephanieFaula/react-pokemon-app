import React, { useState, useEffect } from 'react';
import Pokemons from '../models/mock-pokemon';
import { Link } from 'react-router-dom';
import FormatDate from '../helpers/FormatDate';
import FormatType from '../helpers/FormatType';

const PokemonDetail = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        Pokemons.forEach(poke => {
            if(props.match.params.id === poke.id.toString()) {
                setPokemon(poke);
            }
        })
    }, [props.match.params.id]);

    console.log(pokemon.created);
    return(
        <div className="row">
            <h1 className="center">{ pokemon.name }</h1>
            <div className="col s12 m8 offset-m2">
                <div className="card">
                    <div className="card-image">
                        <img src={pokemon.picture} alt={pokemon.name} style={{ width: '250px', margin: '0px auto' }}/>
                    </div>

                    {pokemon.types && pokemon.created &&
                    <div className="card-stacked">
                        <div className="card-content">
                            <table className="bordered striped">
                                <tbody>
                                <tr> 
                                    <td>Nom</td> 
                                    <td><strong>{ pokemon.name }</strong></td> 
                                </tr>
                                <tr> 
                                    <td>Points de vie</td> 
                                    <td><strong>{ pokemon.hp }</strong></td> 
                                </tr> 
                                <tr> 
                                    <td>Dégâts</td> 
                                    <td><strong>{ pokemon.cp }</strong></td> 
                                </tr> 
                                <tr> 
                                    <td>Types</td> 
                                    
                                    <td>
                                        {pokemon.types.map(type => {
                                        return(
                                            <span key={type}>
                                                {FormatType(type)}
                                            </span>
                                            );
                                        })}
                                    </td> 
                                </tr> 
                                <tr> 
                                    <td>Date de création</td> 
                                    <td>{FormatDate(pokemon.created)}</td> 
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-action">
                            <Link to="/">Retour</Link>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default PokemonDetail;