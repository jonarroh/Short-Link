// pages/_document.js

import { ColorModeScript, theme } from '@chakra-ui/react';
import NextDocument, {
	Html,
	Head,
	Main,
	NextScript
} from 'next/document';

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					{/* 👇 Here's the script */}
					<ColorModeScript initialColorMode={'dark'} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
