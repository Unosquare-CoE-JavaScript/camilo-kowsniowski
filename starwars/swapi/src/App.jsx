import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import People from './components/People/People';
import Planets from './components/Planets/Planets';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [infoData, infoSetData] = useState([]);
  // const [loading, setLoading] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await fetch('https://swapi.dev/api/?format=json');
      let data = await res.json();
      infoSetData(data.info);
      console.log('info', data);
    }
    // data fetch of peoples
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
    fetchData();
    fetchPeople();
    fetchPlanets();
  }, []);

  return (
    <div className='App'>
      <header class='Background'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home data={infoData} />} />
            <Route path='/people' element={<People data={people} />} />
            <Route path='/planets' element={<Planets data={planets} />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
