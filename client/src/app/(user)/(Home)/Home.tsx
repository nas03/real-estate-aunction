'use client';
import React from 'react';
import Image from 'next/image';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Search } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import Explore from './Explore';
const labels = ['Buying', 'Renting', 'Selling', 'Researching'];

import SearchBar from './SearchBar';

const Card = () => {};
const onChange = (key: string) => {
	console.log(key);
};

const Home: React.FC = () => {
	const [value, setValue] = React.useState('0');
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	return (
		<>
			<div className="">
				<SearchBar />
				<Explore />
			</div>
		</>
	);
};
export default Home;
