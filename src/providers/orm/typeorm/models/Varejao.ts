import { Column } from "typeorm"
import { Varejao } from "../../../../entities/Varejao"
import { OrmBaseModel } from "./BaseModel"


export class OrmVarejao extends OrmBaseModel implements Varejao {
	@Column("varchar", { length: 100, nullable: false })
	nome!: string

	@Column("varchar", { length: 13, nullable: false })
	celular!: string
}
