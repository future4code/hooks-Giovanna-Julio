import { UserDatabase } from '../data/UserDatabase';
import { CustomError } from '../error/CustomError';
import { DuplicateEntry } from '../error/DuplicateEntry';
import { InvalidInput } from '../error/InvalidInput';
import { AuthType, NewUserDTO, UserDTO } from '../models/DTOs';
import { Authenticator } from './services/authenticator';
import { generateId } from './services/generateId';

export class UserBusiness {
	public async signUp(input: UserDTO) {
		try {
			if (!input || !input.email || !input.password) {
				throw new InvalidInput();
			}
	
			if (!input.email.includes('@') || input.password.length < 6) {
				throw new InvalidInput();
			}
	
			const userDatabase = new UserDatabase();
			const verifyEmail = await userDatabase.getByEmail(input.email);
	
			if (verifyEmail) {
				throw new DuplicateEntry();
			}
	
			const newUser: NewUserDTO = {
				id: generateId(),
				email: input.email,
				password: input.password,
			};
	
			await userDatabase.createUser(newUser);
	
			const token = new Authenticator().generateToken(newUser.id);
	
			return token;
		} catch (error) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
		
	}

	public async login(input: UserDTO) {
		try {
			if (!input || !input.email || !input.password) {
				throw new InvalidInput();
			}
	
			if (!input.email.includes('@') || input.password.length < 6) {
				throw new InvalidInput();
			}
	
			const userDatabase = new UserDatabase();
			const verifyEmail = await userDatabase.getByEmail(input.email);
	
			if (!verifyEmail.length) {
				throw new InvalidInput();
			}
	
			const verifyPwd = verifyEmail[0].password === input.password
			if (!verifyPwd) {
				throw new InvalidInput()
			}
	
			const token = new Authenticator().generateToken(verifyEmail[0].id);
	
			return token;
		} catch (error) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
		
	}

	public async getActiveUser(token: AuthType) {
		try {
			if (!token || typeof token !== 'string') {
				throw new InvalidInput();
			}
	
			const getData = new Authenticator().getTokenData(token);
	
			const userDatabase = new UserDatabase();
	
			const user = await userDatabase.getById(getData.id);
	
			if (!user.length) {
				throw new InvalidInput();
			}
	
			return { id: user[0].id, email: user[0].email };
		} catch (error) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
		
	}
}
