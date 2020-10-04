import React from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';
import './styles.scss';

const Currencies = ({
  datas,
  changeCurrency,
  search,
  changeSearch,
}) => (
  <div className="currencies">
    <input
      type="text"
      className="currencies__search"
      placeholder="Rechercher une devise"
      value={search}
      onChange={(event) => changeSearch(event.target.value)}
    />
    <h1 className="currencies__title">Currencies</h1>
    <ul className="currencies__liste scroller">
      {datas.map(
        (data) => (
          <Currency
            className="currencies__item"
            key={data.name}
            {...data}
            changeCurrency={changeCurrency}
          />
        ),
      )}
    </ul>
  </div>
);

Currencies.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }),
  ).isRequired,
  changeCurrency: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  changeSearch: PropTypes.func.isRequired,
};

export default Currencies;
