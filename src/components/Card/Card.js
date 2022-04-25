import React from 'react';
import typeColors from '../../helpers/typeColors'
import './style.css';

function Card({ pokemon }) {
    console.log("🚀 ~ file: Card.js ~ line 3 ~ typeColors", pokemon.id)
    return (
        <>
            <div className="pokemon" style={{ backgroundColor: typeColors[pokemon.types[0].type.name] }}>
                <div className="img-container">
                    <img src={pokemon.sprites.front_default} alt="" />
                </div>
                <div className="info">
                <span className="number">{`#0`+pokemon.id}</span>
                    <div className="name">{pokemon.name}</div>
                    <small className="type">Type: <span>{pokemon.types[0].type.name }</span></small>
                </div>
            </div>
        </>
    );
}

export default Card;
