import Head from 'next/head';
import Form from '../components/Form';
import Navbar from '../components/Navbar';

export default function Home() {
	return (
		<>
			<Head>
				<title>Short-Link</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="An easy way to short links"
				/>
				<meta
					name="keywords"
					content="short, link, shorten, shorten link, short link, shortening, shortening link"
				/>
				<meta name="author" content="Jonarroh" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>

				<meta property="og:title" content="Short-Link" />
				<meta
					property="og:description"
					content="An easy way to short links"
				/>
				<meta
					property="og:image"
					content="https://short-link-jonarroh.vercel.app/favicon.ico"
				/>
				<meta
					property="og:url"
					content="https://short-link-jonarroh.vercel.app"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Short-Link" />
				<meta property="og:locale" content="en_US" />
			</Head>
			<Navbar />
			<Form />
		</>
	);
}
