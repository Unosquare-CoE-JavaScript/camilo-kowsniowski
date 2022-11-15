import React from 'react';
import '../components/Planets.css';

const Planets = ({ data }) => {
  return (
    <>
      {data.map((planets, i) => {
        return (
          <>
            <div class='card-container'>
              <div class='cards' key={i}>
                <div class='card-title'>
                  <h4>Planets Data</h4>
                </div>
                <div class='card-text'>
                  {' '}
                  <span class='card-text-data'>Name: {planets.name}</span>
                </div>
                <div class='card-text'>
                  {' '}
                  <span class='card-text-data'>
                    Rotation Period: {planets.rotation_period}
                  </span>
                </div>
                <div class='card-text'>
                  {' '}
                  <span>Climate: {planets.climate}</span>
                </div>
                <div class='card-text'>
                  {' '}
                  <span>Terrain: {planets.terrain}</span>
                </div>
                <div class='card-text'>
                  {' '}
                  <span>Population: {planets.population}</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Planets;
