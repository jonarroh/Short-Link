import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
	const urll = req.body;
	const url = urll.replace(/['"]+/g, '');
	const shortUrl = Math.random().toString(36).substring(2, 5);
	try {
		const data = await prisma.link.create({
			data: { url, shortUrl }
		});

		return res.status(200).send(data);
	} catch (e) {
		console.log(e);
		return res.status(500).json({ error: 'error en el servidor' });
	}
}
