import { UserDatabase } from '../data/UserDatabase';
import { CustomError } from '../error/CustomError';
import { DuplicateEntry } from '../error/DuplicateEntry';
import { InvalidInput } from '../error/InvalidInput';
import { NoResults } from '../error/NoResults';
import { IUserInputDTO } from '../models/IUserInputDTO';
import { User } from '../models/User';
import { generateId } from '../services/generateId';

export class UserBusiness {
	private userDatabase = new UserDatabase();

	public async create(input: IUserInputDTO): Promise<void> {
		try {
			if (!input.email || !input.name || !input.password) {
				throw new Error('Dados inválidos (email, name, password)');
			}

			if(!input.email.includes("@")) {
				throw new InvalidInput()
			}

			const verifyEmail = await this.userDatabase.getById(input.email)
			
			if (verifyEmail.length) {
				throw new DuplicateEntry()
			}

			const newUser = new User(
				generateId(),
				input.name,
				input.email,
				input.password,
			)

			await this.userDatabase.create(newUser);
		} catch (error: any) {
			throw new CustomError(error.statusCode, error.message || error.sqlMessage);
		}
	}

	public async getAll(): Promise <User[]> {
		try {
			const result = await this.userDatabase.getAll();

			if (!result.length) {
				throw new NoResults()
			}

			return result;
		} catch (error: any) {
			throw new CustomError(error.statusCode, error.message || error.sqlMessage);
		}
	}
}
