import React from 'react'
import Option from './Option'

const Options = ({ options, handleOnRemove }) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className='widget-header__title'>Your Options</h3>
        <button onClick={handleOnRemove} className="button button--link" disabled={options.length === 0}>
          Remove All
        </button>
      </div>
      <div className='widget'>
        {options.length > 0 ? (
        options.map((option, index) => (
          <div className='widget__option' key={`option-${index}`}>
            <Option optionText={option} />
            <button className="button button--link" type="button" onClick={() => handleOnRemove(option)}>
              remove
            </button>
          </div>
        ))
      ) : (
        <h1 className='widget__message'>There's no options right now ... try add one</h1>
      )}
      </div>
    </div>
  )
}

export default Options
