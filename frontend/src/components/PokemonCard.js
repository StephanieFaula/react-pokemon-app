import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PokemonCard.css';
import FormatDate from '../helpers/FormatDate';
import FormatType from '../helpers/FormatType';


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
                <Link to={`/pokemon/${props.pokemon.id}`}>
                    <div className="card horizontal" style={{borderColor: color}}   onMouseEnter={showBorder} onMouseLeave={hideBorder}>
                        <div className="card-image">
                            <img src={props.pokemon.picture} alt="pokemon"></img>
                        </div>

                        <div className="card-stacked">
                            <div className="card-content">
                                <strong>{props.pokemon.name}</strong>
                                <p>{FormatDate(props.pokemon.created)}</p>


                                {props.pokemon.types.map(type => {
                                    return(
                                        <div key={type}>
                                            {FormatType(type)}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default PokemonCard;