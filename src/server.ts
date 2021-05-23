import "reflect-metadata"
import cors from "cors"
import dotenv from "dotenv"

import { Connection } from "./providers/orm"
import { app } from "./app"


dotenv.config()


Connection.create(process.env.POSTGRES_CONNECTION || "default_postgres_connection")
Connection.create(process.env.MYSQL_CONNECTION || "default_mysql_connection")


app.use(cors())
app.listen(3333)
