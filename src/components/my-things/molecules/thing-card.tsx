type ThingCardProps = {};

const ThingCard = ({ ...props }: ThingCardProps) => {
	return (
		<div className='grow basis-1 rounded-lg border bg-background shadow-md'>
			<h2 className='rounded-t-lg bg-blue-500/50 text-center text-2xl font-semibold'>
				Thing
			</h2>
			<div className='p-4'>
				<p className='text-lg'>Description</p>
			</div>
		</div>
	);
};

export default ThingCard;
