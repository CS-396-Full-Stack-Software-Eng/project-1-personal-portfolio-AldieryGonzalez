import ThingCard from './molecules/thing-card';

type MyThingsProps = {};

const MyThings = ({ ...props }: MyThingsProps) => {
	return (
		<div className='z-10 mt-16 flex flex-wrap gap-6'>
			<ThingCard title='Designer'>
				I like to make fun designs and stuff
			</ThingCard>
			<ThingCard title='Designer'>
				I like to make fun designs and stuff
			</ThingCard>
			<ThingCard title='Designer'>
				I like to make fun designs and stuff
			</ThingCard>
			<ThingCard title='Designer'>
				I like to make fun designs and stuff
			</ThingCard>
			<ThingCard title='Designer'>
				I like to make fun designs and stuff
			</ThingCard>
		</div>
	);
};

export default MyThings;
