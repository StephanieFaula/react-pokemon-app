import React, { useState } from 'react';
import './PokemonCard.css';

const PokemonCard = (props) => {
    const [color, setColor] = useState(['#f5f5f5']);

    const showBorder = () => {
        setColor("#009688");
    }

    const hideBorder = () => {
        setColor("#f5f5f5")
    }
    return(
        <div> 
            <div className="col s6 m4">
                <div className="card horizontal" style={{borderColor: color}}   onMouseEnter={showBorder} onMouseLeave={hideBorder}>
                    <div className="card-image">
                        <img src={props.pokemon.picture} alt="pokemon"></img>
                    </div>

                    <div className="card-stacked">
                        <div className="card-content">
                            <strong>{props.pokemon.name}</strong>
                            <p>{props.pokemon.created.getDate()+'/'+(props.pokemon.created.getMonth()+1)+'/'+props.pokemon.created.getFullYear()}</p>


                            {props.pokemon.types.map(type => {
                                return(
                                    <div key={type}>
                                        {type === "Plante" &&
                                        <span className="chip green lighten-1">{type}</span>
                                        }
                                        {type === "Insecte" &&
                                        <span className="chip brown lighten-1">{type}</span>
                                        }
                                        {type === "Poison" &&
                                        <span className="chip deep-purple accent-1">{type}</span>
                                        }
                                        {type === "Vol" &&
                                        <span className="chip light-blue lighten-4">{type}</span>
                                        }
                                        {type === "Electrik" &&
                                        <span className="chip yellow lighten-1">{type}</span>
                                        }
                                        {type === "Feu" &&
                                        <span className="chip red lighten-1">{type}</span>
                                        }
                                        {type === "Eau" &&
                                        <span className="chip light-blue accent-4">{type}</span>
                                        }
                                        {type === "Normal" &&
                                        <span className="chip blue-grey lighten-5">{type}</span>
                                        }
                                        {type === "Fée" &&
                                        <span className="chip pink lighten-4">{type}</span>
                                        }
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;