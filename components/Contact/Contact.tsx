import Link from "next/link"



const Contact = () => {
	return (
		<div className="flex flex-col justify-between md:pt-[20vh] pt-[15vh] pl-5  md:pl-[25vh] w-full md:gap-10 gap-5">
			<div className=" md:text-6xl text-4xl font-semibold">
				Lets Get to know each other !
			</div>
			<div className="md:text-xl">
				email: mienaiindia@gmail.com
			</div>
			<div className="flex flex-row items-center gap-3">
				Socials:
				<Link href="https://www.instagram.com/mienai_india/">
					<img src="/images/Insta.svg" alt="insta" draggable="false" />
				</Link>
				<Link href="https://twitter.com/mienaiindia">
					<img src="/images/Twitter.svg" alt="twitter" draggable="false"/>
				</Link>
			</div>
		</div>
	)
}

export default Contact