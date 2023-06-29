import React from 'react';

import Card from '../card/CardComponent';

const CardList = (props) => {
	const { monsters } = props;
	return (
		<div className='w-4/6 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-5'>
			{monsters.map((monster) => {
				return (
					<Card monster={monster} key={monster.id}/>

				);
			})}
		</div>
	);
};

export default CardList;
