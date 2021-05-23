import { Column, Entity } from "typeorm"
import { Contact } from "../../../../../entities/Contact"
import { OrmBaseModel } from "../BaseModel"


@Entity("contacts")
export class OrmMacapa extends OrmBaseModel implements Contact {
	@Column("varchar", { length: 200, nullable: false })
	nome!: string

	@Column("varchar", { length: 20, nullable: false })
	celular!: string
}
