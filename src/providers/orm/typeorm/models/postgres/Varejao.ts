import { Column, Entity } from "typeorm"
import { Contact } from "../../../../../entities/Contact"
import { OrmBaseModel } from "../BaseModel"


@Entity("contacts")
export class OrmVarejao extends OrmBaseModel implements Contact {
	@Column("varchar", { length: 100, nullable: false })
	nome!: string

	@Column("varchar", { length: 13, nullable: false })
	celular!: string
}
