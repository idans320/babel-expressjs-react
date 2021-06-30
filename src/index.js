import { createProxyMiddleware } from "http-proxy-middleware";
import path from "path";
import express from "express";
import weather from "./routes/weather.js";

const app = express();

app.use("/api/weather", weather);

const filter = (pathname) => {
	return !pathname.match("^/api");
};

if (!process.env.NODE_ENV || process.env.NODE_ENV == "production")
	app.use("/", express.static(path.join(__dirname, "../client/build")));
else {
	app.use(
		createProxyMiddleware(filter, {
			target: "http://localhost:3000",
			changeOrigin: true,
		})
	);
}

app.listen(8080);
