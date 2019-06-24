import { Address } from 'cluster';
import { Company } from './company';

export interface User {
	id: Number;
	name: String;
	username: String;
	phone: String;
	email: String;
	website: String;
	address: Address;
	company: Company;
}
