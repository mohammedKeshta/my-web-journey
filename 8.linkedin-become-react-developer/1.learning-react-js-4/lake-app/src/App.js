import React from "react";

const Lake = ({ name }) => <h1>{name}</h1>;

const App = ({ lakes }) => {
  return (
    <div>
      <ul>
        {lakes.map(lake => (
          <li key={lake.id}>
            {lake.name} | trailhead: {lake.trailhead}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
