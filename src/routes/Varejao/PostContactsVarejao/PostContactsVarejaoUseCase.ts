import { IContactRepository } from "../../../repositories/IContactRepository"
import { IUseCase, IUseCaseResponse } from "../../interfaces/IUseCase"
import { IPostContactsVarejaoDto } from "./PostContactsVarejaoDto"


export class PostContactsVarejaoUseCase implements IUseCase {
	constructor(
		private contactRepository: IContactRepository
	) { }
	async execute(data: IPostContactsVarejaoDto): Promise<IUseCaseResponse> {
		let error: string = ""
		const isInvalidData = data.contacts.some(function (contact) {
			const verification = contact.cellphone.match(/^\d{13}$/) === null
			if (verification) {
				error = `The contact name: ${contact.name} cellphone: ${contact.cellphone}, has cell phone in incorrect format.`
				return true
			}
		})

		if (isInvalidData) {
			return {
				error: error
			}
		}

		const response = data.contacts.map(async contact => {
			return await this.contactRepository.save({
				nome: contact.name,
				celular: contact.cellphone
			})
		})

		return { error: false, data: await Promise.all(response) }
	}
}