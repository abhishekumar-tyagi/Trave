import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'zimetsujo@gmail.com',
    pass: 'fabensrhjksspmzl',
  },
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { name, email, feedback } = req.body;

	try {
		await transporter.sendMail({
			from: 'zimetsujo@gmail.com',
			to: 'mienaiindia@gmail.com',
			subject: 'New Feedback from your website',
			html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Feedback: ${feedback}</p>`,
		});
		res.status(200).json({ message: 'Email sent' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Error sending email' });
	}
};