import ProjectCard from '@/components/projects-card';

export default function Projects() {
	return (
		<div className='relative z-10 flex max-h-full w-full flex-col overflow-hidden bg-primary-foreground p-12'>
			<h1 className='z-10 mb-8 inline-block self-center rounded-md border border-foreground/20 bg-foreground/10 p-2 text-6xl bg-blend-color-burn shadow-lg'>
				Projects
			</h1>
			<div className='grid-cols-fill-200 md:grid-cols-fill-400 z-10 grid gap-6 sm:container'>
				<ProjectCard
					img='/cmostatic.jpeg'
					link='https://cmo.aldiery.com'
					title='CMO Schedule App'>
					The CMO Schedule App is a web application that allows users
					to create and manage their schedules for our event based
					shifts at the Bienen Concert Management Office. It is built
					using React, TypeScript, and Tailwind CSS.
				</ProjectCard>
				<ProjectCard
					img='/classifier.png'
					link='https://classifier.aldiery.com'
					title='2d Classifier Visualizer'>
					The 2d Classifier Visualizer is a web application that
					allows users to visualize the decision boundaries of
					different machine learning classifiers in 2 dimensions. It
					is built using React, TypeScript, and Tailwind CSS.
				</ProjectCard>
				<ProjectCard
					title='We Have the Meets'
					img='/WHTM.png'
					link='https://wehavethemeets.wiki'>
					<strong>(IN PROGRESS)</strong> A schedule sync app that will
					link multiple different calendars to for meeting planning
				</ProjectCard>
			</div>
			<div className='animate-blob-float-1 absolute inset-x-1/2 aspect-square w-1/4 rounded-full bg-gradient-to-tl from-red-500 via-indigo-800 to-fuchsia-500 opacity-25 blur-2xl' />
			<div className='animate-blob-float-2 absolute inset-10 aspect-square w-96 rounded-full bg-gradient-to-tr  from-red-500 via-indigo-800 to-fuchsia-500 opacity-25 blur-2xl' />
		</div>
	);
}
