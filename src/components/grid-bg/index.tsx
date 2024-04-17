'use client';

import { useParentSize } from '@/hooks/useParentSize';
import { useMemo, useRef, useState } from 'react';
import GridRow from './molecules/grid-row';

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
	const [coordinatesArray, setCoordinatesArray] = useState<string[]>([]);
	const [gridArray, setGridArray] = useState<number[][]>([]);
	const [selected, setSelected] = useState<number[]>([]);
	const ref = useRef<HTMLDivElement>(null);
	const [parentWidth, parentHeight] = useParentSize(ref, 2);
	const gridHeight = Math.ceil(parentHeight / blockHeight);
	const gridWidth = Math.ceil(parentWidth / blockWidth);

	const message = 'HELLO';
	useMemo(() => {
		const grid = Array.from({ length: gridHeight }).map(() =>
			Array.from({ length: gridWidth }).map(() => 0),
		);
		setGridArray(grid);
		const uniqueCoordinates = new Set<string>();
		while (uniqueCoordinates.size < message.length && grid.length) {
			const randomRow = Math.floor(Math.random() * grid.length);
			const randomColumn = Math.floor(Math.random() * grid[0].length);
			const coordinate = `${randomRow}_${randomColumn}`;
			uniqueCoordinates.add(coordinate);
		}
		setCoordinatesArray(Array.from(uniqueCoordinates));
	}, [gridHeight, gridWidth]);

	return (
		<div
			className='absolute left-0 top-0 flex max-h-full max-w-full flex-col overflow-hidden'
			ref={ref}>
			{gridArray.map((row, i) => (
				<GridRow
					key={i}
					row={row}
					i={i}
					blockWidth={blockWidth}
					blockHeight={blockHeight}
					coordinatesArray={coordinatesArray}
					message={message}
					selected={selected}
					setSelected={setSelected}
				/>
			))}
		</div>
	);
};

export default BackgroundGrid;
