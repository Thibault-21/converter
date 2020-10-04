import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Display = ({ value, currency }) => (
  <div className="display">
    <div>
      <h1 className="display__h1">{value}</h1><br />
      <h3 className="display__h3">{currency}</h3>
    </div>
    {/* {datas.map((data) => <div><h1>{data}</h1><h3>{data.name}</h3></div>)} */}
  </div>
);

Display.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
export default Display;
