import BackgroundGrid from '@/components/grid-bg';
import MyThings from '@/components/my-things';

export default function Home() {
	return (
		<div className='flex max-h-full flex-col items-center justify-between p-12'>
			<div className='z-10 rounded-xl border bg-background p-6 shadow-md sm:p-8'>
				<h1 className='text-2xl font-semibold sm:text-4xl'>
					Hi, I&apos;m Aldi, a{' '}
					<span className='animate-gradient-slide block bg-gradient-to-br from-red-500 from-10% via-purple-700 via-50% to-green-500 to-90% bg-clip-text text-3xl text-transparent sm:inline sm:text-4xl'>
						web developer
					</span>
				</h1>
			</div>
			<MyThings />
			<BackgroundGrid />
		</div>
	);
}
