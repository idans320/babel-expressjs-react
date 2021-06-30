import got from "got";
import express from "express";
import { WEATHER_API_URL } from "../shared/urls.js";
import regeneratorRuntime from "regenerator-runtime";

const API_KEY = "cd52bd66fc63430998092835213006";

const route = express.Router();

console.log(WEATHER_API_URL);

route.get("/current/:city", async (req, res) => {
	const city = req.params.city;
	const weather_response = (
		await got.get(WEATHER_API_URL, {
			searchParams: { key: API_KEY, q: city },
			responseType: "json",
		})
	).body;
	return res.send(weather_response);
});

export default route;
