import { ConnectionOptions } from 'typeorm'


export const databases: ConnectionOptions[] = [
	{
		"name": "dev_postrgres_database",
		"type": "postgres",
		"url": `${process.env.POSTGRES_URL}`,
		"logging": false,
		"entities": [
			"src/typeorm/models/postgres/*.ts"
		],
		"migrations": [
			"src/typeorm/migrations/postgres/*.ts"
		],
		"cli": {
			"migrationsDir": "src/typeorm/migrations/postgres"
		}
	},
	{
		"name": "dev_mysql_database",
		"type": "mysql",
		"url": `${process.env.MYSQL_URL}`,
		"logging": false,
		"entities": [
			"src/typeorm/models/mysql/*.ts"
		],
		"migrations": [
			"src/typeorm/migrations/mysql/*.ts"
		],
		"cli": {
			"migrationsDir": "src/typeorm/migrations/mysql"
		}
	},
	{
		"name": "prod_postrgres_database",
		"type": "postgres",
		"url": `${process.env.POSTGRES_URL}`,
		"logging": false,
		"entities": [
			"dist/typeorm/models/postgres/*.js"
		],
		"migrations": [
			"dist/typeorm/migrations/postgres/*.js"
		],
		"cli": {
			"migrationsDir": "dist/typeorm/migrations/postgres"
		}
	},
	{
		"name": "prod_mysql_database",
		"type": "mysql",
		"url": `${process.env.MYSQL_URL}`,
		"logging": false,
		"entities": [
			"dist/typeorm/models/mysql/*.js"
		],
		"migrations": [
			"dist/typeorm/migrations/mysql/*.js"
		],
		"cli": {
			"migrationsDir": "dist/typeorm/migrations/mysql"
		}
	}
]