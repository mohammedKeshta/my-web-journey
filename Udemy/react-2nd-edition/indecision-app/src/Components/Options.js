import React from 'react'
import Option from './Option'

const Options = ({ options, handleOnRemove }) => {
  return (
    <div>
      <button onClick={handleOnRemove} className="button button--link">
        Remove All
      </button>

      {options.length > 0 ? (
        options.map((option, index) => (
          <div style={{ display: 'flex' }} key={`option-${index}`}>
            <Option optionText={option} />
            <button className="button button--link" type="button" onClick={() => handleOnRemove(option)}>
              remove
            </button>
          </div>
        ))
      ) : (
        <h1>There's no options right now ... try add one</h1>
      )}
    </div>
  )
}

export default Options
