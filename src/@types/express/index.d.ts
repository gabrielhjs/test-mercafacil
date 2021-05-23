interface User {
	id: number
	name: string
	email: string

	createdAt: Date
	updatedAt: Date
	lastLogin: Date
}


declare namespace Express {
	export interface Request {
		user?: User
	}
}