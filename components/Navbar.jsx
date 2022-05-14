import {
	Button,
	Grid,
	Spacer,
	Text,
	useTheme
} from '@nextui-org/react';

const Navbar = () => {
	const theme = useTheme();
	const isLight = theme.isDark;
	return (
		<>
			<Grid.Container
				css={{
					backgroundColor: '$back',
					height: '70px',
					width: '100%'
				}}
				alignItems="center">
				<Text color="primary" h4>
					Short Link
				</Text>
				<Spacer x={1} />
				<Button color="primary" auto>
					{isLight ? 'Oscuro' : 'Claro'}
				</Button>
			</Grid.Container>
		</>
	);
};

export default Navbar;
