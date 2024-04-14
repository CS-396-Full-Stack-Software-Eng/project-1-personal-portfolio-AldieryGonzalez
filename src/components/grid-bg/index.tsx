'use client';

import { useParentSize } from '@/hooks/useParentSize';
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
	return (
		<div
			className='radial-g absolute left-0 top-0 flex max-h-full max-w-full flex-col overflow-hidden'
			ref={ref}>
			{gridArray.map((row, i) => (
				<div key={i} className='flex'>
					{row.map((_, j) => (
						<div
							key={`${i}_${j}`}
							className='border border-black/10 bg-blue-500/10 transition-all hover:bg-slate-500'
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
