import Head from 'next/head';
import Form from '../components/Form';
import Navbar from '../components/Navbar';

export default function Home() {
	return (
		<>
			<Head>
				<title>Short-Link</title>
			</Head>
			<Navbar />
			<Form />
		</>
	);
}
