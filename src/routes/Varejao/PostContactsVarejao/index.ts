import { TypeormVarejaoContactRepository } from "../../../repositories/implements/typeorm/TypeormVarejaoContactRepository"
import { PostContactsVarejaoController } from "./PostContactsVarejaoController"
import { PostContactsVarejaoUseCase } from "./PostContactsVarejaoUseCase"


const postContactsVarejaoController = new PostContactsVarejaoController(
	new PostContactsVarejaoUseCase(
		new TypeormVarejaoContactRepository()
	)
)


export { postContactsVarejaoController }
