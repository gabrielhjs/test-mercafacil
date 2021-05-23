interface IContact {
	name: string
	cellphone: string
}

interface IPostContactsVarejaoDto {
	contacts: IContact[]
}


export { IContact, IPostContactsVarejaoDto }