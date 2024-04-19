import { SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Dropdown from '../dropdown';
import ThemeSwitch from '../theme-switch';
import NavLink from './atoms/navlink';

const Navbar = () => {
	return (
		<header className='z-50 flex h-14 items-center justify-between bg-background px-8 shadow-md transition-all'>
			<p className='text-lg font-semibold'>Aldiery Gonzalez</p>
			<div className='hidden items-center space-x-4 sm:flex'>
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
			<Dropdown icon={<Menu />} className='sm:hidden'>
				<div className='flex w-full flex-col'>
					<nav className='flex flex-col space-y-1'>
						<NavLink
							className='rounded-sm hover:bg-gray-500/30'
							href='/'>
							Home
						</NavLink>
						<NavLink
							className='rounded-sm hover:bg-gray-500/30'
							href='/projects'>
							Projects
						</NavLink>
						<NavLink
							className='rounded-sm hover:bg-gray-500/30'
							href='/contact'>
							Contact
						</NavLink>
					</nav>
					<hr className='my-1' />
					<nav
						className='flex flex-col space-y-1'
						aria-labelledby='external-navigation'>
						<Link
							className='flex items-center justify-between  rounded-sm hover:bg-gray-500/30'
							href={'https://github.com/AldieryGonzalez'}>
							Github <SiGithub size={16} />
						</Link>
						<Link
							className='flex items-center justify-between rounded-sm hover:bg-gray-500/30'
							href={
								'https://www.linkedin.com/in/aldierygonzalez/'
							}>
							LinkedIn <SiLinkedin size={16} />
						</Link>
					</nav>
				</div>
			</Dropdown>
		</header>
	);
};

export default Navbar;
export { NavLink };
