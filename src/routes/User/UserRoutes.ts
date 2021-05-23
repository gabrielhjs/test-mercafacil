import { Router } from "express"
import { authenticateUserController } from "./AuthenticateUser"
import { createUserController } from "./CreateUser"


const UserRouter = Router()


UserRouter.post("/create", (request, response) => {
	return createUserController.handle(request, response)
})

UserRouter.post("/login", (request, response) => {
	return authenticateUserController.handle(request, response)
})


export { UserRouter }