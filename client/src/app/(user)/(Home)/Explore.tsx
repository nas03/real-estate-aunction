import React from 'react';
import Image from 'next/image';
import Tab from '@mui/material/Tab';
import Link from 'next/link';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { cardContent } from './data';
const labels = ['Buying', 'Renting', 'Selling', 'Researching'];
interface IPropsCard {
	image: string;
	heading: string;
	content: string;
	link?: string;
	linkName?: string;
}
const Cards: React.FC<IPropsCard> = ({
	image,
	heading,
	content,
	link,
	linkName,
}) => {
	return (
		<>
			<div className="border-[1.5px] max-w-[20rem] rounded-xl flex flex-col">
				<Image
					src={image}
					width={240}
					height={240}
					alt="card"
					className="w-28 h-28 ml-auto mr-auto"
				/>
				<div className="px-3 pb-3">
					<h3 className="font-[600] text-base">{heading}</h3>
					<p className="text-sm text-slate-600 py-3">{content}</p>
					<Link href={`${link}`} className=" font-bold text-sm text-[#00639E]">
						{linkName}
					</Link>
				</div>
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
			<div className="my-10 w-full flex flex-col justify-start">
				<h3 className=" ml-2 text-black font-bold w-fit text-xl">
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
							marginLeft: '8px'
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
									border: '2px solid black',
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
					{labels.map((label, index) => (
						<div className="flex flex-row w-fit" key={index}>
							{cardContent.map((card) => (
								<TabPanel
									key={card.heading}
									value={`${index}`}
									className="w-full p-3">
									<Cards
										image={card.image}
										content={card.content}
										heading={card.heading}
										link={card.link}
										linkName={card.linkName}
									/>
								</TabPanel>
							))}
						</div>
					))}
				</TabContext>
			</div>
		</>
	);
};
export default Explore;
