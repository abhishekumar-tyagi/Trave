import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../lib/prisma"
import { getSession } from "next-auth/react";


export default async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await getSession({req});
	if (!session) {
		throw new Error('Not Authenticated');
	}
	const { email } = req.body;
	try {
		const user = await prisma.user.findUnique({
			where: {
				email: email,

			}
		});
		if (!user) {
			throw new Error("User not found");
		}
		console.log(user)
		const deleteUser = await prisma.user.delete({
			where: {
				id: user.id
			}
		})
		res.status(200).json({ message: 'Deleted' });
		console.log(deleteUser)

	}
	catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Not Deleted' });
	}
}