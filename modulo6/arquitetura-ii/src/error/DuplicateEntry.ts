import { CustomError } from './CustomError';

export class DuplicateEntry extends CustomError {
	constructor() {
		super(409,'The data you submitted is already registered within our database.');
	}
}