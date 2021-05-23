import { Request, Response } from "express"
import { Contact } from "../../../entities/Contact"

import { IController } from "../../interfaces/IController"
import { IUseCase } from "../../interfaces/IUseCase"
import { IPostContactsVarejaoDto } from "./PostContactsVarejaoDto"


export class PostContactsVarejaoController implements IController {
	constructor(
		private getModulesUseCase: IUseCase<IPostContactsVarejaoDto, Contact[]>
	) { }
	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const { contacts } = request.body

			const data = await this.getModulesUseCase.execute({ contacts })

			if (data.error) {
				return response.status(400).send({ error: data.error })
			}

			return response.status(200).send(data.data)
		}
		catch (error) {
			console.log(error.message)
			return response.status(500).send(
				{ error: "Unexpected error." }
			)
		}
	}
}