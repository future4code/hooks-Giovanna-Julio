export const stringCompression = (input: string): string => {
	const characterArray = [];
	let lastCharacter = input[0];
	let characterCount = 0;

	for (const character of input) {
		if (character !== lastCharacter) {
			characterArray.push(lastCharacter + characterCount);
			lastCharacter = character;
			characterCount = 0;
		}
		characterCount++;
	}

	characterArray.push(lastCharacter + characterCount);
	let result = '';
	for (const key of characterArray) {
		result += key;
	}

	return result.length > input.length ? input : result;
};
