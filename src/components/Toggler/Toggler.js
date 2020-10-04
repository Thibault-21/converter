import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Toggler = ({ toggle, isOpen }) => {
  const togglerClassName = isOpen ? 'toggle toggle__is-open' : 'toggle';
  return (
    <button
      className={togglerClassName}
      type="button"
      // pour tester onClick={() => console.log('test')}
      onClick={toggle}
    > =
    </button>
  );
};

Toggler.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
export default Toggler;
