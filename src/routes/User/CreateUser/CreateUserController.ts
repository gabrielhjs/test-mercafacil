import { Request, Response } from "express"

import { IController } from "../../interfaces/IController"
import { IUseCase } from "../../interfaces/IUseCase"
import { ICreateUserDto } from "./CreateUserDto"


export class CreateUserController implements IController {
	constructor(
		private createUserUseCase: IUseCase<ICreateUserDto, string>
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const { name, email, password } = request.body

			if (!name || !email || !password) {
				return response.status(400).send({ error: "Name, email and password required" })
			}

			const data = await this.createUserUseCase.execute({ name, email, password })

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