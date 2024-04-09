'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = React.ComponentProps<typeof Link>;

const NavLink = ({ href, className, ...props }: NavLinkProps) => {
	const path = usePathname();
	const active = path === href || path === props.as;
	return (
		<Link href={href} className={cn(className, active ? 'underline' : '')}>
			{props.children}
		</Link>
	);
};

export default NavLink;
