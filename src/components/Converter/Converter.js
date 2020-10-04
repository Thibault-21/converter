import React, { Component } from 'react';
import './styles.scss';

import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Display from '../Display/Display';
import Toggler from '../Toggler/Toggler';

import data from '../../data/currencies';

class Converter extends Component {
  // grâce au plugin de Babel class properties on peut enlever le constructor
  // et definir des propriétés de class directement à al racine de la class
 state = {
   open: true,
   baseAmount: 1,
   currency: 'United States Dollar',
   search: '',
 }
 //  les cycles de vie permettent d'intéragir avec l'exterieur de l'application.
 // C'est dans ses methodes que l'on va pouvoir accès au DOM et faire des requêtes aux API
 // mettre en place les listeners;

 /**
  * @function componentDidMount permet de rendre le composant
  * @returns retourne la un board effect pour changer le titre du document/page
  */
 componentDidMount = () => {
   console.log('componentDidMount 1er rendu');
   this.changeDocumentTitleEffect();

   this.listener = document.addEventListener('keyup', (event) => {
     //  console.log(event.key);
     if (event.key === 'Escape') {
       this.toggle();
     }
   });
 }

 /**
  * @function componentDidUpdate permet de mettre à jour le composant
  * @returns retourne la un board effect pour changer le titre du document/page
  */
 componentDidUpdate = () => {
   console.log('componentDidUpdate mise à jour de Converter');
   this.changeDocumentTitleEffect();
 }

 /**
  * @function componentWillUnmount permet de détruire un composant
  */
 componentWillUnmount = () => {
 // console.log('componentWillUnmount ');
   this.listener = document.removeEventListener();
 }

 /**
  * // effet de board
  * @function changeDocumentTitleEffect permet un effet de board : changer le nom du document
  * @returns rien
  */
 changeDocumentTitleEffect = () => {
   const { currency } = this.state;
   document.title = `Euro to ${currency}`;
 };

 /**
  * toggle est une propriété de class
  * @function toggle permet de rendre la liste des currencies ou des les faire disparaître
  * @returns change l'état de la propriété open du state
  */
 toggle = () => {
 // une fonction arrow ne redéfinit pas le this
 // donc il correspondra à la class, son parent
   const { open } = this.state;
   // setState est la fonction qui va permettre de changer les valeurs du state
   // et va en informer react et opère donc un nouveau rendu
   this.setState({ open: !open });
 }

 /**
  * @function handler permet de changer la currency selectionnée
  * @param {name} correspond à la currency selectionné par l'utilisateur
  * @return change l'état du state de la propriété currency
  */
handler = (name) => {
  this.setState({ currency: name });
}

/**
 * @function SetSearch de faire une recherche de la currency en
 * fonction de la valeur écrite dans l'input
 * @param {value} value
 * @returns retourne rien mais change l'état du state
 */
// function en charge de modifier le state pour Search
setSearch = (value) => {
  // console.log(value);
  this.setState({ search: value });
}

/**
 * @function makeConversion permet de faire la conversion
 * @returns la conversion de la devise par rapport à {baseAmount} euro
 */
 makeConversion = () => {
   const { baseAmount, currency } = this.state;
   // on cherche la devise dans le tableau de données qui a
   //  le même nom que la devise dans notre state
   const foundCurrency = data.find(
     (currentCurrency) => currentCurrency.name === currency,
   );
   // const amountValue = parseFloat((foundCurrency.rate * baseAmount).toFixed(2), 10);
   const amountValue = Math.round(foundCurrency.rate * baseAmount * 100) / 100;
   return amountValue;
 }

 /**
  * @function getCurrenciesBySearch d'obtenir la currency que l'on cherche via filter
  * @returns la currency recherché
  */
getCurrenciesBySearch = () => {
  const { search } = this.state;
  let filteredCurrencies = data;

  filteredCurrencies = data.filter((currency) => currency.name
    .toLowerCase()
    .includes(search));
  return filteredCurrencies;
}

/**
 * @function changeTheBaseAmount permet de changer l'{amountBase}
 * @param {amount} amount valeur de l'input récupéré via les props
 * @returns change l'état du state : baseAmount
 */
changeTheBaseAmount = (amount) => {
  this.setState({ baseAmount: Number(amount) });
}

render() {
  const {
    open,
    baseAmount,
    currency,
    search,
  } = this.state;

  return (
    <div className="converter">
      <Header
        baseAmount={baseAmount}
        changeAmount={this.changeTheBaseAmount}
      />
      <Toggler
        isOpen={open}
        toggle={this.toggle}
      />
      {/* avec true les currencies s'affiche | avec false elles disparaissent */}
      {
        open &&
          <Currencies
            datas={this.getCurrenciesBySearch()}
            changeCurrency={this.handler}
            search={search}
            changeSearch={this.setSearch}
          />
       }
      <Display
        value={this.makeConversion()}
        currency={currency}
      />
    </div>
  );
}
}

export default Converter;
