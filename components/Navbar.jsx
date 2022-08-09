import {
	Box,
	Flex,
	Heading,
	Highlight,
	Link,
	Text
} from '@chakra-ui/react';
import NextLink from 'next/link';
import ShortText from './ShortText';

function Navbar() {
	return (
		<nav>
			<Flex color="white">
				<Box p={4}>
					<NextLink passHref href="/">
						<Link>
							<ShortText />
						</Link>
					</NextLink>
				</Box>
				<Box flex={1}></Box>
				<Box p={4}>
					<Heading lineHeight="tall">
						<Text fontSize={{ base: '15px', md: '25px', lg: '32px' }}>
							<Highlight
								query="easy"
								styles={{
									px: '2',
									py: '2',
									rounded: 'full',
									bg: 'teal.100'
								}}>
								An easy way to save links
							</Highlight>
						</Text>
					</Heading>
				</Box>
			</Flex>
		</nav>
	);
}

export default Navbar;
