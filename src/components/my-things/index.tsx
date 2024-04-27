import ThingCard from './molecules/thing-card';

type MyThingsProps = {};

const MyThings = ({ ...props }: MyThingsProps) => {
	return (
		<div className='z-10 mt-16 flex flex-wrap gap-6'>
			<ThingCard title='Designer'>
				I like to design webpages and user experiences. My favorite
				styles right now are neumorphism and glassmorphism. I am always
				looking for new ways to make my designs stand out.
			</ThingCard>
			<ThingCard title='Creator'>
				I try to make a new project weekly and share it. Stay Tuned for
				adding more projects to my projects page.
				<br />
				My most recent projects can be found there
			</ThingCard>
			<ThingCard title='Developer'>
				I am a web and app developer and I love to code, but more than
				anything I like to solve problems. I currently best in the
				React/NextJs ecosystem, but am versed in many other languages
				and frameworks as well.
			</ThingCard>
		</div>
	);
};

export default MyThings;
