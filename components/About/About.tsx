import router from "next/router"



const About = () => {
	return (
		<div className="w-full h-full  ">
			<div className="bg-about bg-cover text-center relative bg-center bg-blend-multiply bg-black/40 h-screen w-full flex flex-col items-center justify-center   ">
				<div className="md:text-3xl text-lg">
					Make your experience of travelling India
				</div>
				<div className="md:text-7xl text-4xl font-semibold ">
					Smarter, Smoother and Simpler.
				</div>
				<div className="absolute bottom-0 pb-5">
					S C R O L L
				</div> 
			</div>
			<div className="mx-auto md:w-[75%] w-[90%] flex flex-col  md:gap-[20vh] gap-[10vh] md:mt-[20vh] mt-[10vh] pb-5">
				<div className="flex md:flex-row flex-col bg-white rounded-lg text-black items-center w-full justify-center h-[10%] ">
					<div className="w-full  md:text-xl p-7 flex flex-col gap-5  ">
						<div className="md:text-6xl text-5xl font-semibold ">
							One Stop Shop
						</div>
						<div className="text-lg">
							We aim at providing services as a one stop destination for all your travel (or not) related worries, and focus on <span className="underline underline-offset-2 ">customer-centric</span> choices and preferences to provide with the most personalised package. 
						</div>
						<div className="text-lg">
							We are not just restricted to booking hotels for you but also cabs, buses, locally famous restaurants and cafes of the destination.
						</div>
					</div>
					<div className="md:w-[50%] p-5   flex justify-end">
						<img src="/images/goa.jpeg" className="h-[60vh]  rounded-lg"/>
					</div>
				</div>
				<div className="flex md:flex-row flex-col bg-white rounded-lg text-black items-center w-full justify-center h-[10%] ">
					<div className="md:w-[50%] p-5   flex justify-start">
						<img src="/images/market.jpeg" className="h-[60vh]  rounded-lg"/>
					</div>
					<div className="w-full   md:text-xl p-7 flex flex-col gap-5  ">
						<div className="md:text-6xl text-5xl font-semibold  ">
							Virtual Guide
						</div>
						<div className="text-lg">
							Our amazing chatbot <span className="font-semibold underline underline-offset-2 cursor-pointer text-blue-400" onClick={() => router.push("/app/chat")}>CHLOE</span> will help and guide you through everything you require, from getting information about 5 star chai stalls to info about museums, monuments- you name it.
						</div>
						<div className="text-lg">
							Language barrier? dont worry, CHLOE will help out by converting your speech in the native language of your location.
						</div>
					</div>
				</div>
				<div className="flex md:flex-row flex-col bg-white rounded-lg text-black items-center w-full justify-center h-[10%] ">
					<div className="w-full  md:text-xl text-lg p-7 flex flex-col gap-5 ">
						<div className="md:text-6xl text-5xl font-semibold ">
							Want to explore your own city ?
						</div>
						<div>
							We have got your back. We scavenge through each corner of the city to bring forth the best results to you. Want to explore public parks in the city? which has a horror past? or explore museums? but not the famous ones? we will find it for you. 
						</div>
						<div>
							The best cafes, restaurants, malls, arcades, street shops, movie theatres, all in your city or anywhere else you desire.
						</div>
					</div>
					<div className="md:w-[50%] p-5   flex justify-end">
						<img src="/images/delhi.jpeg" className="h-[60vh]  rounded-lg"/>
					</div>
				</div>
				<div className=" bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-lg flex text-xl md:p-10 p-5  gap-5 flex-col text-gray-600 items-center w-full justify-center h-[10%] ">
					<div className="md:text-4xl text-2xl text-center font-semibold ">
						What we will be coming up soon with ?
					</div>
					<div className="flex md:flex-row flex-col items-center text-lg md:gap-5  text-gray-800">
						<div>
							Road trip Planner
						</div>
						&#x2022;
						<div>
							Travel Booklet
						</div>
						&#x2022;
						<div>
							More Unexplored Places
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center text-center md:mt-[15vh] mt-10 pb-10 md:text-xl text-base  text-gray-500">
				Our AI-driven services will help you provide the best-experience travelling along with being pocket-friendly.
			</div>
		</div>
	)
}

export default About