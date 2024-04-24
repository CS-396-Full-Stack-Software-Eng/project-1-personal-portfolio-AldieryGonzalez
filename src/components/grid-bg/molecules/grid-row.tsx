import { motion, MotionValue } from 'framer-motion';
import GridBlock from '../atoms/grid-block';
import GridButton from '../atoms/grid-button';

type GridRowProps = {
	row: number[];
	i: number;
	blockWidth: number;
	blockHeight: number;
	hue: MotionValue<number>;
	coordinatesArray: string[];
	message: string;
	selected: number[];
	setSelected: React.Dispatch<React.SetStateAction<number[]>>;
};
function GridRow({
	row,
	i,
	blockWidth,
	blockHeight,
	coordinatesArray,
	message,
	hue,
	selected,
	setSelected,
}: GridRowProps) {
	return (
		<motion.div key={i} className='flex'>
			{row.map((_, j) => {
				const coord = `${i}_${j}`;
				const buttonIndex = coordinatesArray.indexOf(coord);
				if (buttonIndex !== -1) {
					return (
						<GridButton
							key={coord}
							width={blockWidth}
							hue={hue}
							buttonIndex={buttonIndex}
							height={blockHeight}
							message={message}
							selected={selected}
							setSelected={setSelected}
						/>
					);
				}
				return (
					<GridBlock
						key={coord}
						width={blockWidth}
						height={blockHeight}
					/>
				);
			})}
		</motion.div>
	);
}

export default GridRow;
