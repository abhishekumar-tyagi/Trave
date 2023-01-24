import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, SetStateAction, useState } from "react"
import SearchHotel from "./SearchHotel";
import ResultHotel from "./ResultHotel";
import Link from "next/link";



const Explore = () => {
	const [selected, setSelected] = useState(1);
	const [inputM1, setInputM1] =  useState('');
	const [inputR1, setInputR1] =  useState('');
	const [inputR2, setInputR2] = useState('');
	const [inputH1, setInputH1] =  useState('');
	const [inputH2, setInputH2] = useState('');
	const [apiOutput1, setApiOutput1] = useState('');
	const [hotels, setHotels] = useState([]);
	const [apiOutput3, setApiOutput3] = useState('');
	const [isGenerating1, setIsGenerating1] = useState(false);
	const [isGenerating2, setIsGenerating2] = useState(false);
	const [isGenerating3, setIsGenerating3] = useState(false);
	
	const handleSelect = (e: SetStateAction<number>) => {
		setSelected(e)
	};

	const toggleInputM1 = (e: { target: { value: SetStateAction<string>; }; }) => {
		setInputM1(e.target.value);
	};
	const toggleInputR1 = (e: { target: { value: SetStateAction<string>; }; }) => {
		setInputR1(e.target.value);
	};
	const toggleInputR2 = (e: { target: { value: SetStateAction<string>; }; }) => {
		setInputR2(e.target.value);
	};
	const toggleInputH1 = (e: { target: { value: SetStateAction<string>; }; }) => {
		setInputH1(e.target.value);
	};
	const toggleInputH2 = (e: { target: { value: SetStateAction<string>; }; }) => {
		setInputH2(e.target.value);
	};

	const callGenerateMonuments = async () => {
		setIsGenerating1(true);
		
		console.log("Calling OpenAI...")
		const response = await fetch('/api/assistant/monument', {
		  	method: 'POST',
		  	headers: {
		    		'Content-Type': 'application/json',
		  	},
		  	body: JSON.stringify({ inputM1 }),
		});
		const data = await response.json();
		console.log(data);
		const { output } = data;
		console.log("OpenAI replied...", output.text)
	    
		setApiOutput1(`${output.text}`);
		setIsGenerating1(false);
	}

	const callGenerateHotels = async () => {
		setIsGenerating2(true);
		
		console.log("Calling OpenAI...")
		
		const response = await fetch('/api/assistant/hotel', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ inputH1, inputH2 }),
		});
		console.log(response);
		const data = await response.json();
		console.log(data);
		const { hotels } = data;
		console.log("OpenAI replied...", hotels)
		
		setHotels(hotels);
		console.log(hotels)
		setIsGenerating2(false);	
	}

	const callGenerateRestaurants = async () => {
		setIsGenerating3(true);
		
		console.log("Calling OpenAI...")
		const response = await fetch('/api/assistant/restaurant', {
		  	method: 'POST',
		  	headers: {
		    		'Content-Type': 'application/json',
		  	},
		  	body: JSON.stringify({ inputR1, inputR2 }),
		});
		const data = await response.json();
		console.log(data);
		const { output } = data;
		console.log("OpenAI replied...", output.text)
	    
		setApiOutput3(`${output.text}`);
		setIsGenerating3(false);
	}

	return (
		<div className="flex flex-col md:gap-10 gap-8 h-full w-full  items-center justify-start pt-[12vh] ">
			<div className=" bg-explore lg:w-[60%] w-full md:rounded-lg  flex flex-col justify-center items-center bg-blend-multiply bg-black/30  bg-center bg-cover md:h-[20%] p-8 md:p-0">
				<div className="md:text-6xl text-2xl font-bold  ">
					Travel Beyond Explored.
				</div>	
			</div>
			<div className="flex flex-row gap-8 md:text-xl ">
				<div  onClick={() => handleSelect(1)} className={selected === 1 ? "underline underline-offset-8 cursor-pointer" : "cursor-pointer"}>
					Monuments
				</div>
				<div  onClick={() => handleSelect(2)} className={selected === 2 ? "underline underline-offset-8 cursor-pointer" : "cursor-pointer"}>
					Hotels
				</div>
				<div  onClick={() => handleSelect(3)} className={selected === 3 ? "underline underline-offset-8 cursor-pointer" : "cursor-pointer"}>
					Restaurants
				</div>
			</div>
			{selected === 1 && (
				<div className="flex flex-col items-center gap-5 w-full ">
					<input 
						placeholder="Enter the City"
						value={inputM1}
						onChange={toggleInputM1}
						className="rounded-lg border-2 border-[#C4C4C4] bg-[#D6D6D6] bg-opacity-25 md:w-96 w-[90%] p-2 focus:outline-none" 
					/>
					{inputM1 ? <div onClick={callGenerateMonuments} className={isGenerating1 ? "bg-white text-black font-medium cursor-pointer w-36 flex flex-row items-center justify-center pt-2 pb-2 rounded-lg" : "bg-white text-black  cursor-pointer w-36 flex flex-row items-center justify-center pt-2 pb-2 font-medium rounded-lg"}>
						{isGenerating1 ? <p className="">Searching...</p> : <p>Find Monuments</p>}
					</div>:<></>}
					{apiOutput1 && (
						<div className="md:w-auto w-[90%] flex flex-col -mt-10  justify-start  whitespace-pre-line md:text-xl font-medium  ">
							{apiOutput1}
						</div>
					)}		
				</div>
			)}
			{selected === 2 && (
				<div className="flex flex-col items-center gap-5 w-full ">
					<div className="flex md:flex-row flex-col w-full justify-center items-center gap-6">
						<input 
							placeholder="Enter the City"
							value={inputH1}
							onChange={toggleInputH1}
							className="rounded-lg border-2 border-[#C4C4C4] bg-[#D6D6D6] bg-opacity-25 md:w-96 w-[90%] p-2 focus:outline-none" 
						/>
						<input 
							placeholder="Enter your Preference"
							value={inputH2}
							onChange={toggleInputH2}
							className="rounded-lg border-2 border-[#C4C4C4] bg-[#D6D6D6] bg-opacity-25 md:w-96 w-[90%] p-2 focus:outline-none" 
						/>
					</div>
					{inputH1 ? <div onClick={callGenerateHotels} className={isGenerating2 ? "bg-white text-black font-medium loading  cursor-pointer w-36 flex flex-row items-center justify-center pt-2 pb-2 rounded-lg" : "bg-white text-black  cursor-pointer w-36 flex flex-row items-center justify-center pt-2 pb-2 font-medium rounded-lg"}>
						{isGenerating2 ? <p className="">Searching...</p> : <p>Find Hotels</p>}
					</div> : <></>}
					
					{hotels && (
						<div className="grid md:grid-cols-3 grid-cols-1 lg:gap-10 md:gap-5 gap-10 p-5">
							{hotels.map((hotel: { index: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; location: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
								<div key={hotel.index} className="bg-white text-black rounded-lg p-4 flex flex-col gap-10">
									{/* <img src="/images/goa.jpeg" /> */}
									<div className="flex flex-col gap-2">
										<div className="text-3xl font-semibold">{hotel.name}</div>
										<div className="">{hotel.location}</div>
									</div>
									{/* <Link href="https://wa.me/8178297068?text=Hello%20there!"> */}
										<button className="border-black border pt-2 pb-2 pl-4 pr-4">
											Book Now
										</button>
									{/* </Link> */}	
								</div>
							))}
						</div>	
					)}
				</div>
			)}
			{selected === 3 && (
				<div className="flex flex-col items-center gap-5 w-full ">
					<div className="flex md:flex-row flex-col w-full justify-center  items-center gap-6">	
						<input 
							placeholder="Enter the City"
							value={inputR1}
							onChange={toggleInputR1}
							className="rounded-lg border-2 border-[#C4C4C4] bg-[#D6D6D6] bg-opacity-25 md:w-96 w-[90%] p-2 focus:outline-none" 
						/>
						<input 
							placeholder="Enter your Preference"
							value={inputR2}
							onChange={toggleInputR2}
							className="rounded-lg border-2 border-[#C4C4C4] bg-[#D6D6D6] bg-opacity-25 md:w-96 w-[90%] p-2 focus:outline-none" 
						/>
					</div>
					{ inputR1 ? <div onClick={callGenerateRestaurants} className={isGenerating3 ? "bg-white text-black font-medium loading  cursor-pointer w-36 flex flex-row items-center justify-center pt-2 pb-2 rounded-lg" : "bg-white text-black  cursor-pointer w-36 flex flex-row items-center justify-center pt-2 pb-2 font-medium rounded-lg"}>
						{isGenerating3 ? <p className="">Searching...</p> : <p>Find Restaurants</p>}
					</div> : <></>}
					{apiOutput3 && (
						<div className="md:w-auto w-[90%]  flex flex-col -mt-10 items-center  whitespace-pre-line md:text-xl font-medium ">
							{apiOutput3}
						</div>
					)}
				</div>
			)}

			
		</div>
	)
}

export default Explore

// import dayjs from "dayjs";


// const Explore = () => {
// 	const [cityCode, setCityCode] = useState(null);
// 	const [checkInDate, setCheckInDate] = useState(dayjs());
// 	const [checkOutDate, setCheckOutDate] = useState(dayjs().add(1, "day"));
// 	return (
// 		<div>
// 			<SearchHotel setCityCode={setCityCode} />
// 		</div>
// 	)
// }


// export default Explore