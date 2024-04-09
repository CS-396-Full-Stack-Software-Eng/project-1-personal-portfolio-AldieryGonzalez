import NavLink from './atoms/navlink';
type NavbarProps = {};

const Navbar = ({ ...props }: NavbarProps) => {
	return (
		<div className='flex gap-3'>
			<NavLink href='/'>Home</NavLink>
			<NavLink href='/notHome'>notHome</NavLink>
			<NavLink href='/test'>test</NavLink>
			<NavLink href='/bigTest'>bigTest</NavLink>
		</div>
	);
};

export default Navbar;
export { NavLink };
