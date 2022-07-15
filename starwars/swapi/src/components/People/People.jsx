import React from 'react';
import './People.css';

const People = ({ data }) => {
  return (
    <>
      {data.map((people, i) => {
        return (
          <>
            <div class='card-container'>
              <div class='cards' key={i}>
                <div class='card-title'>
                  <h4>Character Data</h4>
                </div>
                <div class='card-text'>
                  {' '}
                  <span class='card-text-data'>Name: {people.name}</span>
                </div>
                <div class='card-text'>
                  {' '}
                  <span class='card-text-data'>Height: {people.height}</span>
                </div>
                <div class='card-text'>
                  {' '}
                  <span>Mass: {people.mass}</span>
                </div>
                <div class='card-text'>
                  {' '}
                  <span>Hair Color: {people.hair_color}</span>
                </div>
                <div class='card-text'>
                  {' '}
                  <span>Gender: {people.gender}</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default People;
