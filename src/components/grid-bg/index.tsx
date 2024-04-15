'use client';

import { useParentSize } from '@/hooks/useParentSize';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useRef } from 'react';

type BackgroundGridProps = {
	blockWidth?: number;
	blockHeight?: number;
	width?: number;
	height?: number;
	fullBackground?: boolean;
};

const BackgroundGrid = ({
	width,
	height,
	blockWidth = 80,
	blockHeight = 80,
	fullBackground = true,
	...props
}: BackgroundGridProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const [parentWidth, parentHeight] = useParentSize(ref, 2);
	const gridHeight = Math.ceil(parentHeight / blockHeight);
	const gridWidth = Math.ceil(parentWidth / blockWidth);
	const gridArray = Array.from({ length: height ?? gridHeight }, () =>
		Array.from({ length: width ?? gridWidth }),
	);

	const { resolvedTheme } = useTheme();
	const uniqueCoordinates = new Set<string>();

	while (uniqueCoordinates.size < 6 && gridArray.length) {
		const randomRow = Math.floor(Math.random() * gridArray.length);
		const randomColumn = Math.floor(Math.random() * gridArray[0].length);
		const coordinate = `${randomRow}_${randomColumn}`;
		uniqueCoordinates.add(coordinate);
	}
	const coordinatesArray = Array.from(uniqueCoordinates);
	console.log(coordinatesArray);
	return (
		<div
			className='radial-g absolute left-0 top-0 flex max-h-full max-w-full flex-col overflow-hidden'
			ref={ref}>
			{gridArray.map((row, i) => (
				<div key={i} className='flex'>
					{row.map((_, j) => {
						const coord = `${i}_${j}`;
						const buttonIndex = coordinatesArray.indexOf(coord);
						if (buttonIndex !== -1) {
							return (
								<motion.button
									key={`${i}_${j}`}
									className='cursor-pointer border border-foreground/5 focus:z-20 focus:outline-dotted focus:outline-4 focus:outline-red-500'
									whileHover={{
										backgroundColor:
											resolvedTheme === 'light'
												? 'rgba(255,210,201)'
												: 'rgba(44, 46, 36)',
									}}
									transition={{
										ease: 'easeOut',
										duration: 0.25,
									}}
									style={{
										width: blockWidth,
										height: blockHeight,
										backgroundColor:
											resolvedTheme === 'light'
												? 'rgba(255,238,229)'
												: 'rgba(12, 15, 26)',
									}}
								/>
							);
						}
						return (
							<motion.div
								key={`${i}_${j}`}
								className='border border-foreground/5'
								whileHover={{
									backgroundColor:
										resolvedTheme === 'light'
											? 'rgba(230,230,230)'
											: 'rgba(34, 39, 46)',
								}}
								transition={{ ease: 'easeOut', duration: 0.25 }}
								style={{
									width: blockWidth,
									height: blockHeight,
									backgroundColor:
										resolvedTheme === 'light'
											? 'rgba(251,247,245)'
											: 'rgba(13, 17, 22)',
								}}
							/>
						);
					})}
				</div>
			))}
		</div>
	);
};

export default BackgroundGrid;
