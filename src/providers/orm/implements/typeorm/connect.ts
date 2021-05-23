import { ConnectionOptions, createConnection, getConnection } from 'typeorm'

import databases from "./ormconfig"


export const typeormConnection = {
	async create(connectionName: string) {
		const connection = databases.find(connection => connection.name === connectionName)

		if (connection !== undefined) {
			createConnection(connection as ConnectionOptions).then(() => {
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
