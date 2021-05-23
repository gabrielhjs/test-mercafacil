import "reflect-metadata"
import cors from "cors"
import dotenv from "dotenv"

import { Connection } from "./providers/orm"
import { app } from "./app"


dotenv.config()


Connection.create("dev_postrgres_database")
Connection.create("dev_mysql_database")


app.use(cors())
app.listen(3333)
