import { PrimaryGeneratedColumn } from "typeorm"
import { BaseEntity } from "../../../../entities/BaseEntity"


export class OrmBaseModel implements BaseEntity {
	@PrimaryGeneratedColumn()
	id?: number
}
