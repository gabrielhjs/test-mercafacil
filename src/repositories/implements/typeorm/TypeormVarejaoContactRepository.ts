import dotenv from "dotenv"
import { getRepository } from "typeorm"

import { Contact } from "../../../entities/Contact"
import { OrmVarejao } from "../../../providers/orm/typeorm/models/postgres/Varejao"
import { IContactRepository } from "../../IContactRepository"


dotenv.config()


export class TypeormVarejaoContactRepository implements IContactRepository {
	async save(contact: Contact): Promise<Contact> {
		const repository = getRepository(OrmVarejao, process.env.POSTGRES_CONNECTION)
		const newContact = repository.create(contact)

		return await repository.save(newContact)
	}
}