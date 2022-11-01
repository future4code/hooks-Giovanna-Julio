import { CustomError } from './CustomError';

export class InvalidInput extends CustomError {
	constructor() {
		super(417,'The data you submitted is invalid. Please review your request.');
	}
}