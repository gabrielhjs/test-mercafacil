import { BcryptJwtAuthenticationProvider } from "../../../providers/authentication/implements/BcryptJwtAuthenticationProvider"
import { TypeormUserRepository } from "../../../repositories/implements/typeorm/TypeormUserRepository"
import { AuthenticateUserController } from "./AuthenticateUserController"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"


const authenticateUserController = new AuthenticateUserController(
	new AuthenticateUserUseCase(
		new TypeormUserRepository(),
		new BcryptJwtAuthenticationProvider()
	)
)

export { authenticateUserController }