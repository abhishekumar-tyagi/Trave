import { getSession, signOut, useSession } from "next-auth/react";
import router from "next/router";
import { useEffect, useState } from "react";



const Edit = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
	});

	const [isDeleting, setIsDeleting] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	
	const handleDelete = async () => {
		setIsDeleting(true);
		try {
			const res = await fetch('/api/delete-user', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					
				},
				body: JSON.stringify(formData)
			})
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			else {
				signOut({callbackUrl: '/'})
			}
		}
		catch (err) {
			console.error(err);
		}
		finally {
			setIsDeleting(false)
		}
	}
	    
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const reloadSession = () => {
				const event = new Event("visibilitychange");
				document.dispatchEvent(event);
			};
			const response = await fetch('/api/update-user', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					
				},
				body: JSON.stringify(formData)
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			else {
				reloadSession();
				
        			router.push('/app/dashboard')
			}
			const data = await response.json();
			console.log(data);
		} catch (err) {
		    	console.error(err);
		}
	};
	useEffect(() => {
		async function fetchData() {
		    const session = await getSession();
		    if (!session ) {
			throw new Error('Not Authenticated');
		    }
		    setFormData(currentFormData => { 
			return {...currentFormData, 
				name: session?.user?.name ? session.user.name : '', 
				email: session?.user?.email ? session.user.email : '',
			}});
		}
		fetchData();
	    }, []);
	return (
		<div className=" w-full h-screen  bg-dashboard bg-cover md:bg-center flex  justify-center items-center  bg-blend-multiply  bg-no-repeat">
			<div className="relative border-2 backdrop-blur-sm md:pl-20 md:pr-20 pl-5 pr-5 md:pt-10 md:pb-10 pt-5 pb-5  md:w-[75%] w-[90%] rounded-lg h-[80%] mt-[7vh] bg-black/20">
				<form onSubmit={handleSubmit} className="w-full h-full  relative ">
					<label className="block  font-medium mb-2" htmlFor="name">
						Name
					</label>
					<input
						className="w-60  border p-2 focus:outline-none rounded-lg"
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>	
					<label className="block mt-5 font-medium mb-2" htmlFor="name">
						Email
					</label>
					<input
						className="w-60  border p-2 focus:outline-none rounded-lg"
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
					
					<div className="absolute right-0 bottom-0 flex flex-row items-center gap-5">
						<button onClick={() => router.push('/app/dashboard')} type="submit" className="w-max pt-2 pb-2 pl-4 pr-4 rounded-lg bg-black text-white ">
							Cancel
						</button>
						<button  type="submit" className="w-max pt-2 pb-2 pl-4 pr-4 rounded-lg bg-white text-black">
							Save
						</button>
					</div>	
					
				</form>
				<button onClick={handleDelete} className="w-max absolute bottom-0 left-0 ml-20 mb-10 bg-red-500 pl-4 pr-4 pt-2 pb-2 rounded-lg">
						Delete
				</button>
			</div>
		</div>
	)
}

export default Edit