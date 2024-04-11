import Link from 'next/link';
import NavLink from './atoms/navlink';

const Navbar = () => {
	return (
		<header className='flex h-14 items-center justify-between bg-background px-8 shadow-md transition-all'>
			<p className='text-lg font-semibold'>Aldiery Gonzalez</p>
			<div className='hidden space-x-4 md:flex'>
				<nav className='space-x-4' aria-labelledby='primary-navigation'>
					<NavLink href='/'>Home</NavLink>
					<NavLink href='/notHome'>notHome</NavLink>
					<NavLink href='/test'>test</NavLink>
					<NavLink href='/bigTest'>bigTest</NavLink>
				</nav>
				<nav
					className='space-x-4'
					aria-labelledby='external-navigation'>
					<Link href={'https://github.com/AldieryGonzalez'}>
						Help
					</Link>
					<Link href={'https://www.linkedin.com/in/aldierygonzalez/'}>
						Help
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
export { NavLink };
