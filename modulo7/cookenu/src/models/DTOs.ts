export type AuthType = string;

export type UserDTO = {
	email: string;
	name: string;
	password: string;
};

export type LoginDTO = {
	email: string;
	password: string;
};

export type NewRecipeDTO = {
	token: string;
	title: string;
	instructions: string;
	date: string;
};
