import { ReactNode, createContext, useState } from 'react';

interface IThemeContextProps {
	isDark: boolean;
	handleChangeTheme: () => void;
}

const ThemeContext = createContext<IThemeContextProps>(null!);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [isDark, setIsDark] = useState(false);

	const handleChangeTheme = () => {
		setIsDark((current) => !current);
	};

	return <ThemeContext.Provider value={{ isDark, handleChangeTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
