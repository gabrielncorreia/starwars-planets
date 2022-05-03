import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

export default function Table() {
  const {
    planets,
    filterByName: { name },
    setPlanets,
    columnFilter,
    numericValues: { filterByNumericValues },
    setColumFilter,
  } = useContext(AppContext);

  function handleDelete(value) {
    return columnFilter.filter((column) => column !== value);
  }

  useEffect(() => {
    if (filterByNumericValues.length > 0) {
      // console.log(filterByNumericValues[0]);
      const { column, comparison, value } = filterByNumericValues[0];
      // console.log(`Column: ${column}`);
      if (comparison === 'maior que') {
        const filteredPlanets = planets.filter(
          (planet) => Number(planet[column]) > Number(value),
        );
        // console.log(filteredPlanets);
        setPlanets(filteredPlanets);
        setColumFilter(handleDelete(column));
      }
      if (comparison === 'menor que') {
        const filteredPlanets = planets.filter(
          (planet) => Number(planet[column]) < Number(value),
        );
        // console.log(filteredPlanets);
        setPlanets(filteredPlanets);
      }
      if (comparison === 'igual a') {
        const filteredPlanets = planets.filter(
          (planet) => Number(planet[column]) === Number(value),
        );
        // console.log(filteredPlanets);
        setPlanets(filteredPlanets);
      }
    }
  }, [filterByNumericValues]);

  // function handleFilter() {

  // }

  return (
    <div>
      <table>
        <thead>
          <tr>
            {planets.length > 0
              && Object.keys(planets[0]).filter((key) => key !== 'residents')
                .map((key) => <th key={ key }>{key.replace('_', ' ')}</th>)}
          </tr>
        </thead>
        <tbody>
          {planets.length > 0
            && (
              planets.filter((planet) => planet.name.includes(name))
                .map((planet) => (
                  <tr key={ planet.name }>
                    <td>{planet.name}</td>
                    <td>{planet.rotation_period}</td>
                    <td>{planet.orbital_period}</td>
                    <td>{planet.diameter}</td>
                    <td>{planet.climate}</td>
                    <td>{planet.gravity}</td>
                    <td>{planet.terrain}</td>
                    <td>{planet.surface_water}</td>
                    <td>{planet.population}</td>
                    <td>{planet.films.length}</td>
                    <td>{planet.created}</td>
                    <td>{planet.edited}</td>
                    <td>{planet.url}</td>
                  </tr>
                ))
            )}
        </tbody>
      </table>
    </div>
  );
}
