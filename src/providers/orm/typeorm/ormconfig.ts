import { ConnectionOptions } from 'typeorm'
import dotenv from "dotenv"


dotenv.config()


export =[
	{
		"name": "dev_postgres_database",
		"type": "postgres",
		"url": `${process.env.POSTGRES_URL}`,
		"logging": false,
		"entities": [
			"src/providers/orm/typeorm/models/postgres/*.ts"
		],
		"migrations": [
			"src/providers/orm/typeorm/migrations/postgres/*.ts"
		],
		"cli": {
			"migrationsDir": "src/providers/orm/typeorm/migrations/postgres"
		}
	} as ConnectionOptions,
	{
		"name": "dev_mysql_database",
		"type": "mysql",
		"url": `${process.env.MYSQL_URL}`,
		"logging": false,
		"entities": [
			"src/providers/orm/typeorm/models/mysql/*.ts"
		],
		"migrations": [
			"src/providers/orm/typeorm/migrations/mysql/*.ts"
		],
		"cli": {
			"migrationsDir": "src/providers/orm/typeorm/migrations/mysql"
		}
	} as ConnectionOptions,
	{
		"name": "prod_postrgres_database",
		"type": "postgres",
		"url": `${process.env.POSTGRES_URL}`,
		"logging": false,
		"entities": [
			"dist/providers/orm/typeorm/models/postgres/*.js"
		],
		"migrations": [
			"dist/providers/orm/typeorm/migrations/postgres/*.js"
		],
		"cli": {
			"migrationsDir": "dist/providers/orm/typeorm/migrations/postgres"
		}
	} as ConnectionOptions,
	{
		"name": "prod_mysql_database",
		"type": "mysql",
		"url": `${process.env.MYSQL_URL}`,
		"logging": false,
		"entities": [
			"dist/providers/orm/typeorm/models/mysql/*.js"
		],
		"migrations": [
			"dist/providers/orm/typeorm/migrations/mysql/*.js"
		],
		"cli": {
			"migrationsDir": "dist/providers/orm/typeorm/migrations/mysql"
		}
	} as ConnectionOptions
]