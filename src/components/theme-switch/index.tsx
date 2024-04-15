'use client';

import { Moon, Sun, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return <SunMoon />;

	if (resolvedTheme === 'dark') {
		return <Moon onClick={() => setTheme('light')} />;
	}

	if (resolvedTheme === 'light') {
		return <Sun onClick={() => setTheme('dark')} />;
	}
}
