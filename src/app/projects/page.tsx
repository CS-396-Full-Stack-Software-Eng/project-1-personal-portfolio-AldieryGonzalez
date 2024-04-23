import ProjectCard from '@/components/projects-card';

export default function Projects() {
	return (
		<div className='relative z-10 flex max-h-full w-full flex-col overflow-hidden bg-primary-foreground p-12'>
			<h1 className='z-10 mb-8 inline-block self-center rounded-md border border-foreground/20 bg-foreground/10 p-2 text-6xl bg-blend-color-burn shadow-lg'>
				Projects
			</h1>
			<div className='grid-cols-fill-200 md:grid-cols-fill-400 z-10 grid gap-6 sm:container'>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
			<div className='animate-blob-float-1 absolute inset-x-1/2 aspect-square w-1/4 rounded-full bg-gradient-to-tl from-red-500 via-indigo-800 to-fuchsia-500 opacity-25 blur-2xl' />
			<div className='animate-blob-float-2 absolute inset-10 aspect-square w-96 rounded-full bg-gradient-to-tr  from-red-500 via-indigo-800 to-fuchsia-500 opacity-25 blur-2xl' />
		</div>
	);
}
