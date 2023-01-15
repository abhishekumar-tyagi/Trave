import Link from "next/link"
import Form from "../Feedback/Form"



const Contact = () => {
	return (
		<div className="flex bg-contact h-screen bg-center bg-cover bg-black/40 bg-blend-multiply flex-col gap-10  pt-[20vh] pl-5  md:pl-[20vh] w-full ">
			<div className=" md:text-6xl text-4xl font-semibold">
				Lets get to know each other !
			</div>
			<div className="md:text-2xl">
				Email: mienaiindia@gmail.com
			</div>
			<div className="flex flex-col w-max  gap-3 md:text-2xl">
				Socials:
				<Link href="https://www.instagram.com/mienai_india/">
					<div className="flex flex-row items-center gap-5">		
						<img src="/images/Insta.svg" alt="insta" draggable="false" />
						<div>
							@mienai_india
						</div>				
					</div>
				</Link>
				
				<Link href="https://twitter.com/mienaiindia">
					<div className="flex flex-row items-center gap-5">		
						<img src="/images/Twitter.svg" alt="twitter" draggable="false"/>
						<div>
							@mienaiindia
						</div>				
					</div>
				</Link>
			</div>
			<div className="w-max">
				<Form />
			</div>
			
		</div>
	)
}

export default Contact