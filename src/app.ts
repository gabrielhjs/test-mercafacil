import express from "express"
import { Request, Response } from "express"
import compression from "compression"

import { router } from "./routes"


const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression({
	filter: (request: Request, response: Response) => {
		if (request.headers['x-no-compression']) { return false }
		return compression.filter(request, response)
	}
}))
app.use((_, response, next) => {
	response.header("Access-Control-Allow-Origin", `${process.env.HOST}`)
	response.header("Access-Control-Allow-Headers", "X-Requested-With")
	next();
});


app.use("/", router)


export { app }