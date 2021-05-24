import { Contact } from "../../../entities/Contact"
import { IContactRepository } from "../../../repositories/IContactRepository"
import { IUseCase, IUseCaseResponse } from "../../interfaces/IUseCase"
import { IPostContactsMacapaDto } from "./PostContactsMacapaDto"


export class PostContactsMacapaUseCase implements IUseCase<IPostContactsMacapaDto, Contact[]> {
  constructor(
    private contactRepository: IContactRepository
  ) { }
  async execute(data: IPostContactsMacapaDto): Promise<IUseCaseResponse<Contact[]>> {
    let error: string = ""
    const isInvalidData = data.contacts.some(function (contact) {
      const verification = contact.cellphone.match(/\d{2}\d{2}\d{5}\d{4}/) === null
      if (verification) {
        error = `The contact name: ${contact.name} cellphone: ${contact.cellphone}, has cell phone in incorrect format.`
        return true
      }
    })

    if (isInvalidData) {
      return {
        error: error
      }
    }

    const response = data.contacts.map(async contact => {
      return await this.contactRepository.save({
        nome: contact.name.toUpperCase(),
        celular: contact.cellphone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4")
      })
    })

    return { error: false, data: await Promise.all(response) }
  }
}