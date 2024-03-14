import React from 'react';
import Image from 'next/image';
import Tab from '@mui/material/Tab';
import Link from 'next/link';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Search } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { cardContent } from './explore-card-data';
const labels = ['Buying', 'Renting', 'Selling', 'Researching'];
interface IPropsCard {
	image: string;
	heading: string;
	content: string;
	link?: string;
	linkName?: string;
}
const Card: React.FC<IPropsCard> = ({
	image,
	heading,
	content,
	link,
	linkName,
}) => {
	return (
		<>
			<div className="">
				<Image src={image} width={64} height={64} alt="card" />
				<h3>{heading}</h3>
				<p>{content}</p>
				<Link href={`${link}`}>{linkName}</Link>
			</div>
		</>
	);
};

const Explore = () => {
	const [value, setValue] = React.useState('0');
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	return (
		<>
			<div className="pl-10 mt-5">
				<h3 className="text-black font-bold text-xl">
					Explore all things property
				</h3>
				<TabContext value={value}>
					<TabList
						className=""
						onChange={handleChange}
						TabIndicatorProps={{
							style: {
								backgroundColor: 'white',
								display: 'none',
							},
						}}
						textColor="inherit"
						style={{
							marginTop: '1rem',
							height: '1rem',
						}}
						aria-label="Properties to call home">
						{labels.map((label, index) => (
							<Tab
								disableTouchRipple
								key={index}
								style={{
									fontWeight: 600,
									textTransform: 'capitalize',
									fontSize: '0.8rem',
									margin: '0rem .3rem',
									border: '1.5px solid black',
									padding: '0.5rem 0.75rem',
									borderRadius: 9999,
									whiteSpace: 'wrap',
									minWidth: 0,
									minHeight: 0,
									boxSizing: 'content-box',
								}}
								label={label}
								value={`${index}`}
							/>
						))}
					</TabList>
					{cardContent.map((card, index) => (
						<TabPanel key={index} value="0" className="w-full">
							<Card
								image={card.image}
								content={card.content}
								heading={card.heading}
								link={card.link}
								linkName={card.linkName}
							/>
						</TabPanel>
					))}
				</TabContext>
			</div>
		</>
	);
};
export default Explore;
