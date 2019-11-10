import React, { useState } from 'react';

const useDropdown = (label, defaultState, options) => {
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;
  const [state, setState] = useState(defaultState);
  const dropDown = () => (
    <div className="field">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <div className="control">
        <div className="select">
          <select
            value={state}
            onChange={e => setState(e.target.value)}
            onBlur={e => setState(e.target.value)}
            disabled={!options.length}
          >
            <option value="">All</option>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  return [state, dropDown, setState];
};

export default useDropdown;
