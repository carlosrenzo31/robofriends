import React from 'react';

const SearchBox = ({searchChange}) => {
	return(
		<div className='pa2'>
			<input 
			className='pa3 b--black bg-lightest-blue' 
			type='search' 
			placeholder='Search for a Robot'
			onChange={searchChange} 
			/>
		</div>
	);
}

export default SearchBox;