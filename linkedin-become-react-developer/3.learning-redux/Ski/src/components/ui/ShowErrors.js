import React from 'react';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';

const ShowErrors = ({ errors = [], onClearError = f => f }) => (
  <div className="show-errors">
    {errors.length
      ? errors.map((message, i) => (
          <div key={i} className="error">
            <p>{message}</p>
            <FaWindowClose onClick={() => onClearError(i)} />
          </div>
        ))
      : null}
  </div>
);

ShowErrors.propTypes = {
  errors: PropTypes.array,
  onClearError: PropTypes.func
};

export default ShowErrors;
