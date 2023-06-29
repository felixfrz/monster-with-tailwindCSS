import React from 'react';

const Card = ({ monster }) => {
	const {name, id, email} = monster;
	return (
		<div className='flex bg-teal-100 border-1 border-gray-500 rounded-md p-10  cursor-pointer antialiased justify-center hover:scale-105 transform translate-x-0 ease-out duration-300 '>
			<div>
				<img
					className='mb-8'
					src={`https://robohash.org/${id}&size=180x180`}
					alt={`monster ${name}`}
				/>
				<h2 className='text-2xl font-bold'>{name}</h2>
				<p className='text-gray-800 font-light'>{email}</p>
			</div>
		</div>
	);
};

export default Card;
