import { BaseEntity } from "./BaseEntity"


export class User extends BaseEntity<User> {
	public createdAt?: Date
	public updatedAt?: Date
	public lastLogin?: Date

	public name!: string
	public email!: string
	public password!: string

	constructor(props: User) {
		super(props)
	}
}