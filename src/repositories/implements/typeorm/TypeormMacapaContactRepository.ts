import dotenv from "dotenv"
import { getRepository } from "typeorm"

import { Contact } from "../../../entities/Contact"
import { OrmMacapa } from "../../../providers/orm/implements/typeorm/models/mysql/Macapa"
import { IContactRepository } from "../../IContactRepository"


dotenv.config()


export class TypeormMacapaContactRepository implements IContactRepository {
	async save(contact: Contact): Promise<Contact> {
		const repository = getRepository(OrmMacapa, process.env.MYSQL_CONNECTION)
		const newContact = repository.create(contact)

		return await repository.save(newContact)
	}
}