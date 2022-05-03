import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Filter() {
  const {
    setNewColumn,
    setNewComparison,
    setNewValue,
    newColumn,
    newComparison,
    newValue,
    numericValues: { filterByNumericValues },
    setFilterByNumericValues,
    columnFilter,
  } = useContext(AppContext);

  function handleInputNumber({ target: { value } }) {
    setNewValue(value);
  }

  const handleClick = () => {
    setFilterByNumericValues({
      filterByNumericValues: [
        ...filterByNumericValues,
        {
          column: newColumn,
          comparison: newComparison,
          value: newValue,
        },
      ],
    });
  };

  // useEffect(() => {
  //   console.log(filterByNumericValues);
  // }, [filterByNumericValues]);

  return (
    <div>
      <div className="filter-div">
        <select
          name=""
          id=""
          data-testid="column-filter"
          onChange={ ({ target }) => setNewColumn(target.value) }
        >
          {columnFilter.map((column) => (
            <option key={ column } value={ column }>{column}</option>
          ))}
        </select>
        <select
          name=""
          id=""
          data-testid="comparison-filter"
          onChange={ ({ target }) => setNewComparison(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
        <input
          type="number"
          value={ newValue }
          id=""
          data-testid="value-filter"
          onChange={ handleInputNumber }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleClick() }
        >
          Filtrar
        </button>
        <h5>Ordenar</h5>
        <select name="" id="">
          <option value="">Population</option>
        </select>
        <label htmlFor="ascendente">
          Ascendente
          <input type="radio" name="asc-desc" id="ascendente" />
        </label>
        <label htmlFor="descendente">
          Descendente
          <input type="radio" name="asc-desc" id="descendente" />
        </label>
        <button type="button">Ordenar</button>
      </div>
    </div>
  );
}
