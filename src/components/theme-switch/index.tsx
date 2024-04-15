'use client';

import { Moon, Sun, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ThemeSwitchButton from './atoms/switch-button';

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return <SunMoon />;

	if (resolvedTheme === 'dark') {
		return (
			<ThemeSwitchButton onClick={() => setTheme('light')}>
				<Moon />
			</ThemeSwitchButton>
		);
	}
	return (
		<ThemeSwitchButton onClick={() => setTheme('dark')}>
			<Sun />
		</ThemeSwitchButton>
	);
}
