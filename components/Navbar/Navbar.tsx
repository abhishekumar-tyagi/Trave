import { useSession } from "next-auth/react"
import Link from "next/link"
import router from "next/router"
import Dropdown from "../Dropdown/Dropdown"



const Navbar = () => {
	const {data: session} = useSession()
	return (
		<div className="flex z-10 flex-row fixed w-full  pt-5 items-center justify-around">
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
			{!session ?
				<div onClick={() => router.push('/app/signin')} className="border-2 cursor-pointer rounded-lg w-32 flex flex-row items-center justify-center pt-1.5 pb-1.5">
					Signin
				</div>
				:
				<Dropdown />
			}
		</div>
	)
}


export default Navbar