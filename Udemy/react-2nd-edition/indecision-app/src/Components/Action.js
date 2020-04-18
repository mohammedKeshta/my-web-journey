import React  from 'react'

const Action = (props) => {
  const { handlePick, hasOptions } = props;
  return (
    <div>
      <button onClick={handlePick} disabled={hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

export default Action;
