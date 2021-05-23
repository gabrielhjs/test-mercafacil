import { Request, Response } from "express"

import { IController } from "../../interfaces/IController"
import { IUseCase } from "../../interfaces/IUseCase"
import { IAuthenticateUserDto } from "./AuthenticateUserDto"


export class AuthenticateUserController implements IController {
	constructor(
		private authenticateUserUseCase: IUseCase<IAuthenticateUserDto, string>
	) { }
	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const { email, password } = request.body

			if (!email || !password) {
				return response.status(400).send({ error: "Email and password are required" })
			}

			const data = await this.authenticateUserUseCase.execute({ email, password })

			if (data.error) {
				return response.status(400).send({ error: data.error })
			}

			return response.status(200).send({ token: data.data })
		}
		catch (error) {
			console.log(error.message)
			return response.status(500).send(
				{ error: "Unexpected error." }
			)
		}
	}
}