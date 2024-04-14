import { SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons';
import Link from 'next/link';
import NavLink from './atoms/navlink';

const Navbar = () => {
	return (
		<header className='z-10 flex h-14 items-center justify-between bg-background px-8 shadow-md transition-all'>
			<p className='text-lg font-semibold'>Aldiery Gonzalez</p>
			<div className='z-10 hidden space-x-4 sm:flex'>
				<nav className='space-x-4' aria-labelledby='primary-navigation'>
					<NavLink href='/'>Home</NavLink>
					<NavLink href='/projects'>Projects</NavLink>
					<NavLink href='/contact'>Contact</NavLink>
				</nav>
				<nav
					className='flex space-x-4'
					aria-labelledby='external-navigation'>
					<Link href={'https://github.com/AldieryGonzalez'}>
						<SiGithub />
					</Link>
					<Link href={'https://www.linkedin.com/in/aldierygonzalez/'}>
						<SiLinkedin />
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
export { NavLink };
