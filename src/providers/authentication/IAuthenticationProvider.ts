import { User } from "../../entities/User";

export interface IAuthenticationProvider {
	getHashPassword(password: string): Promise<string>
	comparePassword(password: string, passwordHash: string): Promise<boolean>
	getJwt(user: User): Promise<string>
}