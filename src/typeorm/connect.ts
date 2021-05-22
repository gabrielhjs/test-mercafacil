import { createConnection, getConnection } from 'typeorm'
import dotenv from "dotenv"

import config from "./ormconfig"


dotenv.config()


export const typeormConnection = {
	async create(connectionName: string) {
		const connection = config.find(connection => connection.name === connectionName)

		if (connection !== undefined) {
			createConnection(connection).then(() => {
				console.log(`Connection: (${connectionName}) is connected`)
			})
		}

		else {
			throw new Error(`Connection: (${connectionName}) does not exists`)
		}
	},

	async close(connectionName: string) {
		getConnection(connectionName).close().then(() => {
			console.log(`Connection: (${connectionName}) is disconnected`)
		})
	},

	async clear(connectionName: string) {
		const connection = getConnection(connectionName)
		const entities = connection.entityMetadatas

		entities.forEach(async (entity) => {
			const repository = connection.getRepository(entity.name)
			await repository.query(`DELETE FROM ${entity.tableName}`)
		})
	},
}
