export class Movie {
	constructor(
		private id: string,
		private name: string,
		private description: string,
		private duration_in_minutes: number,
		private year_of_release: number
	) {}
}
