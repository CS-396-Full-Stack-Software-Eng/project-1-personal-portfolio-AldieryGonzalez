'use client';

import { useParentSize } from '@/hooks/useParentSize';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { Shuffle } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import GridRow from './molecules/grid-row';

type BackgroundGridProps = {
	blockWidth?: number;
	blockHeight?: number;
	width?: number;
	height?: number;
};

const BackgroundGrid = ({
	width,
	height,
	blockWidth = 80,
	blockHeight = 80,
	...props
}: BackgroundGridProps) => {
	const [coordinatesArray, setCoordinatesArray] = useState<string[]>([]);
	const [gridArray, setGridArray] = useState<number[][]>([]);
	const [selected, setSelected] = useState<number[]>([]);
	const [randomInc, setRandomInc] = useState<number>(0);
	const hue = useMotionValue(0);
	const ref = useRef<HTMLDivElement>(null);
	const [parentWidth, parentHeight] = useParentSize(ref, 2);
	const gridHeight = Math.ceil(parentHeight / blockHeight);
	const gridWidth = Math.ceil(parentWidth / blockWidth);
	const message = 'HELLO';

	useEffect(() => {
		const controls = animate(hue, 1440, {
			repeat: 4,
			duration: 2,
			ease: 'linear',
			onComplete: () => {
				hue.set(0);
				if (selected.length == message.length) {
					setSelected([]);
				}
			},
		});
		return () => {
			controls.stop();
		};
	}, [hue, selected]);

	useMemo(() => {
		const grid = Array.from({ length: gridHeight }).map(() =>
			Array.from({ length: gridWidth }).map(() => 0),
		);
		setGridArray(grid);
		let num = randomInc;
		const uniqueCoordinates = new Set<string>();
		while (uniqueCoordinates.size < message.length && grid.length) {
			const randomRow = Math.floor(Math.random() * grid.length);
			const randomColumn = Math.floor(Math.random() * grid[0].length);
			const coordinate = `${randomRow}_${randomColumn}`;
			uniqueCoordinates.add(coordinate);
		}
		setCoordinatesArray(Array.from(uniqueCoordinates));
	}, [gridHeight, gridWidth, randomInc]);

	const handleShuffle = () => {
		setRandomInc((prev) => prev + 1);
	};

	return (
		<motion.div
			className='absolute left-0 top-0 flex max-h-full max-w-full flex-col overflow-hidden'
			ref={ref}>
			{gridArray.map((row, i) => (
				<GridRow
					key={i}
					row={row}
					i={i}
					hue={hue}
					blockWidth={blockWidth}
					blockHeight={blockHeight}
					coordinatesArray={coordinatesArray}
					message={message}
					selected={selected}
					setSelected={setSelected}
				/>
			))}
			{selected.length > 0 && (
				<button
					onClick={handleShuffle}
					className='absolute bottom-16 right-16 h-14 w-14 rounded-full border bg-primary/10 text-center backdrop-blur-sm'>
					<Shuffle className='m-auto' />
				</button>
			)}
		</motion.div>
	);
};

export default BackgroundGrid;
