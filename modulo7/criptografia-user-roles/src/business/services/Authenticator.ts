import * as jwt from 'jsonwebtoken';
import { AuthType } from '../../models/DTOs';

export class Authenticator {
	public generateToken = (id: AuthType) => {
		const token = jwt.sign({ id: id }, process.env.JWT_KEY as string, {
			expiresIn: '1min',
		});

		return token;
	};

	public getTokenData = (token: AuthType) => {
		try {
			const payload = jwt.verify(
				token,
				process.env.JWT_KEY as string
			) as jwt.JwtPayload;

			const result = {
				id: payload.id,
			};

			return result;
		} catch (error) {
			throw new Error('Unrecognized token');
		}
	};
}
