import ContactForm from '@/components/contact-form';

export default function Contact() {
	return (
		<div className='relative flex max-h-full w-full flex-col items-center gap-12 overflow-hidden bg-primary-foreground p-12'>
			<h1 className='z-10 inline-block self-center rounded-md border border-foreground/20 bg-foreground/10 p-2 text-6xl bg-blend-color-burn shadow-lg'>
				Contact Me
			</h1>
			<div className='relative z-10 w-full max-w-md rounded-lg  bg-primary/20 p-6 shadow-lg backdrop-blur-sm'>
				<ContactForm />
			</div>
			<div className='animate-blob-float-1 absolute inset-x-1/2 aspect-square w-1/4 rounded-full bg-gradient-to-tl from-red-500 via-indigo-800 to-fuchsia-500 opacity-25 blur-2xl' />
			<div className='animate-blob-float-2 absolute inset-10 aspect-square w-96 rounded-full bg-gradient-to-tr from-red-500 via-indigo-800 to-fuchsia-500 opacity-25 blur-2xl' />
		</div>
	);
}
