import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Header() {
  const { setName } = useContext(AppContext);

  const handleChange = (event) => setName(event.target.value);

  return (
    <div className="header-div">
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        placeholder="Filtrar por nome"
        onChange={ handleChange }
        data-testid="name-filter"
      />
    </div>
  );
}
