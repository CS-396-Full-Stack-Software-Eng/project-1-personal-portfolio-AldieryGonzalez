'use client';

import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun, SunMoon } from 'lucide-react';
import { useEffect, useState } from 'react';
import ThemeSwitchButton from './atoms/switch-button';

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, theme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return <SunMoon />;

	if (theme === 'dark') {
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
