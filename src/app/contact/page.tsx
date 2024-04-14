export default function Contact() {
	return (
		<div className='flex max-h-full flex-col'>
			<h1 className='text-4xl sm:text-6xl'>Contact Me</h1>
			<p className='text-lg'>
				I&apos;d love to hear from you about ideas!
			</p>
			<p className='text-lg'>
				Email me at{' '}
				<a href='mailto:aldieryron@gmail.com' className='text-blue-500'>
					aldieryron@gmail.com
				</a>
			</p>
		</div>
	);
}
