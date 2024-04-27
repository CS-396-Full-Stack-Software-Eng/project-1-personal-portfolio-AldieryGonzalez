'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

type DropdownProps = {
	children: React.ReactNode;
	icon: React.ReactNode;
	className?: string;
};

const Dropdown = ({ children, icon, className, ...props }: DropdownProps) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen((open) => !open);
	};
	return (
		<div className={cn('relative', className)}>
			<button onClick={handleOpen}>{icon}</button>
			{open && (
				<div className='absolute right-0 top-full flex min-w-28 items-center justify-between rounded-md border bg-background p-3'>
					{children}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
