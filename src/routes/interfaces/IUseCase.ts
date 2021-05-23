interface IUseCaseResponse<IResponse> {
	data?: IResponse
	error: boolean | string
}


interface IUseCase<IDto, IResponse> {
	execute(data: IDto): Promise<IUseCaseResponse<IResponse>>
}


export { IUseCase, IUseCaseResponse }
