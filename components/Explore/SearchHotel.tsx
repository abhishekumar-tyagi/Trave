import { useState } from "react";
import ResultHotel from "./ResultHotel";




const SearchHotel = () => {
	const [location, setLocation] = useState('');
	const [checkin, setCheckin] = useState('');
	const [checkout, setCheckout] = useState('');
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	      
		try {
			const response = await fetch(
				`https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?apikey=9SfCcotomv2uUIqxWUYX0DE1Koxl&location=${location}&check_in=${checkin}&check_out=${checkout}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer 9SfCcotomv2uUIqxWUYX0DE1Koxl',
					},
				}
			);
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const data = await response.json();
			setHotels(data.results);
			console.log(hotels);
		} catch (error) {
			
		  	console.error(error);
		}
	};
	return (
		 <div>
			<form onSubmit={handleSubmit}>
				<label>
					Location
				</label>
				<input 
					type="text" 
					name="location"
					value={location}
					onChange={(e) => setLocation(e.target.value)} 
				/>
				<label>
					Check-in
				</label>
				<input 
					type="date" 
					name="checkin"
					value={checkin}
					onChange={(e) => setCheckin(e.target.value)}
				/>
				<label>
					Check-out
				</label>
				<input 
					type="date" 
					name="checkout"
					value={checkout}
					onChange={(e) => setCheckout(e.target.value)}
				/>
				<input type="submit" value="Search" />
			</form>
			{hotels.length > 0 && <ResultHotel hotels={hotels} />}
		</div>
	)
}

export default SearchHotel



