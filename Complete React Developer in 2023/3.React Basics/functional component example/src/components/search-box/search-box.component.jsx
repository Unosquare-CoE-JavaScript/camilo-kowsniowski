import React from 'react';

import './search-box.styles.css';
//destructuring function
const SearchBox = ({ className, placeholder, onChangeHandler }) => {
	return (
		<input
			className={`search-box ${className}`}
			type='search'
			placeholder={placeholder}
			onChange={onChangeHandler}
		/>
	);
};

export default SearchBox;
