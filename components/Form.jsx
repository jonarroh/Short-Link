import {
	Box,
	Button,
	Center,
	Container,
	Input,
	Text
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import ShortText from './ShortText';

const Form = () => {
	const inputRef = useRef();
	const [link, setLink] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const url = inputRef.current.value;
		fetch('./api/shortLink', {
			method: 'POST',
			Headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(url)
		})
			.then(res => res.json())

			.then(data => {
				setLink(`short-link-jonarroh.vercel.app/${data.shortUrl}`);
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
							</Center>
						</Box>
					</Center>
				</Container>
			</form>
		</>
	);
};

export default Form;
