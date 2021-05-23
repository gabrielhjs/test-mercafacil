import { TypeormMacapaContactRepository } from "../../../repositories/implements/typeorm/TypeormMacapaContactRepository"
import { PostContactsMacapaController } from "./PostContactsMacapaController"
import { PostContactsMacapaUseCase } from "./PostContactsMacapaUseCase"


const postContactsMacapaController = new PostContactsMacapaController(
	new PostContactsMacapaUseCase(
		new TypeormMacapaContactRepository()
	)
)


export { postContactsMacapaController }
