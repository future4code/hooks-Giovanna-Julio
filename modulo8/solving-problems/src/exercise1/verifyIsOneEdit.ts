function verifyIsOneEdit(stringA: string, stringB: string): boolean {
	if (Math.abs(stringB.length - stringA.length) > 1) return false;

	if (stringA.length > stringB.length) return stringA.includes(stringB);

	if (stringB.length > stringA.length) return stringB.includes(stringA);

	let differencesCount = 0;
	for (let i = 0; i < stringA.length; i++) {
		if (stringA[i] !== stringB[i]) differencesCount++;
	}

	return differencesCount === 1;
};
