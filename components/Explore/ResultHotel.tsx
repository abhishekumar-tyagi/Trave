

const ResultHotel = ({ hotels }) => {
	return (
	  <div>
	    <h2>Results</h2>
	    <ul>
	      {hotels.map((hotel) => (
		<li key={hotel.property_code}>
		  {hotel.property_name} - {hotel.total_price.amount}
		</li>
	      ))}
	    </ul>
	  </div>
	);
};

export default ResultHotel