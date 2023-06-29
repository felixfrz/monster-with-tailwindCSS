import { useEffect, useState } from 'react';
import './index.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

const url = 'https://jsonplaceholder.typicode.com/users';
function App() {
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState('');

	const fetchData = async () => {
		const data = await fetch(url);
		if (data.status == 200) {
			const res = await data.json();
			setMonsters(res);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const filteredMonsters = monsters.filter((monster) =>
		monster.name.toLocaleLowerCase().includes(searchField)
	);

	const handleSearch = (e) => {
		setSearchField(e.target.value.toLocaleLowerCase());
	};
	return (
		<div className=''>
			<div className=' my-5'>
				<SearchBox
					handleSearch={handleSearch}
					placeholder='Search Monsters'
					className='rounded-lg appearance-none outline-none p-5 w-90 leading-7 mb-6'
				/>
			</div>
			<CardList monsters={filteredMonsters} />
		</div>
	);
}

export default App;
