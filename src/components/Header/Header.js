import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Header = ({ baseAmount, changeAmount }) => (
  <div className="header">
    <h1>Converter</h1>
    <p className="header__para">
      <input
        className="header__input"
        type="number"
        value={baseAmount}
        onChange={(event) => changeAmount(event.target.value)}
      /> {baseAmount} euro
    </p>
  </div>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  changeAmount: PropTypes.func.isRequired,
};
export default Header;
