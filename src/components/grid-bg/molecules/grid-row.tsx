import GridBlock from '../atoms/grid-block';
import GridButton from '../atoms/grid-button';

type GridRowProps = {
	row: number[];
	i: number;
	blockWidth: number;
	blockHeight: number;
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
	selected,
	setSelected,
}: GridRowProps) {
	return (
		<div key={i} className='flex'>
			{row.map((_, j) => {
				const coord = `${i}_${j}`;
				const buttonIndex = coordinatesArray.indexOf(coord);
				if (buttonIndex !== -1) {
					return (
						<GridButton
							key={coord}
							width={blockWidth}
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
		</div>
	);
}

export default GridRow;
