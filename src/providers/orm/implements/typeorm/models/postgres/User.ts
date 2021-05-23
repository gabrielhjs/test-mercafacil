import { Column, CreateDateColumn, Entity, UpdateDateColumn } from "typeorm"
import { User } from "../../../../../../entities/User"
import { OrmBaseModel } from "../BaseModel"


@Entity("users")
export class OrmUser extends OrmBaseModel implements User {
	@CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
	createdAt!: Date

	@UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
	updatedAt!: Date

	@Column("timestamp")
	lastLogin!: Date

	@Column("varchar", { length: 255, nullable: false })
	name!: string

	@Column("varchar", { length: 255, nullable: false })
	email!: string

	@Column("varchar", { select: false, nullable: false })
	password!: string
}