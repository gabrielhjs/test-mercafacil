import { BaseEntity } from "./BaseEntity"


export class Contact extends BaseEntity<Contact> {
	public nome!: string
	public celular!: string

	constructor(props: Contact) {
		super(props)
	}
}