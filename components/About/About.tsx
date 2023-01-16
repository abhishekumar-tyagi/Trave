import router from "next/router"



const About = () => {
	return (
		<div className="w-full h-full  ">
			<div className="bg-about bg-cover relative bg-center bg-blend-multiply bg-black/40 h-screen w-full flex flex-col items-center justify-center   ">
				<div className="text-3xl">
					Make your experience of travelling India
				</div>
				<div className="text-7xl font-semibold">
					Smarter, Smoother and Simpler.
				</div>
				<div className="absolute bottom-0 pb-5">
					S C R O L L
				</div> 
			</div>
			<div className="mx-auto w-[75%] flex flex-col gap-[20vh] mt-[20vh] pb-5">
				<div className="flex flex-row bg-white rounded-lg text-black items-center w-full justify-center h-[10%] ">
					<div className="w-full  text-xl p-7 flex flex-col gap-5 ">
						<div className="text-6xl font-semibold ">
							One Stop Shop
						</div>
						<div>
							We aim at providing services as a one stop destination for all your travel (or not) related worries, and focus on <span className="underline underline-offset-2 ">customer-centric</span> choices and preferences to provide with the most personalised package. 
						</div>
						<div>
							We are not just restricted to booking hotels for you but also cabs, buses, locally famous restaurants and cafes of the destination.
						</div>
					</div>
					<div className="w-[50%] p-5   flex justify-end">
						<img src="/images/goa.jpeg" className="h-[60vh]  rounded-lg"/>
					</div>
				</div>
				<div className="flex flex-row bg-white rounded-lg text-black items-center w-full justify-center h-[10%] ">
					<div className="w-[50%] p-5   flex justify-end">
						<img src="/images/market.jpeg" className="h-[60vh]  rounded-lg"/>
					</div>
					<div className="w-full   text-xl p-7 flex flex-col gap-5 ">
						<div className="text-6xl  font-semibold  ">
							Virtual Guide
						</div>
						<div>
							Our amazing chatbot <span className="font-semibold underline underline-offset-2 cursor-pointer text-blue-400" onClick={() => router.push("/app/chat")}>CHLOE</span> will help and guide you through everything you require, from getting information about 5 star chai stalls to info about museums, monuments- you name it.
						</div>
						<div>
							Language barrier? dont worry, CHLOE will help out by converting your speech in the native language of your location.
						</div>
					</div>
				</div>
				<div className="flex flex-row bg-white rounded-lg text-black items-center w-full justify-center h-[10%] ">
					<div className="w-full  text-xl p-7 flex flex-col gap-5 ">
						<div className="text-6xl font-semibold ">
							Want to explore your own city ?
						</div>
						<div>
							We have got your back. We scavenge through each corner of the city to bring forth the best results to you. Want to explore public parks in the city? which has a horror past? or explore museums? but not the famous ones? we will find it for you. 
						</div>
						<div>
							The best cafes, restaurants, malls, arcades, street shops, movie theatres, all in your city or anywhere else you desire.
						</div>
					</div>
					<div className="w-[50%] p-5   flex justify-end">
						<img src="/images/delhi.jpeg" className="h-[60vh]  rounded-lg"/>
					</div>
				</div>
				<div className=" bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-lg flex text-xl p-10  gap-5 flex-col text-gray-600 items-center w-full justify-center h-[10%] ">
					<div className="text-4xl font-semibold ">
						What we will be coming up soon with ?
					</div>
					<div className="flex flex-row items-center text-lg gap-5 text-gray-800">
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
			<div className="flex justify-center mt-[15vh] pb-10 text-xl text-gray-500">
				Our AI-driven services will help you provide the best-experience travelling along with being pocket-friendly.
			</div>
		</div>
	)
}

export default About