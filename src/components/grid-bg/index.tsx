'use client';

import { useWindowSize } from '@/hooks/useWindowSize';
import { useLayoutEffect, useState } from 'react';

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
	const [windowWidth, windowHeight] = useWindowSize();
	const gridHeight = windowHeight / blockHeight + 1;
	const gridWidth = windowWidth / blockWidth + 1;
	const gridArray = Array.from({ length: height ?? gridHeight }, () =>
		Array.from({ length: width ?? gridWidth }),
	);

	return (
		<div className='absolute left-0 top-0 -z-10 flex max-h-full max-w-full flex-col overflow-hidden'>
			{gridArray.map((row, i) => (
				<div key={i} className='flex'>
					{row.map((_, j) => (
						<div
							key={`${i}_${j}`}
							className='border'
							style={{
								width: blockWidth,
								height: blockHeight,
							}}></div>
					))}
				</div>
			))}
		</div>
	);
};

export default BackgroundGrid;
