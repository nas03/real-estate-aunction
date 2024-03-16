interface IPropsCard {
	image: string;
	heading: string;
	content: string;
	link?: string;
	linkName?: string;
}

export const cardContent: IPropsCard[] = [
	{
		image: '/img/home/buying-1.png',
		heading: `Get estimated property prices with a realEstimate` + '\u2122',
		content:
			"See how much your property's worth whether you own it or want to buy it.",
		link: '#home',
		linkName: 'Check property values',
	},
	{
		image: '/img/home/buying-1.png',
		heading: 'Get estimated property prices with a realEstimate &trade;',
		content:
			"See how much your property's worth whether you own it or want to buy it.",
		link: '#home',
		linkName: 'Check property values',
	},
	{
		image: '/img/home/buying-1.png',
		heading: 'Get estimated property prices with a realEstimate &trade;',
		content:
			"See how much your property's worth whether you own it or want to buy it.",
		link: '#home',
		linkName: 'Check property values',
	},
];

interface NewsData {
	image: string;
	heading: string;
	readTime: number;
}

export const newsData: NewsData[] = [
	{
		image: '/img/home/news-1.jpeg',
		heading: "First homes coming soon at Yarraville's iconic former denim factory",
		readTime: 5,
	},
	{
		image: '/img/home/news-1.jpeg',
		heading: 'How to get the best mortgage deal',
		readTime: 5,
	},
	{
		image: '/img/home/news-1.jpeg',
		heading: 'How to get the best mortgage deal',
		readTime: 5,
	},
	{
		image: '/img/home/news-1.jpeg',
		heading: 'How to get the best mortgage deal',
		readTime: 5,
	},
	{
		image: '/img/home/news-1.jpeg',
		heading: 'How to get the best mortgage deal',
		readTime: 5,
	},
];
