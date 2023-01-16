import { useState } from "react";



const Edit = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	    
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetch('/api/update-user', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const data = await response.json();
			console.log(data);
		} catch (err) {
		    	console.error(err);
		}
	};
	return (
		<div className=" w-full h-screen  bg-dashboard bg-cover md:bg-center flex  justify-center items-center  bg-blend-multiply  bg-no-repeat">
			<div className="relative border-2 backdrop-blur-sm md:pl-20 pl-5 md:pt-10 pt-5  md:w-[75%] w-[90%] rounded-lg h-[80%] mt-[7vh] bg-black/20">
				<form onSubmit={handleSubmit}>
					<label>
						Name:
						<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						/>
					</label>
					<label>
						Email:
						<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						/>
					</label>
					<button  type="submit">Save</button>
				</form>
			</div>
		</div>
	)
}

export default Edit