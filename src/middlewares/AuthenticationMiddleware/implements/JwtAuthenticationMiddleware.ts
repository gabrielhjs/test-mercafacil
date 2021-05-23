import jwt from "jsonwebtoken"

import { Request, Response, NextFunction } from "express"
import { IAuthenticationMiddleware } from "../IAuthenticationmiddleware"


export class JwtAuthenticationMiddleware implements IAuthenticationMiddleware {
	async handle(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
		const tokenData = {}
		let tokenError = undefined
		const authorization = request.headers.authorization

		if (!authorization) {
			return response.status(401).send({ error: "No token provided" })
		}

		const parts = authorization?.split(" ")

		if (!(parts.length === 2)) {
			return response.status(401).send({ error: "Token error" })
		}

		const [scheme, token] = parts

		if (!/^Bearer$/i.test(scheme)) {
			return response.status(401).send({ error: "Wrong token scheme" })
		}

		jwt.verify(token, process.env.APP_SECRET || "defaultSecretKey", (error, data) => {
			if (error) tokenError = error
			else Object.assign(tokenData, JSON.parse(data.data))
		})

		if (tokenError) return response.status(500).send({ error: tokenError })

		request.user = tokenData as User

		return next()
	}
}