type ThemeSwitchButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const ThemeSwitchButton = ({ children, ...props }: ThemeSwitchButtonProps) => {
	return (
		<button className='rounded-sm p-1 hover:bg-gray-500/30' {...props}>
			{children}
		</button>
	);
};

export default ThemeSwitchButton;
