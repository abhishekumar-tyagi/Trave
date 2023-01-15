import { useState } from "react";

interface FeedbackFormProps {}



const Form: React.FC<FeedbackFormProps> = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		feedback: '',
	});
	    
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
		  	...formData,
		  	[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetch('/api/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
			});
			if(response.ok) {
				console.log("Email sent!");
				//You can show a message to the user that the email sent successfully
			} else {
				console.log("Error sending email");
				//You can show a message to the user that an error occurred
			}
		} catch (error) {
			console.log("An error occurred while sending the email");
			//You can show a message to the user that an error occurred
		}
	};
	    
	return (
		<form className="border-2 p-6 w-full  rounded-lg " onSubmit={handleSubmit}>
			<label className="block  font-medium mb-2" htmlFor="name">
				Name
			</label>
			<input
				className="w-full  border p-2 focus:outline-none rounded-lg"
				type="text"
				id="name"
				name="name"
				required
				onChange={handleChange}
			/>
			<label className="block font-medium mt-2 mb-2" htmlFor="email">
				Email
			</label>
			<input
				className="w-full border p-2 focus:outline-none rounded-lg"
				type="email"
				id="email"
				name="email"
				required
				onChange={handleChange}
			/>
			<label className="block  font-medium mt-2 mb-2" htmlFor="feedback">
				Feedback
			</label>
			<textarea
				className="w-full border p-2 focus:outline-none rounded-lg"
				id="feedback"
				name="feedback"
				required
				onChange={handleChange}
			></textarea>
			<button className="bg-white mt-2 text-black py-2 px-4 rounded-lg hover:bg-blue-600">
				Submit Feedback
			</button>
    		</form>

	)
}

export default Form