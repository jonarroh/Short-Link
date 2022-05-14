import { useRef, useState } from 'react';
import {
	Button,
	Card,
	Grid,
	Input,
	Spacer,
	Text
} from '@nextui-org/react';
import { Navbar } from '../components';

export default function Home() {
	const inputRef = useRef();
	const [link, setLink] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const url = inputRef.current.value;
		console.log(url);
		fetch('./api/shortLink', {
			method: 'POST',
			Headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(url)
		})
			.then(res => res.json())

			.then(data => {
				setLink(data.shortUrl);
			});
	};

	return (
		<>
			<Navbar />
			<form onSubmit={handleSubmit}>
				<Grid.Container className="center">
					<Card bordered css={{ backgroundColor: '$back' }}>
						<Card.Header>
							<Text h4 color="primary">
								Short Link
							</Text>
						</Card.Header>
						<Card.Body>
							<Spacer x={15} />
							<input
								type="text"
								ref={inputRef}
								placeholder="Ingrese Link"
							/>

							<Spacer y={1} />
							<button type="submit">Crear short</button>
							<Spacer y={1} />
							<Text blockquote>{link}</Text>
						</Card.Body>
					</Card>
				</Grid.Container>
			</form>
		</>
	);
}
