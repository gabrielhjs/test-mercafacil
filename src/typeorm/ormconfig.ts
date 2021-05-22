import { ConnectionOptions } from 'typeorm'


export =[
	{
		"name": "development",
		"type": "postgres",
		"url": `${process.env.DATABASE_URL}`,
		"logging": false,
		"entities": [
			"src/typeorm/models/*.ts"
		],
		"migrations": [
			"src/typeorm/migrations/postgres/*.ts"
		],
		"cli": {
			"migrationsDir": "src/typeorm/migrations/postgres"
		}
	} as ConnectionOptions,
	{
		"name": "production",
		"type": "postgres",
		"url": `${process.env.DATABASE_URL}`,
		"ssl": true,
		"extra": {
			"ssl": {
				"rejectUnauthorized": false
			}
		},
		"logging": false,
		"entities": [
			"dist/typeorm/models/*.js"
		],
		"migrations": [
			"dist/typeorm/migrations/*.js"
		],
		"cli": {
			"migrationsDir": "dist/typeorm/migrations"
		}
	} as ConnectionOptions
]