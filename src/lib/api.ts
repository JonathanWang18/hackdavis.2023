import { Client, Account, Databases, ID } from 'appwrite'

class Api {
	client: Client
	account: Account
	db: Databases

	constructor() {
		this.client = new Client()
			.setEndpoint('https://cloud.appwrite.io/v1')
			.setProject(process.env["NEXT_PUBLIC_PROJECT_ID"]!)

		this.account = new Account(this.client)
		this.db = new Databases(this.client)
	}
}

const api = new Api()
export function uuid() {
	return ID.unique()
}
export default api
