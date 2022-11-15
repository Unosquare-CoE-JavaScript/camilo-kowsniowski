import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
	// useState use:
	const [searchField, setSearchField] = useState(''); // [value, setValue]
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	// useEffect use (fix side effects):
	//this hooks helps to no re-render the component
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	// filtered monsters function:
	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monsters) => {
			return monsters.name.toLocaleLowerCase().includes(searchField);
		});

		setFilteredMonsters(newFilteredMonsters);
		console.log('effect is firing');
	}, [monsters, searchField]);

	//lower case change function:
	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='App'>
			<h1 className='title'>Monsters Rolodex</h1>
			<SearchBox
				className='monsters-search-box'
				onChangeHandler={onSearchChange}
				placeholder='Search Monsters'
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
