import React from 'react';
import PropTypes from 'prop-types';
import { FaMountain, FaSnowflake } from 'react-icons/fa';

const SkiDayRow = ({ resort, date, powder, backcountry, onRemoveDay = f => f }) => (
  <tr onDoubleClick={() => onRemoveDay(date)}>
    <td>{date}</td>
    <td>{resort}</td>
    <td>{powder ? <FaSnowflake /> : null}</td>
    <td>{backcountry ? <FaMountain /> : null}</td>
  </tr>
);

SkiDayRow.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool,
  backcountry: PropTypes.bool,
  onRemoveDay: PropTypes.func
};

export default SkiDayRow;
