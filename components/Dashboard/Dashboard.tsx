import { GetStaticProps } from "next";
import { useSession, signOut } from "next-auth/react";



// export const getServerSideprops = async (context) => {
// 	const session = await getSession(context);

// 	return {
// 		props: {
// 			session,
// 		}
// 	}
// }

const Dashboard = () => {

	const {data: session} = useSession()
	const handleSignOut = () => {
		signOut({callbackUrl: '/'})
	}
	return(
		<div className=" w-full h-screen bg-dashboard bg-cover bg-center flex  justify-center items-center  bg-blend-multiply  bg-no-repeat">
			<div className="relative border-2 backdrop-blur-sm pl-20 pt-10  w-[75%] rounded-lg h-[80%] mt-[7vh] bg-black/20">
				{session ? 
					<div className="font-bold text-5xl">
						{session?.user?.name}
					</div>
					: 
					<>
						bleh
					</>
				}
				{session ? 
					<div className="text-xl mt-4">
						{session?.user?.email}
					</div>: 
					<>
						bleh
					</>
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
				<div className="absolute right-0 bottom-0 pb-10 pr-10">
					<div onClick={() => handleSignOut()} className="bg-white text-black border-2 cursor-pointer w-32 flex flex-row items-center justify-center pt-2 pb-2 rounded-lg">
						Sign Out
					</div>
				</div>
				
				{/* <div className="absolute right-0 bottom-0 pb-10 pr-10 cursor-pointer">
					<img src="/images/Edit.svg" alt="edit" draggable="false" />
				</div> */}
			</div>
		</div>
	)
}


export default Dashboard