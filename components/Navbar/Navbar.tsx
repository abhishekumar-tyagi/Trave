import Link from "next/link"
import router from "next/router"



const Navbar = () => {
	return (
		<div className="flex flex-row fixed w-full  pt-5 items-center justify-around">
			<div className="text-4xl font-medium cursor-pointer" onClick={() => router.push('/')}>
				Mienai
			</div>
			<div className="flex flex-row gap-5  font-light">		
				<div className="cursor-pointer">
					Explore
				</div>
				<div className="cursor-pointer" onClick={() => router.push('/app/about')}>
					About
				</div>
				<div className="cursor-pointer">
					Contact
				</div>
			</div>
			<div onClick={() => router.push('/app/signin')} className="border-2 cursor-pointer rounded-lg w-32 flex flex-row items-center justify-center pt-1.5 pb-1.5">
				Signin
			</div>
		</div>
	)
}


export default Navbar