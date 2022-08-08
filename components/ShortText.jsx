import { Text } from '@chakra-ui/react';
import React from 'react';

const ShortText = () => {
	return (
		<Text
			fontSize={{ base: '15px', md: '25px', lg: '32px' }}
			fontWeight={'bold'}>
			Short-Link
		</Text>
	);
};

export default ShortText;
