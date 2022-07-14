import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';

import People from './components/People';
import Planets from './components/Planets';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  // const [loading, setLoading] = useState([]);

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
        <Router>
          <Navbar />
          <Routes>
            <Route path='/people' element={<People data={people} />} />
            <Route path='/planets' element={<Planets data={planets} />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;