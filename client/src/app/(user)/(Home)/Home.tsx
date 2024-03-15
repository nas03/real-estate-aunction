'use client';
import React from 'react';
import Explore from './Explore';
import LatestNews from '@/app/(user)/(Home)/LatestNews';
import SearchBar from './SearchBar';

const Home: React.FC = () => {
	const [value, setValue] = React.useState('0');
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	return (
		<>
			<div className="
			">
				<SearchBar />
				<Explore />
				<LatestNews />
			</div>
		</>
	);
};
export default Home;
