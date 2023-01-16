import { useRef, useState } from "react";

interface FeedbackFormProps {}



const Form: React.FC<FeedbackFormProps> = () => {
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
	const [sending, setSending] = useState(false);
	const [showMessage, setShowMessage] = useState(false);

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
		setSending(true)
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
				setSubmitted(true);
            			setError(false);
				setFormData({ name: '', email: '', feedback: '',})
				setSending(false)
				setShowMessage(true);
        			setTimeout(() => setShowMessage(false), 5000);
				//You can show a message to the user that the email sent successfully
			} else {
				console.log("Error sending email");
				setError(true);
				setSending(false)
				//You can show a message to the user that an error occurred
			}
		} catch (error) {
			console.log("An error occurred while sending the email");
			setError(true);
			setSending(false)
			//You can show a message to the user that an error occurred
		}
	};

	    
	return (
		<>
		<form  className="border-2 border-gray-400 backdrop-blur-lg sm:p-6 p-2 w-full   rounded-lg " onSubmit={handleSubmit}>
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
				value={formData.name} 
				defaultValue={formData.name}
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
				value={formData.email} 
				defaultValue={formData.email}
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
				value={formData.feedback} 
				defaultValue={formData.feedback}
			></textarea>
			<button className="bg-white mt-2 text-black py-2 px-4 rounded-lg ">
				{sending ? <>Sending..</> : <>Submit Feedback</>}
			</button>
			
    		</form>
		{submitted && showMessage &&
			<div className="absolute right-0 bottom-0 lg:mr-[5vh]  lg:mb-[5vh] p-4 rounded-lg bg-white text-green-600 text-lg font-medium ">
				Your feedback has been sent!  
			</div>
		}
		{error && showMessage &&
			<div className="absolute right-0 bottom-0 lg:mr-[5vh] lg:mb-[5vh] p-4 rounded-lg bg-white text-red-600 text-lg font-medium ">
				An error occurred. Your feedback was not sent!
			</div>
		}
		</>

	)
}

export default Form