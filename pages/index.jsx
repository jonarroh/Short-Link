import { useRef, useState } from 'react';

export default function Home() {
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

	return <></>;
}
