import ThingCard from './molecules/thing-card';

type MyThingsProps = {};

const MyThings = ({ ...props }: MyThingsProps) => {
	return (
		<div className='z-10 mt-16 flex flex-wrap gap-6'>
			<ThingCard />
			<ThingCard />
			<ThingCard />
			<ThingCard />
		</div>
	);
};

export default MyThings;
