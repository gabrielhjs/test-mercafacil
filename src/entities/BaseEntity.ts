export class BaseEntity<Entity> {
	public id?: number

	constructor(props: Entity) {
		Object.assign(this, props)
	}
}