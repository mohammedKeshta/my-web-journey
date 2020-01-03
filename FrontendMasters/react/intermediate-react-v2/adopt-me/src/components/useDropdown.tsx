import React, { useState, FunctionComponent, Dispatch } from 'react';

const useDropdown = (
  label: string,
  defaultState: string,
  options: string[]
) => {
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;
  const [state, setState] = useState(defaultState);
  const dropDown: FunctionComponent = () => (
    <div className="field">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <div className="control">
        <div className="select">
          <select
            data-testid={id}
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

  return [state, dropDown, setState] as [
    string,
    FunctionComponent,
    Dispatch<string>
  ];
};

export default useDropdown;
