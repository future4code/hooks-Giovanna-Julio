import { CustomError } from './CustomError';

export class NoResults extends CustomError {
	constructor() {
		super(404,'We cannot provide the requested data at this moment, please try again later.');
	}
}