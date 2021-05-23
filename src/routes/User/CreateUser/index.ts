import { BcryptJwtAuthenticationProvider } from "../../../providers/authentication/implements/BcryptJwtAuthenticationProvider"
import { TypeormUserRepository } from "../../../repositories/implements/typeorm/TypeormUserRepository"
import { CreateUserController } from "./CreateUserController"
import { CreateUserUseCase } from "./CreateUserUseCase"


const createUserController = new CreateUserController(
	new CreateUserUseCase(
		new TypeormUserRepository(),
		new BcryptJwtAuthenticationProvider()
	)
)


export { createUserController }