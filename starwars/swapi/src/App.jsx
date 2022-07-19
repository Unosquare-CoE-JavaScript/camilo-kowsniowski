import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import People from './components/People/People';
import Planets from './components/Planets/Planets';

function App() {
  // const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [Data, setFecthData] = useState([]);
  // const [loading, setLoading] = useState([]);

  useEffect(() => {
    // data fetch of peoples
    async function fetchData() {
      let baseName = await fetch('https://swapi.dev/api');
      let resPeople = await fetch(baseName + 'people/?format=json');
      let resPlanets = await fetch(baseName + 'planets/?format=json');
      let data1 = await resPeople.json();
      let data2 = await resPlanets.json();

      setFecthData(data1.results);
      setFecthData(data2.results);
    }
    // data fetch of planets
    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
    }

    // call the Functions

    fetchData();
    fetchPlanets();
  }, []);

  return (
    <div className='App'>
      <header class='Background'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Data' element={<People data={Data} />} />
            <Route path='/planets' element={<Planets data={planets} />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
