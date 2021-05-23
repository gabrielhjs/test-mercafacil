import { IAuthenticationProvider } from "../../../providers/authentication/IAuthenticationProvider"
import { IUserRepository } from "../../../repositories/IUserRepository"
import { IUseCase, IUseCaseResponse } from "../../interfaces/IUseCase"
import { IAuthenticateUserDto } from "./AuthenticateUserDto"


export class AuthenticateUserUseCase implements IUseCase<IAuthenticateUserDto, string> {
	constructor(
		private repository: IUserRepository,
		private authenticationProvider: IAuthenticationProvider
	) { }
	async execute(data: IAuthenticateUserDto): Promise<IUseCaseResponse<string>> {
		const user = await this.repository.findByEmail(data.email)

		if (
			!user ||
			!await this.authenticationProvider.comparePassword(data.password, user.password)
		) return { error: "Wrong email and/or password" }

		return { error: false, data: await this.authenticationProvider.getJwt(user) }
	}
}