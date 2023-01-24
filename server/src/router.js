const { API_KEY, API_SECRET } = require("./config");
const Amadeus = require("amadeus");
const express = require("express");


// Create router
const router = express.Router();

// Create Amadeus API client
const amadeus = new Amadeus({
	clientId: API_KEY,
	clientSecret: API_SECRET,
});
const API = "api";

// City search suggestions
router.get(`/${API}/reference-data/locations`, async (req, res) => {
	try {
		const { keyword } = req.query;
		const response = await amadeus.referenceData.locations.get({
			keyword,
			subType: Amadeus.location.city,
		});
      
	 	res.json(JSON.parse(response.body));
	} catch (err) {
	  	res.json(err);
	}
});


// Querying hotels
router.get(`/${API}/hotels`, async (req, res) => {
	try {
		const { cityCode, checkInDate, checkOutDate } = req.query;
		const response = await amadeus.shopping.hotelOffers.get({
			cityCode,
			checkInDate,
			checkOutDate,
		});
	  	await res.json(JSON.parse(response.body));
	} catch (err) {
	  	await res.json(err);
	}
});

module.exports = router;