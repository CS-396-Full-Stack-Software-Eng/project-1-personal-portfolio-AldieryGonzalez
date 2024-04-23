export default function Contact() {
	return (
		<div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900'>
			<div className='w-full max-w-md rounded-lg bg-white/50 p-6 shadow-lg backdrop-blur-sm dark:bg-gray-900/50'>
				<h2 className='mb-4 text-2xl font-bold'>Contact Us</h2>
				<form className='space-y-4'>
					<div>
						<label
							className='block font-medium text-gray-700 dark:text-gray-300'
							htmlFor='name'>
							Name
						</label>
						<input
							className='block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300'
							id='name'
							name='name'
							placeholder='Enter your name'
							type='text'
						/>
					</div>
					<div>
						<label
							className='block font-medium text-gray-700 dark:text-gray-300'
							htmlFor='email'>
							Email
						</label>
						<input
							className='block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300'
							id='email'
							name='email'
							placeholder='Enter your email'
							type='email'
						/>
					</div>
					<div>
						<label
							className='block font-medium text-gray-700 dark:text-gray-300'
							htmlFor='message'>
							Message
						</label>
						<textarea
							className='block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300'
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
			</div>
		</div>
	);
}
