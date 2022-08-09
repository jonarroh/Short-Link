import {
	background,
	Box,
	Button,
	Center,
	Container,
	Input,
	useClipboard
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { shortlinkServices } from '../services/shortLink';

import ShortText from './ShortText';

const Form = () => {
	const inputRef = useRef();
	const [shortLink, setShortLink] = useState('');
	const { hasCopied, onCopy } = useClipboard(shortLink);
	let BASE_URL = '';
	if (process.env.NODE_ENV === 'development') {
		BASE_URL = 'http://localhost:3000';
	}
	BASE_URL = 'https://short-link-jonarroh.vercel.app';

	const handleSubmit = async e => {
		e.preventDefault();
		const url = inputRef.current.value;
		if (!url) return;
		const data = await shortlinkServices(url);
		const completeUrl = `${BASE_URL}/${data.shortUrl}`;
		inputRef.current.value = completeUrl;
		setShortLink(completeUrl);
		Swal.fire({
			title: 'Short Link Created',
			icon: 'success',
			background: '#1A202C',
			confirmButtonText: 'Copy link'
		});
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<Container
					sx={{ width: '100%', height: 'calc(100vh - 100px)' }}
					display="flex"
					flexDirection={'column'}
					alignContent={'center'}
					justifyContent={'center'}>
					<Center>
						<Box>
							<ShortText />
							<Input
								placeholder="Put your link here!"
								sx={{ width: '250px' }}
								size="md"
								my={3}
								ref={inputRef}
							/>
							<Center>
								<Button
									colorScheme="teal"
									variant="solid"
									type="submit">
									Shorten
								</Button>
								<Button onClick={onCopy} ml={2}>
									{hasCopied ? 'Copied' : 'Copy'}
								</Button>
							</Center>
						</Box>
					</Center>
				</Container>
			</form>
		</>
	);
};

export default Form;
