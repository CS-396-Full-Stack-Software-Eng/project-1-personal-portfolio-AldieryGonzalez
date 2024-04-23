import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';

type GridBlockProps = {
	width: number;
	height: number;
};

function GridBlock({ width, height }: GridBlockProps) {
	const { theme } = useTheme();
	return (
		<motion.div
			className='border border-foreground/5'
			whileHover={{
				backgroundColor:
					theme === 'light'
						? 'rgba(230,230,230)'
						: 'rgba(34, 39, 46)',
			}}
			animate={{
				transition: { duration: 2 },
			}}
			transition={{ ease: 'easeOut', duration: 0.25 }}
			style={{
				width,
				height,
				backgroundColor:
					theme === 'light'
						? 'rgba(251,247,245)'
						: 'rgba(13, 17, 22)',
			}}
		/>
	);
}

export default GridBlock;
