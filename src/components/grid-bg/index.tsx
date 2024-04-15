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
	blockWidth = 40,
	blockHeight = 40,
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
	return (
		<div
			className='radial-g absolute left-0 top-0 flex max-h-full max-w-full flex-col overflow-hidden'
			ref={ref}>
			{gridArray.map((row, i) => (
				<div key={i} className='flex'>
					{row.map((_, j) => (
						<motion.div
							key={`${i}_${j}`}
							className='border border-foreground/5'
							whileHover={{
								backgroundColor:
									resolvedTheme === 'light'
										? 'rgba(251,247,245)'
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
					))}
				</div>
			))}
		</div>
	);
};

export default BackgroundGrid;
