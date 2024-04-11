import BackgroundGrid from '@/components/grid-bg';

export default function Home() {
	return (
		<div className='flex max-h-full flex-col items-center justify-between'>
			<div className='rounded-xl border bg-background p-8 shadow-md'>
				<h1 className='bg-background text-4xl font-semibold'>
					Hi, I&apos;m Aldi, a{' '}
					<span className='bg-gradient-to-br from-red-500 from-10% via-purple-700 to-green-500 bg-clip-text text-transparent'>
						web developer
					</span>
				</h1>
			</div>
			<BackgroundGrid />
		</div>
	);
}
