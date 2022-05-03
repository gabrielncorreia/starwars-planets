import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [planetsBackup, setPlanetsBackup] = useState([]);
  const [name, setName] = useState('');
  const [newColumn, setNewColumn] = useState('population');
  const [newComparison, setNewComparison] = useState('maior que');
  const [newValue, setNewValue] = useState('0');
  const [numericValues, setFilterByNumericValues] = useState({
    filterByNumericValues: [],
  });
  const [columnFilter, setColumFilter] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(url).then((response) => response.json());
      setPlanets(results);
      setPlanetsBackup(results);
    }
    fetchData();
  }, []);

  const contextValue = {
    planets,
    planetsBackup,
    setPlanets,
    filterByName: {
      name,
    },
    numericValues,
    setFilterByNumericValues,
    setName,
    setNewColumn,
    setNewComparison,
    setNewValue,
    newColumn,
    newComparison,
    newValue,
    columnFilter,
    setColumFilter,
  };

  return (
    <AppContext.Provider value={ contextValue }>{children}</AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};
