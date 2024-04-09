import Link from 'next/link';

type NavLinkProps = {
	children: React.ReactNode;
} & React.ComponentProps<typeof Link>;

const NavLink = ({ href, ...props }: NavLinkProps) => {
	return (
		<Link href={href} className=''>
			NavLink
		</Link>
	);
};

export default NavLink;
