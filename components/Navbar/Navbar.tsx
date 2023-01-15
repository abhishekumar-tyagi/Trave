import { useSession } from "next-auth/react"
import router from "next/router"
import Dropdown from "../Dropdown/Dropdown"
import Dropdown_M from "../Dropdown/Dropdown_M"



const Navbar = () => {
	const {data: session} = useSession()
	return (
		<div className="flex z-10 flex-row fixed w-full  md:pt-5 md:items-center md:justify-around   pl-5  md:pl-0 ">
			<div className="text-4xl font-medium z-10 cursor-pointer pt-5 md:pt-0 " onClick={() => router.push('/')}>
				Mienai
			</div>
			<div className="md:flex hidden flex-row gap-5  font-light">		
				<div className="cursor-pointer" onClick={() => router.push('/app/explore')}>
					Explore
				</div>
				<div className="cursor-pointer" > {/*onClick={() => router.push('/app/about')}*/}
					About
				</div>
				<div className="cursor-pointer" onClick={() => router.push('/app/contact')} >
					Contact
				</div>
				<div className="cursor-pointer" onClick={() => router.push('/app/chat')} >
					Chat
				</div>
			</div>
			{!session ?
				<div onClick={() => router.push('/app/signin')} className="border-2 cursor-pointer rounded-lg w-32 md:flex hidden flex-row items-center justify-center pt-1.5 pb-1.5">
					Signin
				</div>
				:
				<div className="hidden md:block">
					<Dropdown />
				</div>
			}
			<div className="flex md:hidden w-full  absolute right-0">
				<Dropdown_M />
			</div>
		</div>
	)
}


export default Navbar