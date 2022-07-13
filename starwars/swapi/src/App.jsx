import React, { useState, useEffect } from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    // data fetch opf peoples
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
    }
    // data fetch of planets
    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
    }

    // call the Functions
    fetchPeople();
    fetchPlanets();
  }, []);

  return (
    <div className='App'>
      <header className='Background'>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/people' element={<People data={people} />} />
            <Route path='/planets' element={<Planets data={planets} />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
