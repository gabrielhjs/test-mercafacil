import { User } from "../../../entities/User"
import { IAuthenticationProvider } from "../../../providers/authentication/IAuthenticationProvider"
import { IUserRepository } from "../../../repositories/IUserRepository"
import { IUseCase, IUseCaseResponse } from "../../interfaces/IUseCase"
import { ICreateUserDto } from "./CreateUserDto"


export class CreateUserUseCase implements IUseCase<ICreateUserDto, string> {
	constructor(
		private repository: IUserRepository,
		private authenticationProvider: IAuthenticationProvider
	) { }
	async execute(data: ICreateUserDto): Promise<IUseCaseResponse<string>> {

		if (await this.repository.findByEmail(data.email)) {
			return { error: "User already exists." }
		}

		const user = await this.repository.save(new User({
			name: data.name,
			email: data.email,
			password: await this.authenticationProvider.getHashPassword(data.password),
			lastLogin: new Date()
		}))

		console.log(user)

		return {
			error: false, data: await this.authenticationProvider.getJwt(user)
		}
	}
}