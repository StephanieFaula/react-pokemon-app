import React from 'react';

const FormatType = (type) => {
    return( 
        <span key={type}>
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
        </span>
    );
}

export default FormatType;
