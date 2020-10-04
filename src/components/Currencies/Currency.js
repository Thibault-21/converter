import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ name, changeCurrency }) => (
  <li className="currencies__item" onClick={() => changeCurrency(name)}>{name}</li>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  changeCurrency: PropTypes.func.isRequired,
};
export default Currency;
/*
On aurait pu faire avec un retour explicite
const Currency = ({ name, changeCurrency }) => {
  const handleOnClick = () => {
    changeCurrency(name);
  };

  return (
    <li className="currency" onClick={handleOnClick}>{name}</li>
  );
};

// on avait la possibilité de passer directement la prop en callback du on Click,
// il faut cependant passer cette fonction dans fonction anonyme pour pouvoir passer un argument
const Currency = ({ name, changeCurrency }) => );
  changeCurrency: PropTypes.func.isRequired,
};
*/
