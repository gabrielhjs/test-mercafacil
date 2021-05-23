interface IContact {
	name: string
	cellphone: string
}

interface IPostContactsMacapaDto {
	contacts: IContact[]
}


export { IContact, IPostContactsMacapaDto }