import Link from "next/link"
import Form from "../Feedback/Form"



const Contact = () => {
	return (
		<div className="bg-contact h-screen  bg-center bg-cover bg-black/40 bg-blend-multiply  w-full flex  justify-center items-center  ">
			<div className="flex flex-col md:w-[75%] w-[90%] gap-4 sm:gap-7 mt-[8vh] md:mt-0">
				<div className=" lg:text-6xl md:text-5xl text-3xl font-semibold">
					Lets get to know each other !
				</div>
				<div className="gap-1 sm:gap-2 flex flex-col">
					<div className="md:text-2xl">
						Email: mienaiindia@gmail.com
					</div>
					<div className="flex flex-col w-max  sm:gap-3 gap-1 md:text-2xl">
						Socials:
						<Link href="https://www.instagram.com/mienai_india/">
							<div className="flex flex-row items-center sm:gap-5 gap-2">		
								<img src="/images/Insta.svg" alt="insta" draggable="false" />
								<div>
									@mienai_india
								</div>				
							</div>
						</Link>
						<Link href="https://twitter.com/mienaiindia">
							<div className="flex flex-row items-center sm:gap-5 gap-2">		
								<img src="/images/Twitter.svg" alt="twitter" draggable="false"/>
								<div>
									@mienaiindia
								</div>				
							</div>
						</Link>
						<Link href="https://www.linkedin.com/company/mienai/">
							<div className="flex flex-row items-center sm:gap-5 gap-2">		
								<img src="/images/Linkedin.svg" alt="linkedin" draggable="false"/>
								<div>
									@mienai
								</div>				
							</div>
						</Link>
					</div>
				</div>
				<div className="md:w-max ">
					<Form />
				</div>
			</div>
		</div>
	)
}

export default Contact