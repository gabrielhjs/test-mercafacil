import { Column, Entity } from "typeorm"
import { Macapa } from "../../../../entities/Macapa"
import { OrmBaseModel } from "./BaseModel"


@Entity()
export class OrmMacapa extends OrmBaseModel implements Macapa {
	@Column("varchar", { length: 200, nullable: false })
	nome!: string

	@Column("varchar", { length: 20, nullable: false })
	celular!: string
}
