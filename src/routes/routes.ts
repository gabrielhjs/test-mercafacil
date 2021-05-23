import { Router } from "express"


const router = Router()


router.get("/status", (_, response) => {
	return response.status(200).send({ status: "ok" })
})


export { router }
