import React, { Component } from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

class CardList extends Component {
	render() {
		// moving the list of monsters to a separate component
		console.log('render from card list');

		const { monsters } = this.props;

		return (
			<div className='card-list'>
				{monsters.map((monster) => {
					return <Card monster={monster} />;
				})}
			</div>
		);
	}
}

export default CardList;
