import { Router } from "express"
import { authorizationMiddleware } from "../.."
import { postContactsMacapaController } from "./PostContactsMacapa"


const MacapaRouter = Router()


MacapaRouter.post("/contacts", authorizationMiddleware.handle, (request, response) => {
	return postContactsMacapaController.handle(request, response)
})


export { MacapaRouter }
