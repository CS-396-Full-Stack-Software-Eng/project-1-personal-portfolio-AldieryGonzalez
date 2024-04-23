/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
	reversed?: boolean;
};

const ProjectCard = ({ reversed, ...props }: ProjectCardProps) => {
	return (
		<div className='group relative z-10 overflow-hidden rounded-lg border-2 border-foreground/25 shadow-lg'>
			<Link className='absolute inset-0 z-10' href='#'>
				<span className='sr-only'>View Project</span>
			</Link>
			<Image
				alt='Project 1'
				className='h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105'
				height='300'
				src='/placeholder.jpg'
				style={{
					aspectRatio: '400/300',
					objectFit: 'cover',
				}}
				width='400'
			/>
			<div className='bg-white/50 p-4 dark:bg-foreground/5'>
				<h3 className='text-lg font-semibold md:text-xl'>
					Project Management Tool
				</h3>
				<p className='line-clamp-2 text-sm text-gray-500 dark:text-gray-400'>
					A comprehensive project management tool to help teams stay
					organized and on track.
				</p>
			</div>
		</div>
	);
};

export default ProjectCard;
