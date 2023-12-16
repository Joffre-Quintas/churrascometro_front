import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const Theme = () => {
	const { isDark, handleChangeTheme } = useContext(ThemeContext);
	return (
		<div
			className="theme-container"
			onChange={() => handleChangeTheme()}
		>
			<label
				id="label-theme-text"
				htmlFor="input-theme"
			>
				{isDark ? 'Tema Escuro' : 'Tema Claro'}
			</label>
			<label className="switch">
				<input
					type="checkbox"
					id="input-theme"
					defaultChecked={!isDark}
				/>
				<span className="slider"></span>
			</label>
		</div>
	);
};
