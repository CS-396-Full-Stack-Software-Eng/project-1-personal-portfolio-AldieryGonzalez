import { SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import ThemeSwitch from '../theme-switch';
import NavLink from './atoms/navlink';

const Navbar = () => {
	return (
		<header className='z-10 flex h-14 items-center justify-between bg-background px-8 shadow-md transition-all'>
			<p className='text-lg font-semibold'>Aldiery Gonzalez</p>
			<div className='z-10 hidden items-center space-x-4 sm:flex'>
				<nav className='space-x-4' aria-labelledby='primary-navigation'>
					<NavLink
						className='rounded-sm p-1 hover:bg-gray-500/30'
						href='/'>
						Home
					</NavLink>
					<NavLink
						className='rounded-sm p-1 hover:bg-gray-500/30'
						href='/projects'>
						Projects
					</NavLink>
					<NavLink
						className='rounded-sm p-1 hover:bg-gray-500/30'
						href='/contact'>
						Contact
					</NavLink>
				</nav>
				<nav
					className='flex space-x-4'
					aria-labelledby='external-navigation'>
					<Link
						className='rounded-sm p-1 hover:bg-gray-500/30'
						href={'https://github.com/AldieryGonzalez'}>
						<SiGithub />
					</Link>
					<Link
						className='rounded-sm p-1 hover:bg-gray-500/30'
						href={'https://www.linkedin.com/in/aldierygonzalez/'}>
						<SiLinkedin />
					</Link>
				</nav>
				<ThemeSwitch />
			</div>
			<button className='block sm:hidden'>
				<Menu />
			</button>
		</header>
	);
};

export default Navbar;
export { NavLink };
