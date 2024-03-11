'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const NavBar = () => {
	const [section, setSection] = useState('');
	const [hover, setHover] = useState(false);
	return (
		<>
			<header className="">
				<nav className="flex justify-between p-[2%] border-b-2 w-screen items-center">
					<Link href={'#home'} className="flex flex-row items-center">
						<Image src={'/favicon.ico'} height={32} width={32} alt="logo.png" />
						<p className="pl-2 font-bold">RealEstate.com</p>
					</Link>
					<div className="flex justify-center items-center font-[600] text-lg h-[100%]">
						<Link
							href={'#home'}
							onClick={() => setSection('home')}
							className={`px-4 py-2 ${
								section === 'home'
									? 'border-b-2 border-red-600'
									: !hover && 'hover:border-b-2  hover:border-b-red-600'
							}`}
							title="Home">
							Home
						</Link>
						<Link
							href={'#about-us'}
							onClick={() => setSection('about-us')}
							className={`px-4 py-2 ${
								section === 'about-us'
									? 'border-b-2 border-red-600'
									: !hover && 'hover:border-b-2 hover:border-red-600'
							}`}
							title="About Us">
							About Us
						</Link>
						<Link
							href={'#services'}
							onClick={() => setSection('services')}
							className={`px-4 py-2 ${
								section === 'services'
									? 'border-b-2 border-red-600'
									: !hover && 'hover:border-b-2 hover:border-red-600'
							}`}
							title="Services">
							Services
						</Link>
						<Link
							href={'#get-started'}
							onClick={() => setSection('get-started')}
							className={`px-4 py-2 ${
								section === 'get-started'
									? 'border-b-2 border-red-600'
									: !hover
									? 'hover:border-b-2 hover:border-red-600'
									: ''
							}`}
							title="Get Started">
							Get Started
						</Link>
					</div>
					<div className="flex flex-row">
						<Link
							href={'#get-started'}
							onClick={() => setSection('get-started')}
							className={`px-4 py-2  font-[600] `}
							title="Sign In">
							Sign In
						</Link>
						<Link
							href={'#get-started'}
							onClick={() => setSection('get-started')}
							className={`px-6 py-2 bg-red-600 text-white rounded-md font-[600] `}
							title="Join">
							Join
						</Link>
					</div>
				</nav>
			</header>
		</>
	);
};
export default NavBar;
