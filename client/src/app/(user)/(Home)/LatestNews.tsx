import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { newsData } from '@/app/(user)/(Home)/data';
interface ICarouselItemProps {
	image: string;
	heading: string;
	readTime: number;
}
const NewsCard: React.FC<ICarouselItemProps> = ({
	image,
	heading,
	readTime,
}) => {
	return (
		<>
			<div className="max-w-[12rem]">
				<Image
					src={image}
					width={200}
					height={100}
					className="w-full h-auto"
					alt="news-image"
				/>
				<h3 className="text-[0.8rem] leading-[1.5rem] font-medium line-clamp-2">
					{heading}
				</h3>
				<p className="text-[0.65rem] text-[#726E75] font-[400] leading-[1.5rem]">
					{readTime} mins read
				</p>
			</div>
		</>
	);
};
const LatestNews = () => {
	return (
		<>
			<div className="">
				<h2 className="font-bold text-xl pl-5">Latest property news</h2>
				<Carousel className="w-full mr-auto ml-auto max-w-[80vw]">
					<CarouselContent className="-ml-1">
						{newsData.map((news, index) => (
							<CarouselItem
								key={index}
								className="pl-1 md:basis-1/3 lg:basis-1/4">
								<div className="p-1">
									<NewsCard
										key={index}
										heading={news.heading}
										image={news.image}
										readTime={news.readTime}
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious
						variant={'outline'}
						style={{
							scale: 1.5,
						}}
					/>
					<CarouselNext
						style={{
							scale: 1.5,
						}}
					/>
				</Carousel>
			</div>
		</>
	);
};
export default LatestNews;
