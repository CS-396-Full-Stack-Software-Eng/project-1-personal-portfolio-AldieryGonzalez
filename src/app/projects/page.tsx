import ProjectCard from '@/components/projects-card';

export default function Projects() {
	return (
		<div className='flex max-h-full flex-col items-stretch justify-between gap-10'>
			<h1 className='text-6xl'>Projects</h1>
			<div className='grid gap-6'>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	);
}
