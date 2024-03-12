'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './NavBar.module.css';
import { motion, useAnimation } from 'framer-motion';
const NavBar = () => {
	const [section, setSection] = useState('');
	const [hover, setHover] = useState(false);
	const [openSideBar, setOpenSideBar] = useState(false);
	const animationControl = useAnimation();
	const animationVariants = {
		visible: {
			opacity: 1,
			x: 0, // Slide in from the right (adjust for other directions)
		},
		hidden: {
			opacity: 0,
			x: '-100%', // Slide out to the right (adjust for other directions)
		},
	};
	return (
		<>
			<header className="">
				<nav className=" ">
					<div className="flex justify-between p-[2%] border-b-2 w-screen items-center relative">
						<div className="flex flex-row items-center gap-4">
							<MenuIcon
								cursor="pointer"
								onClick={() => {
									setOpenSideBar(!openSideBar);
									animationControl.start(openSideBar ? 'visible' : 'hidden');
								}}
							/>
							<Link href={'#home'} className="flex flex-row items-center">
								<Image
									src={'/favicon.ico'}
									height={32}
									width={32}
									alt="logo.png"
								/>
								<p className="pl-2 font-[600]">RealEstate.com</p>
							</Link>
						</div>
						<div className="flex justify-center items-center font-[600] text-lg h-[100%] max-md:hidden">
							<Link
								href={'#home'}
								onClick={() => setSection('home')}
								className={`px-4 py-2 `}
								title="Home">
								<p
									className={`${
										section === 'home'
											? 'border-b-2 border-red-600'
											: !hover && 'hover:border-b-2  hover:border-b-red-600'
									}`}>
									Home
								</p>
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
								className={`px-4 py-2  font-[500] `}
								title="Sign In">
								Sign in
							</Link>
							<Link
								href={'#get-started'}
								onClick={() => setSection('get-started')}
								className={`px-6 py-2 bg-red-600 text-white rounded-md font-[500] `}
								title="Join">
								Join
							</Link>
						</div>
					</div>

					<motion.div
						animate={animationControl}
						variants={animationVariants}
						
						className={`w-[40%] bg-red-500 z-10 absolute h-screen
						 text-white`}>
						<ul className="">
							<li>
								<a href="">New Homes</a>
							</li>
							<li>
								<a href="">Find Agents</a>
							</li>
							<li>
								<a href="">Home loans</a>
							</li>
							<li>
								<a href="">News</a>
							</li>
						</ul>
					</motion.div>
				</nav>
			</header>
		</>
	);
};
export default NavBar;