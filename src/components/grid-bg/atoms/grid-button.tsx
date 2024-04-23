import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';

type GridButtonProps = {
	width: number;
	height: number;
	message: string;
	selected: number[];
	buttonIndex: number;
	setSelected: React.Dispatch<React.SetStateAction<number[]>>;
};
function GridButton({
	width,
	height,
	message,
	selected,
	buttonIndex,
	setSelected,
}: GridButtonProps) {
	const { theme } = useTheme();
	return (
		<motion.button
			className='cursor-pointer border border-foreground/5 text-4xl font-bold text-primary/5 focus:z-[5]'
			onClick={() => {
				setSelected((prev) => {
					if (prev.includes(buttonIndex)) {
						return prev.filter((index) => index !== buttonIndex);
					}
					return [...prev, buttonIndex];
				});
			}}
			whileHover={{
				backgroundColor:
					theme === 'light'
						? 'rgba(255,210,201)'
						: 'rgba(44, 46, 36)',
			}}
			transition={{
				ease: 'easeOut',
				duration: 0.25,
			}}
			style={{
				width,
				height,
				backgroundColor:
					theme === 'light'
						? selected.includes(buttonIndex)
							? 'rgba(255,210,201)'
							: 'rgba(255,238,229)'
						: selected.includes(buttonIndex)
							? 'rgba(44, 46, 36)'
							: 'rgba(12, 15, 26)',
			}}>
			{message[buttonIndex]}
		</motion.button>
	);
}

export default GridButton;
