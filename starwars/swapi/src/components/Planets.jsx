import React from 'react';

const Planets = ({ data }) => {
  return (
    <>
      {data.map((planets, i) => {
        return (
          <div key={i}>
            <div>
              <h4 style={{ align: 'center' }}>Planets</h4>
            </div>
            <p>{planets.name}</p>
            {/* <h4>heights</h4>
            <p>{people.height}</p> */}
          </div>
        );
      })}
    </>
  );
};

export default Planets;
