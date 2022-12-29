import router from "next/router"

import { signIn } from "next-auth/react"

const Signin_M = () => {

	const handleSignIn = () => {
		signIn('google', {callbackUrl: '/app/dashboard'})
	}

	return (
		<div className="flex flex-row bg-signin h-screen justify-center bg-no-repeat bg-cover bg-center  bg-blend-multiply bg-black/40  w-full ">
				<div onClick={() => router.push('/')} className="text-3xl font-medium cursor-pointer absolute right-0 pt-10 pr-[5vh]">
					Mienai
				</div>
				<div className="font-medium absolute flex flex-col h-screen justify-end leading-tight pl-[5vh] bottom-0 left-0 pb-10 ">
					<span>
						Explore India.
					</span>
					<span>
						Beyond Ordinary.
					</span>
				</div>
		
		
				
				<div className="flex flex-col justify-center gap-4 items-center h-screen">
					<div className="font-bold text-3xl">
						Good to see you again!
					</div>
					{/* <div className="flex flex-col gap-6">
						<input 
							type="email"
							placeholder="Email"
							className="rounded-lg border-2 border-[#C4C4C4] bg-[#D6D6D6] bg-opacity-25 w-96 p-2 focus:outline-none" 
						/>
						<input 
							type="password"
							placeholder="Password"
							className="rounded-lg border-2 border-[#C4C4C4] bg-[#D6D6D6] bg-opacity-25 w-96 p-2 focus:outline-none" 
						/>
					</div> */}
					<div className="flex flex-row items-center gap-2 ">
						<div onClick={() => handleSignIn()} className="bg-white text-black border-2 cursor-pointer w-48 flex flex-row items-center justify-center pt-2 pb-2 rounded-lg">
							Sign In with Google
						</div>
						{/* <div onClick={() => handleSignOut()} className="border-2 cursor-pointer rounded-lg w-48 flex flex-row items-center justify-center pt-2 pb-2">
							Sign Up
						</div> */}
					</div>
				</div>

		</div>
	)
}

export default Signin_M





