
import { useSession } from "next-auth/react";
import router, { useRouter } from "next/router";






const Dashboard = () => {
	const {data: session} = useSession()

	
	return(
		<div className=" w-full h-screen  bg-dashboard bg-cover md:bg-center flex  justify-center items-center  bg-blend-multiply  bg-no-repeat">
			<div className="relative border-2 backdrop-blur-sm md:pl-20 pl-5 md:pt-10 pt-5  md:w-[75%] w-[90%] rounded-lg h-[80%] mt-[7vh] bg-black/20">
				{session &&
					<div className="font-bold md:text-5xl text-3xl">
						{session?.user?.name}
					</div>
				 }
				{session && 
					<div className="text-xl md:mt-4 mt-2">
						{session?.user?.email}
					</div>
				}			
				{/* <div className="flex flex-row gap-4 mt-20 text-xl">
					<div>
						Male
					</div>
					<img src="/images/Ellipse.svg" alt="dot" draggable="false" />
					<div>
						26-04-02
					</div>
				</div>
				<div className="text-xl mt-5">
					🇮🇳 India 
				</div> */}
				<div onClick={() => router.push('/app/edit')} className="absolute right-0 bottom-0 md:pb-10 pb-5 pr-5 md:pr-10 cursor-pointer">
					<div className="  border-2 flex flex-row items-center justify-center rounded-lg p-1 pl-4 pr-4 text-lg" >
						Edit
					</div>
				</div>
			</div>
		</div>
	)
}


export default Dashboard



