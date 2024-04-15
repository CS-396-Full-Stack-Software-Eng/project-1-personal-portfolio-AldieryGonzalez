type ThingCardProps = {
	title: string;
	children: React.ReactNode;
};

const ThingCard = ({ title, children, ...props }: ThingCardProps) => {
	return (
		<div className='shrink grow basis-40 rounded-lg border bg-background shadow-md transition-all duration-300 hover:scale-105'>
			<h2 className='text-shadow-sm rounded-t-lg bg-blue-500/50 py-2 text-center text-2xl font-semibold text-white shadow-sm shadow-black/50'>
				{title}
			</h2>
			<div className='p-4'>
				<p className='text-lg'>{children}</p>
			</div>
		</div>
	);
};

export default ThingCard;
