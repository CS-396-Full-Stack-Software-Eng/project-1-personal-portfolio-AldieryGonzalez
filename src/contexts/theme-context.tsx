import { createContext, useState } from 'react';

type ThemeProviderProps = {
	children: React.ReactNode;
};
export const ThemeContext = createContext({});

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	const [mode, setMode] = useState<'dark' | 'light'>('dark');
	const toggleMode = () => {
		setMode((prev) => {
			if (prev == 'dark') return 'light';
			return 'dark';
		});
	};
	const setTheme = (themeMode: typeof mode) => {
		setMode(themeMode);
	};
	const value = {
		mode,
		setTheme,
		toggleMode,
	};
	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}
