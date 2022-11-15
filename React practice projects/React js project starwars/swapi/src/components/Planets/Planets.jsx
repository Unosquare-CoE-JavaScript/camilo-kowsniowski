import React from 'react';
import './Planets.css';

const Planets = ({ data }) => {
  return (
    <>
      {data.map((planet) => {
        return (
          <>
            <div className='card-container'>
              <div className='cards' key={planet.id}>
                <div className='card-title'>
                  <h4>Planets Data</h4>
                </div>
                <div className='card-text'>
                  &nbsp;
                  <span className='card-text-data'>Name: {planet.name}</span>
                </div>
                <div className='card-text'>
                  &nbsp;
                  <span className='card-text-data'>
                    Rotation Period: {planet.rotation_period}
                  </span>
                </div>
                <div className='card-text'>
                  &nbsp;
                  <span>Climate: {planet.climate}</span>
                </div>
                <div className='card-text'>
                  &nbsp;
                  <span>Terrain: {planet.terrain}</span>
                </div>
                <div className='card-text'>
                  &nbsp;
                  <span>Population: {planet.population}</span>
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
