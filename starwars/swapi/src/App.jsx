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

  useEffect(() => {
    // data fetch of peoples
    async function fetchData(uri) {
      const response = await fetch(`https://swapi.dev/api/${uri}?format=json`);
      return response.json();
    }

    // const planets = await fetchData('planets');
    //   const people = await fetchData('people');

    async function fetchPlanets() {
      let res = await fetchData('planets');


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

    async function fetchPeople() {
      let res = await fetchData('people');
      let data = await res.json();
      setPeople(data.results);
      console.log('data', people);
    }

    fetchPlanets();
    fetchPeople();

    // call the Functions
    fetchPeople();
    fetchPlanets();
>
  }, []);

  return (
    <div className='App'>

      <header className='Background'>

        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Data' element={<People data={people} />} />
            <Route path='/people' element={<People data={people} />} />
            <Route path='/planets' element={<Planets data={planets} />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
