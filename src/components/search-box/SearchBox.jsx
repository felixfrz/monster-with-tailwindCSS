import React from 'react'

const SearchBox = ({ handleSearch, placeholder: placeholder, className }) => {
	return (
		<div>
			<input
				className={className}
				type='search'
				placeholder={placeholder}
				onChange={handleSearch}
			/>
		</div>
	);
};

export default SearchBox
