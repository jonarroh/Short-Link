import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';
import { darkTheme, lightTheme } from '../themes';

function MyApp({ Component, pageProps }) {
	return (
		<NextUIProvider theme={lightTheme}>
			<Component {...pageProps} />
		</NextUIProvider>
	);
}

export default MyApp;
