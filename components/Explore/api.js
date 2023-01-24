import axios from "axios";

const { CancelToken } = axios;

const search =  (input) => {
	if (input) {
		try {
			const request = axios.get(`https://test.api.amadeus.com/v1/reference-data/locations/cities?countryCode=IN&keyword=DELHI&max=10`,{
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer rFlRNAA90QAcuAzI6X6IW6i6OOXX'
				}}
			);
			console.log(request);
			return {
				async process(callback) {
					request.then((response) => {
						const json = response.data;
				
						if (json && json.data) {
							callback(
								json.data.map(({ address }) => {
									return {
										city: address.cityName,
										code: address.cityCode,
										country: address.countryName,
										state: address.stateCode,
									};
								})
							);
						}
					});
				},
			};
		} catch (error) {
			console.error(error);
		}
	}
	return {
		process() {
			return [];
		},
	};
};


const getHotels = async (cityCode, checkInDate, checkOutDate) => {
	try {
		const response = await axios.get(
			`/api/hotels?cityCode=${cityCode}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
		);
		const json = response.data;
	
		if (json && json.data) {
			return json.data.map(({ hotel }) => hotel);
		}
	} catch (error) {
	  	console.error(error);
	}
	return [];
};

export { search, getHotels };