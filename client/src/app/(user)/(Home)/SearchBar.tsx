'use client';
import Image from 'next/image';
import React from 'react';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Search } from '@mui/icons-material';
import { useState, useEffect } from 'react';
const labels = ['Buy', 'Rent', 'Sold', 'Address', 'Agents'];
const SearchBar: React.FC = () => {
	const [value, setValue] = React.useState('0');
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	return (
		<>
			<div className="ml-auto mr-auto min-h-[16rem] lg:h-[20rem] md:w-[85%] flex flex-col items-center relative">
				<Image
					src={'/img/home/search-bg.png'}
					width={1600}
					height={900}
					alt="search-bg"
					className="absolute z-0 md:rounded-lg object-center object-cover h-full overflow-clip text-center "
				/>
				<div className="z-10">
					<p className=" font-bold text-xl mt-5 text-center">
						Properties to call home
					</p>
					<div className="bg-white px-10 rounded-lg mt-4" id="search">
						<TabContext value={value}>
							<TabList
								className="border-b-[1px] "
								onChange={handleChange}
								TabIndicatorProps={{
									style: {
										backgroundColor: 'red',
									},
								}}
								textColor="inherit"
								aria-label="Properties to call home">
								{labels.map((label, index) => (
									<Tab
										disableTouchRipple
										key={index}
										style={{
											fontWeight: 700,
											textTransform: 'capitalize',
											fontSize: '1rem',
											padding: '0 2rem',
										}}
										label={label}
										value={`${index}`}
									/>
								))}
							</TabList>

							<TabPanel value="0" className="w-full">
								<div className="flex flex-row w-full">
									<Search />
									<input
										type="text"
										name="Address"
										placeholder="Search by address"
										className="focus:outline-0 pl-2 flex-grow"
										id=""
									/>
								</div>
							</TabPanel>
							<TabPanel value="1">
								<div className="flex flex-row w-full">
									<Search />
									<input
										type="text"
										name="Address"
										placeholder="Search by address"
										className="focus:outline-0 pl-2 flex-grow"
										id=""
									/>
								</div>
							</TabPanel>
							<TabPanel value="2">
								<div className="flex flex-row w-full">
									<Search />
									<input
										type="text"
										name="Address"
										placeholder="Search by address"
										className="focus:outline-0 pl-2 flex-grow"
										id=""
									/>
								</div>
							</TabPanel>
						</TabContext>
					</div>
				</div>
			</div>
		</>
	);
};
export default SearchBar;
