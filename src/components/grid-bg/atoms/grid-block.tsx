import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

type GridBlockProps = {
	width: number;
	height: number;
};

function GridBlock({ width, height }: GridBlockProps) {
	const { resolvedTheme } = useTheme();
	return (
		<motion.div
			className='border border-foreground/5'
			whileHover={{
				backgroundColor:
					resolvedTheme === 'light'
						? 'rgba(230,230,230)'
						: 'rgba(34, 39, 46)',
			}}
			transition={{ ease: 'easeOut', duration: 0.25 }}
			style={{
				width,
				height,
				backgroundColor:
					resolvedTheme === 'light'
						? 'rgba(251,247,245)'
						: 'rgba(13, 17, 22)',
			}}
		/>
	);
}

export default GridBlock;
