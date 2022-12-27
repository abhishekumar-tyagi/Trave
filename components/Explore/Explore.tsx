import { useState } from "react"



const Explore = () => {
	const [selected, setSelected] = useState(1);
	const [inputM1, setInputM1] =  useState('');
	const [inputR1, setInputR1] =  useState('');
	const [inputR2, setInputR2] = useState('');
	const [inputH1, setInputH1] =  useState('');
	const [inputH2, setInputH2] = useState('');
	const [apiOutput1, setApiOutput1] = useState('');
	const [apiOutput2, setApiOutput2] = useState('');
	const [apiOutput3, setApiOutput3] = useState('');
	const [isGenerating1, setIsGenerating1] = useState(false);
	const [isGenerating2, setIsGenerating2] = useState(false);
	const [isGenerating3, setIsGenerating3] = useState(false);
	
	const handleSelect = (e) => {
		setSelected(e)
	};

	const toggleInputM1 = (e) => {
		setInputM1(e.target.value);
	};
	const toggleInputR1 = (e) => {
		setInputR1(e.target.value);
	};
	const toggleInputR2 = (e) => {
		setInputR2(e.target.value);
	};
	const toggleInputH1 = (e) => {
		setInputH1(e.target.value);
	};
	const toggleInputH2 = (e) => {
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
		if (inputH1 === undefined && inputH2 === undefined) {
			setApiOutput2("Enter the about values!");
			setIsGenerating2(false);
		} else {
			const response = await fetch('/api/assistant/hotel', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ inputH1, inputH2 }),
			});
			const data = await response.json();
			console.log(data);
			const { output } = data;
			console.log("OpenAI replied...", output.text)
		
			setApiOutput2(`${output.text}`);
			setIsGenerating2(false);	
		}
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
		<div className="flex flex-col gap-10 h-screen items-center justify-start pt-[12vh] ">
			<div className=" bg-explore w-[60%] rounded-lg  flex flex-col justify-center items-center bg-blend-multiply bg-black/30  bg-center bg-cover h-[30%]">
				<div className="text-6xl font-bold ">
					Travel Beyond Explored.
				</div>	
			</div>
			<div className="flex flex-row gap-8 text-xl">
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
				<>
					<input 
						placeholder="Enter the City"
						value={inputM1}
						onChange={toggleInputM1}
						className="rounded-lg border-2 border-[#C4C4C4] bg-[#D6D6D6] bg-opacity-25 w-96 p-2 focus:outline-none" 
					/>
					<div onClick={callGenerateMonuments} className={isGenerating1 ? "bg-white text-black font-medium cursor-pointer w-36 flex flex-row items-center justify-center pt-2 pb-2 rounded-lg" : "bg-white text-black  cursor-pointer w-36 flex flex-row items-center justify-center pt-2 pb-2 font-medium rounded-lg"}>
						{isGenerating1 ? <p className="">Wait</p> : <p>Find Monuments</p>}
					</div>
					{apiOutput1 && (
						<div className="w-auto flex flex-col -mt-10  justify-start  whitespace-pre-line text-xl font-medium  ">
							{apiOutput1}
						</div>
					)}		
				</>
			)}
			{selected === 2 && (
				<>
					<div className="flex flex-row gap-6">
						<input 
							placeholder="Enter the City"
							value={inputH1}
							onChange={toggleInputH1}
							className="rounded-lg border-2 border-[#C4C4C4] bg-[#D6D6D6] bg-opacity-25 w-96 p-2 focus:outline-none" 
						/>
						<input 
							placeholder="Enter your Preference"
							value={inputH2}
							onChange={toggleInputH2}
							className="rounded-lg border-2 border-[#C4C4C4] bg-[#D6D6D6] bg-opacity-25 w-96 p-2 focus:outline-none" 
						/>
					</div>
					<div onClick={callGenerateHotels} className={isGenerating2 ? "bg-white text-black font-medium loading  cursor-pointer w-36 flex flex-row items-center justify-center pt-2 pb-2 rounded-lg" : "bg-white text-black  cursor-pointer w-36 flex flex-row items-center justify-center pt-2 pb-2 font-medium rounded-lg"}>
						{isGenerating2 ? <p className="">Wait</p> : <p>Find Hotels</p>}
					</div>
					{apiOutput2 && (
						<div className="w-auto flex flex-col items-center transform-none whitespace-pre-line text-xl font-medium ">
							{apiOutput2}
						</div>
					)}		
				</>
			)}
			{selected === 3 && (
				<>
					<div className="flex flex-row gap-6">	
						<input 
							placeholder="Enter the City"
							value={inputR1}
							onChange={toggleInputR1}
							className="rounded-lg border-2 border-[#C4C4C4] bg-[#D6D6D6] bg-opacity-25 w-96 p-2 focus:outline-none" 
						/>
						<input 
							placeholder="Enter your Preference"
							value={inputR2}
							onChange={toggleInputR2}
							className="rounded-lg border-2 border-[#C4C4C4] bg-[#D6D6D6] bg-opacity-25 w-96 p-2 focus:outline-none" 
						/>
					</div>
					<div onClick={callGenerateRestaurants} className={isGenerating3 ? "bg-white text-black font-medium loading  cursor-pointer w-36 flex flex-row items-center justify-center pt-2 pb-2 rounded-lg" : "bg-white text-black  cursor-pointer w-36 flex flex-row items-center justify-center pt-2 pb-2 font-medium rounded-lg"}>
						{isGenerating3 ? <p className="">Wait</p> : <p>Find Restaurants</p>}
					</div>
					{apiOutput3 && (
						<div className="w-auto flex flex-col items-center  whitespace-pre-line text-xl font-medium ">
							{apiOutput3}
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default Explore