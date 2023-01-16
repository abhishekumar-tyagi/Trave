import { getSession } from 'next-auth/react'
import prisma from "../../lib/prisma"
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {

	const session = await getSession({req});
	if (!session) {
		throw new Error('Not Authenticated');
	}
	const { name, email } = req.body;

	try {
		const user = await prisma.user.findUnique({where: {email: email}});
		if (!user) {
			throw new Error("User not found");
		}
		const updatedUser = await prisma.user.update({
			data: {
				name: name,
				email: email,
			},
			where: { id: user.id },
		});
		res.status(200).json({ message: 'Updated' });
		console.log(updatedUser);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Not Updated' });
	}
};

