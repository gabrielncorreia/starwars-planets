import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Header from './components/Header';
import Filter from './components/Filter';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <div>
        <Header />
        <Filter />
        <hr />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
