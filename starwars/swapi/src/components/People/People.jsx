import React from 'react';
import './People.css';

const People = ({ data }) => {
  return (
    <>
      {data.map((people) => {
        return (
          <>
            <div class='card-container'>
              <div class='cards' key={people.id}>
                <div class='card-title'>
                  <h2>Character Data</h2>
                </div>
                <div class='card-text'>
                  &nbsp;
                  <span class='card-text-data'>
                    <b>Name:</b> {people.name}
                  </span>
                </div>
                <div class='card-text'>
                  &nbsp;
                  <span class='card-text-data'>
                    <b>Height:</b> {people.height}
                  </span>
                </div>
                <div class='card-text'>
                  &nbsp;
                  <span>
                    <b>Mass:</b> {people.mass}
                  </span>
                </div>
                <div class='card-text'>
                  &nbsp;
                  <span>
                    <b>Hair Color:</b> {people.hair_color}
                  </span>
                </div>
                <div class='card-text'>
                  &nbsp;
                  <span>
                    <b>Gender:</b> {people.gender}
                  </span>
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
