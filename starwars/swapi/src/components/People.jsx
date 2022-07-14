import React from 'react';

const People = ({ data }) => {
  return (
    <>
      {data.map((characters, i) => {
        return (
          <>
            <div key={i}>
              <h4 class='names'>Name</h4>
              <p class='names'>{characters.name}</p>
              {/* <h4>heights</h4>
            <p>{people.height}</p> */}
            </div>
          </>
        );
      })}
    </>
  );
};

export default People;
