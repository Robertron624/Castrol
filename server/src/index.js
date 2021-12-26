import { config } from "dotenv";
import cookieParser from "cookie-parser";
import compression from "compression";
import { json, urlencoded } from "body-parser";
import { connectToMongoDB } from "./db/client";
import { setUpControllers } from "./controllers";
import cors from "cors";
const express = require("express");
const mongoose = require("mongoose");

const main = async () => {
	try {
		config();
		const PORT = process.env.PORT || 3001;
		const app = express();

		await connectToMongoDB();

		app.use(compression());
		app.use(cookieParser());
		app.use(urlencoded({ extended: false }));
		app.use(json());
		app.use(cors());

		app.get("/", (req, res) => {
			res.json({ message: "ok" });
		});

		setUpControllers(app);

		app.use((err, _req, res, _next) => {
			console.error(err);
			const statusCode = err.statusCode || 500;
			res.status(statusCode).json({ ...err });
		});

		app.listen(PORT, () => {
			console.log(`Servidor esperando por peticiones en el puerto ${PORT}`);
		});
	} catch (error) {
		console.error(error);
	}
};

main();
