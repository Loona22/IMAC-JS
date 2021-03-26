/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import './ex4.css';
import Heros from './Heros';

export const tabHeros = (tab) => {
  <>
    <h1>Heroes</h1>
    <div>
      {
      tab.map(
        (ele) => <Heros name={ele.name} powerstats={ele.powerstats} height={ele.height} images={ele.images} />,
      )
    }
    </div>
  </>;
};

// eslint-disable-next-line import/prefer-default-export
export const ExerciseFourView = () => {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  });

  return (
    <p>Do something with superheroes in there</p>
  );
};
