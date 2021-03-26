/* eslint-disable */
import React from 'react';

/* On passe en argument les valeurs du tableau json que l'on souhaite */

const Heros = ({ name, powerstats, height, images}) => {
  <div>
    <h2>{name}</h2>
    <ul>
    {
      Object.key(powerstats).map(k => <li>{k} : {powerstats[k]}</li>)
    }
    </ul>
    <p>{height}</p>
    <img src={images.md} />
  </div>;
};

export default Heros;
/* eslint-disable */

