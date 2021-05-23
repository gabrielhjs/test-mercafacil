import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../../../entities/User"
import { IAuthenticationProvider } from "../IAuthenticationProvider"


export class BcryptJwtAuthenticationProvider implements IAuthenticationProvider {
	async getHashPassword(password: string): Promise<string> {
		return bcrypt.hash(password, 10)
			.catch((error: Error) => { throw new Error(error.message) })
			.then((hashPassword: string) => { return hashPassword })
	}

	async comparePassword(password: string, passwordHash: string): Promise<boolean> {
		return bcrypt.compare(password, passwordHash)
			.catch((error: Error) => { throw new Error(error.message) })
			.then((response: boolean) => { return response })
	}

	async getJwt(user: User): Promise<string> {
		const { password, ...userInfo } = user

		return jwt.sign(
			{ data: JSON.stringify(userInfo) },
			process.env.APP_SECRET || "defaultSecretKey",
			{ expiresIn: "1d" }
		)
	}
}
