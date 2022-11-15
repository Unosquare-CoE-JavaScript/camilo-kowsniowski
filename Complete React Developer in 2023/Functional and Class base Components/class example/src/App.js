import { Component } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

// class example

class App extends Component {
	// constructor

	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	// component mount  fetch data from api
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) =>
				this.setState(
					() => {
						return { monsters: users };
					},
					() => {
						// console.log(this.state);
					}
				)
			);
	}
	// change method function
	onSearChange = (event) => {
		// case sensitive fix
		const searchField = event.target.value.toLocaleLowerCase();
		this.setState(() => {
			return { searchField };
		});
	};
	// render component
	render() {
		// console.log('render');

		const { monsters, searchField } = this.state;
		const { onSearChange } = this;
		// inside of the render to store the original array
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		return (
			<div className='App'>
				<h1 className='title'>Monsters Rolodex</h1>
				<SearchBox
					className='monsters-search-box'
					onChangehandler={onSearChange}
					placeholder='Search Monsters'
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}
export default App;
