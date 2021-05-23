import { IDto } from "./IDto"


interface IUseCaseResponse {
	data?: any
	error: boolean | string
}


interface IUseCase {
	execute(data: IDto): Promise<IUseCaseResponse>
}


export { IUseCase, IUseCaseResponse }
