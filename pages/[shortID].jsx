import { PrismaClient } from '@prisma/client';

const shortID = () => {
	return <div>shortID</div>;
};

export default shortID;

export const getServerSideProps = async ({ params }) => {
	const prisma = new PrismaClient();

	const { shortID } = params;
	const data = await prisma.link.findUnique({
		where: { shortUrl: shortID }
	});
	if (!data) {
		return { redirect: { destination: '/' } };
	}
	return { redirect: { destination: data.url } };
};
