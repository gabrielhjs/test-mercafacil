import dotenv from "dotenv"
import { getRepository } from "typeorm"

import { User } from "../../../entities/User"
import { OrmUser } from "../../../providers/orm/implements/typeorm/models/postgres/User"
import { IUserRepository } from "../../IUserRepository"


dotenv.config()


export class TypeormUserRepository implements IUserRepository {
	async save(user: User): Promise<User> {
		const repository = getRepository(OrmUser, process.env.POSTGRES_CONNECTION)
		const newUser = repository.create(user)

		return await repository.save(newUser)
	}

	async findByEmail(email: string): Promise<User | undefined> {
		const repository = getRepository(OrmUser, process.env.POSTGRES_CONNECTION)
		return await repository.findOne(
			{
				where: { email }, select: [
					"id",
					"name",
					"email",
					"password",
					"createdAt",
					"updatedAt",
					"lastLogin"
				]
			}
		)
	}
}