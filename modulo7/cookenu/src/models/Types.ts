export type NewRecipe = {
	id: string;
	userId: string;
	title: string;
	instructions: string;
	date: string;
};

export type NewUser = {
	id: string;
	name: string;
	email: string;
	password: string;
};
