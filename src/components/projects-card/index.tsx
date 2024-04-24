import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ProjectCardProps = {
	img: string;
	gif?: string;
	title: string;
	link: string;
	children: React.ReactNode;
};

const ProjectCard = ({
	img,
	gif,
	title,
	link,
	children,
	...props
}: ProjectCardProps) => {
	return (
		<div className='group relative z-10 overflow-hidden rounded-lg border border-foreground/25 shadow-lg backdrop-blur-2xl'>
			<Link className='absolute inset-0 z-10' href={link}>
				<span className='sr-only'>View Project</span>
			</Link>
			<Image
				alt={title}
				className='h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105'
				height='300'
				src={img}
				style={{
					aspectRatio: '400/300',
					objectFit: 'cover',
				}}
				width='400'
			/>
			<div className='bg-white/50 p-4 dark:bg-foreground/5'>
				<h3 className='text-lg font-semibold md:text-xl'>{title}</h3>
				<div className='line-clamp-2 text-sm text-gray-500 dark:text-gray-400'>
					{children}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
