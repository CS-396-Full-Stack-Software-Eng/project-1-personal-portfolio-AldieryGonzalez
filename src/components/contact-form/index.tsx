'use client';
type ContactFormProps = {};

const ContactForm = ({ ...props }: ContactFormProps) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData.entries());
		console.log(data);
	};
	return (
		<form className='space-y-4' onSubmit={handleSubmit}>
			<div>
				<label className='block font-medium' htmlFor='name'>
					Name
				</label>
				<input
					className='w-full rounded-md border border-primary/5 bg-primary/25 px-3 py-2 shadow-sm placeholder:text-foreground/20'
					id='name'
					name='name'
					placeholder='Enter your name'
					type='text'
				/>
			</div>
			<div>
				<label className='block font-medium' htmlFor='email'>
					Email
				</label>
				<input
					className='block w-full rounded-md border border-primary/5 bg-primary/25 px-3 py-2 shadow-sm placeholder:text-foreground/20 '
					id='email'
					name='email'
					placeholder='Enter your email'
					type='email'
				/>
			</div>
			<div>
				<label className='block font-medium' htmlFor='message'>
					Message
				</label>
				<textarea
					className='w-full rounded-md border border-primary/5 bg-primary/25 px-3 py-2 shadow-sm placeholder:text-foreground/20'
					id='message'
					name='message'
					placeholder='Enter your message'
					rows={4}
				/>
			</div>
			<button
				className='w-full rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 font-medium text-white shadow-sm hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-gray-700'
				type='submit'>
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
