import { Router } from "express"
import { authorizationMiddleware } from "../.."
import { postContactsVarejaoController } from "./PostContactsVarejao"


const VarejaoRouter = Router()


VarejaoRouter.post("/", authorizationMiddleware.handle, (request, response) => {
	return postContactsVarejaoController.handle(request, response)
})


export { VarejaoRouter }
