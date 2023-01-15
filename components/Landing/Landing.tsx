import router from "next/router";



const Landing = () => {
	return (
		<>
			<div className="flex flex-col items-center gap-4 justify-center h-screen ">
				<div className="font-bold lg:text-7xl text-4xl md:text-6xl flex flex-col text-center leading-tight ">
					<span>
						Explore India.
					</span>
					<span>
						Beyond Ordinary.
					</span>
				</div>
				<div className="lg:text-xl md:w-[60%] lg:w-[50%] sm:w-[80%]  text-sm md:text-lg text-center">
					We’re bringing a new path to travel and discover the beauty of India - Uncover Spectacular Destinations and Find Affordable Travel Deals! 
				</div>
				<div onClick={() => router.push('/app/explore')} className="bg-white text-black  cursor-pointer   w-32 flex flex-row items-center justify-center pt-2 pb-2 rounded-lg">
					Start Booking
				</div>
			</div>
		</>
		
	)
}

export default Landing;