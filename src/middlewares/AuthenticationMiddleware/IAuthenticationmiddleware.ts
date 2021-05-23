import { Request, Response, NextFunction } from "express"


export interface IAuthenticationMiddleware {
	handle(request: Request, response: Response, next: NextFunction): Promise<Response | void>
}